const dpi = 96;
const canvasSize = new vec2(8*dpi, 6*dpi);

let grid = [];
let allCells = [];
const gridSize = new vec2(3, 3);
const exportSVG = true;

const params = {
	cellSize: 150,
	maxDepth: 3,
	splitChance: 0.7,
	subSplitModifier: 0.3,
	drawNeighbors: false,
	drawConnections: false,
	drawBorders: false,
	drawWalls: true,
}

let margin = new vec2(
	(canvasSize.x - params.cellSize*gridSize.x)/2,
	(canvasSize.y - params.cellSize*gridSize.y)/2
);

class Cell {
	constructor(size, gridPos, depth, origin) {
		this.connections = [];
		this.size = size;
		this.grid = null;
		this.gridPos = gridPos;
		this.pos = gridPos.scale(size).add(origin);
		this.center = this.pos.add(new vec2(size/2, size/2));
		this.depth = depth;
		this.neighbors = {};
		this.split();
	}

	split() {
		if (
			this.depth < params.maxDepth
			// decrease split chance as it goes deeper
			&& Math.random() < (params.splitChance * (1-(this.depth * params.subSplitModifier)))
		) {
			// then create another 3x3 grid
			// of cells with size/3, etc
			this.grid = [];
			generate(this.grid, new vec2(3, 3), this.size/3, this.depth+1, this.pos);
		} else {
			allCells.push(this);
		}
	}

	draw() {
		if (!this.grid) {
			if (params.drawBorders) drawCell(this, this.pos, this.size);
			if (params.drawNeighbors) this.drawNeighbors();
			if (params.drawConnections) this.drawConnections();
			if (params.drawWalls) this.drawWalls();
		}
		else {
			drawGrid(this.grid);
		}
	}

	drawWalls() {
		// look at connections
		this.connections.forEach(c => {		
			// need to get CENTER POSITION
			// otherwise it fuckes up the alignment
			if (c.center.x < this.center.x) this.left = true;
			else if (c.center.x > this.center.x) this.right = true;
			else if (c.center.y > this.center.y) this.down = true;
			else if (c.center.y < this.center.y) this.up = true;
		});
		drawCell(this, this.pos, this.size);
	}

	drawNeighbors() {
		push();
		stroke("#ff0000");
		this.lineToNeighbor(this.neighbors.up);
		this.lineToNeighbor(this.neighbors.down);
		this.lineToNeighbor(this.neighbors.left);
		this.lineToNeighbor(this.neighbors.right);
		pop();
	}

	drawConnections() {
		push();
		stroke("#0000ff");
		this.connections.map((n) => this.lineToNeighbor(n));
		pop();
	}

	lineToNeighbor(neighbor) {
		if (!neighbor) return;
		line(
			this.pos.x+this.size/8, this.pos.y+this.size/8,
			neighbor.pos.x+neighbor.size/2, neighbor.pos.y+neighbor.size/2
		);
		push();
		fill("#00ff00")
		ellipse(this.pos.x+this.size/2, this.pos.y+this.size/2, 2);
		pop();
	}

	inDirection(xDir, yDir) {
		// if not split, just return this
		if (!this.grid) {
			return this;
		} else {
			// then return the closest sub-cell on the rim to that neighbor
			// xdir and ydir are directions out from the center
			// this is assuming it's 3x3
			// y is still down though
			return this.grid[1+xDir][1+yDir].inDirection(xDir, yDir);
		}
	}

	getNeighbors() {
		const n = [];
		if (this.neighbors.up) n.push(this.neighbors.up);
		if (this.neighbors.down) n.push(this.neighbors.down);
		if (this.neighbors.left) n.push(this.neighbors.left);
		if (this.neighbors.right) n.push(this.neighbors.right);
		return n;
	}
}

// we draw from the top left corner, not the center
function drawCell(cell, pos, sideLength) {
	if (!cell.up) {
		line(pos.x, pos.y, pos.x+sideLength, pos.y);
	}
	if (!cell.right) {
		line(pos.x+sideLength, pos.y, pos.x+sideLength, pos.y+sideLength)
	}
	if (!cell.down) {
		line(pos.x, pos.y+sideLength, pos.x+sideLength, pos.y+sideLength);
	}
	if (!cell.left) {
		line(pos.x, pos.y+sideLength, pos.x, pos.y);
	}
}

function drawGrid(currGrid) {
	for (let x=0; x<currGrid.length; x++) {
		for (let y=0; y<currGrid[x].length; y++) {
			currGrid[x][y].draw();
		}
	}
}

function setup() {
	noFill();
	stroke(0);
	strokeWeight(1);
	createCanvas(canvasSize.x, canvasSize.y, exportSVG ? SVG : undefined);
	init();
}

function init() {
	margin = new vec2(
		(canvasSize.x - params.cellSize*gridSize.x)/2,
		(canvasSize.y - params.cellSize*gridSize.y)/2
	);
	generate(grid, gridSize, params.cellSize, 0, new vec2(0, 0));
	carve(grid);
	grid[0][0].inDirection(-1, -1).left = true;
	grid[gridSize.x-1][gridSize.y-1].inDirection(1, 1).right = true;
}

function generate(currGrid, currGridSize, cellSize, currentDepth, currOrigin) {
	// clear it when redrawing
	allCells.length = 0;
	currGrid.length = 0;
	for (let x=0; x<currGridSize.x; x++) {
		let tempRow = [];
		for (let y=0; y<currGridSize.y; y++) {
			tempRow.push(new Cell(
				cellSize,
				new vec2(x, y),
				currentDepth,
				currOrigin,
			));
		}
		currGrid.push(tempRow);
	}

	// then link the neighbors
	// when this runs, the lower levels have already populated and linked
	for (let x=0; x<currGridSize.x; x++) {
		for (let y=0; y<currGridSize.y; y++) {
			let cell = currGrid[x][y];
			// link up
			let a, b;
			if (y > 0) {
				a = cell.inDirection(0, -1);
				b = currGrid[x][y-1].inDirection(0, 1);
				a.neighbors.up = b;
				b.neighbors.down = a;
			}

			// link down
			if (y < currGrid[x].length-1) {
				a = cell.inDirection(0, 1);
				b = currGrid[x][y+1].inDirection(0, -1);
				a.neighbors.down = b;
				b.neighbors.up = a;
			}
			// link left
			if (x > 0) {
				a = cell.inDirection(-1, 0);
				b = currGrid[x-1][y].inDirection(1, 0);
				a.neighbors.left = b;
				b.neighbors.right = a;
			}
			// link right
			if (x < currGrid.length-1) {
				a = cell.inDirection(1, 0);
				b = currGrid[x+1][y].inDirection(-1, 0);
				a.neighbors.right = b;
				b.neighbors.left = a;
			}
		}
	}
}

function carve() {
	const visited = new Set();
	const stack = [];
	//pick a random cell, mark as visited and push to stack
	const start = allCells[Math.floor(Math.random() * allCells.length)];
	visited.add(start);
	stack.push(start);
	while (stack.length > 0) {
		let current = stack.pop();
		// if no unvisited neighbors
		let unvisitedNeighbors = current.getNeighbors().filter((x) => !visited.has(x));
		if (unvisitedNeighbors.length > 0) {
			// push current to the stack
			stack.push(current);
			// pick a random one and connect the two
			let c = unvisitedNeighbors[Math.floor(Math.random()*unvisitedNeighbors.length)];
			c.connections.push(current);
			current.connections.push(c);
			// mark the chosen cell as visited and push it to the stack
			visited.add(c);
			stack.push(c);
		}
	}
}

function draw() {
	background(255);
	push();
	translate(margin.x, margin.y);
	drawGrid(grid)
	pop();
}

var gui = new dat.GUI();
gui.add(params, 'cellSize', 5, 200);
gui.add(params, 'maxDepth', 1, 4);
gui.add(params, 'splitChance', 0, 1);
gui.add(params, 'subSplitModifier', 0, 1);
gui.add(params, 'drawNeighbors');
gui.add(params, 'drawConnections');
gui.add(params, 'drawBorders');
gui.add(params, 'drawWalls');

var obj = { 
	regen:function(){ 
		init();
	},
	export: function() {
		save("output.svg");
	}
};
gui.add(obj, "regen")
if (exportSVG) {
	gui.add(obj, 'export');
}
