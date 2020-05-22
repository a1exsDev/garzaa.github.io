var lootTable = [
    "A keychain with house keys",
    "A keychain with house and car keys",
    "A keychain with house and motorcycle keys",
    "A keychain with house and aerogyro keys",
    "A keychain with no keys",
    "A keycard",
    "A pen",
    "A fancy pen",
    "A tactical pen",
    "A pen that writes in invisible ink",
    "A pencil",
    "A golf pencil",
    "A highlighter",
    "A marker",
    "A paint pen",
    "A crayon",
    "A piece of chalk",
    "A wallet containing 0 EB",
    "A wallet containing 1D6 EB",
    "A wallet containing 2D6 EB",
    "A wallet containing 3D6 EB",
    "A wallet containing 4D6 EB",
    "A wallet containing 1D10 EB",
    "A wallet containing 2D10 EB",
    "A wallet containing 1D10 x10 EB ",
    "A DataTel Image Wallet",
    "1D6 EB in loose bills",
    "2D6 EB in loose bills",
    "3D6 EB in loose bills",
    "4D6 EB in loose bills",
    "1D10 EB in loose bills",
    "2D10 EB in loose bills",
    "A credit chip worth 1D6 EB",
    "A credit chip worth 2D6 EB",
    "A credit chip worth 3D6 EB",
    "A credit chip worth 4D6 EB",
    "A credit chip worth 1D10 EB",
    "A credit chip worth 2D10 EB",
    "A credit chip worth 1D10 x10 EB",
    "A credit chip worth 1D10 x100 EB",
    "An M.O. Chip (see Chromebook 1, pg 73)",
    "A Courier Chip (see Chromebook 1, pg 73)",
    "A Security Chip (see Chromebook 1, pg 73)",
    "A Digi-Tone ID Chip (see Chromebook 1, pg 73)",
    "A Special Operative Chip (see Chromebook 1, pg 73)",
    "A Poser Impersonation Chip (see Chromebook 1, pg 73)",
    "A PhotoMemory RAM Chip (see Chromebook 1, pg 74)",
    "A Memory Compression Chip (see Chromebook 1, pg 74)",
    "Programmable Chipware (see Chromebook 1, pg 74)",
    "A Mind Games Chip (see Chromebook 1, pg 74)",
    "A Business Trip Chip (see Chromebook 1, pg 74)",
    "A Tourism Chip (see Chromebook 1, pg 74)",
    "A Space Chip (see Chromebook 1, pg 74)",
    "A Maximum Lover Chip (see Chromebook 1, pg 74)",
    "A Stress Chip (see Chromebook 1, pg 75)",
    "An Adrenaline/ Endorphin Surge Chip (see Chromebook 1, pg 75)",
    "An Increased Neural Feedback Option Chip (see Chromebook 1, pg 75)",
    "An Ambidexterity Chip (see Chromebook 1, pg 75)",
    "A Death Trance Chip (see Chromebook 1, pg 75)",
    "A Redundancy Loop Chip (see Chromebook 1, pg 75)",
    "A \"Fish N' Chips\" Chip (see Chromebook 1, pg 75)",
    "A Techie Chip (see Chromebook 1, pg 76)",
    "A Corporate Officer Chip (see Chromebook 1, pg 76)",
    "A Police Chip (see Chromebook 1, pg 76)",
    "A Military Chip (see Chromebook 1, pg 76)",
    "A Rocker Chip (see Chromebook 1, pg 76)",
    "A Secretarial Chip (see Chromebook 1, pg 76)",
    "A BioTec \"SomaWare\" Sleep Induction Chip (see Chromebook 3, pg 37)",
    "A Direct Dataware Navigation/ Orientation Chip (see Chromebook 3, pg 37)",
    "A Direct Dataware Crypto Chip (see Chromebook 3, pg 37)",
    "A DataEdge Inc. Stutter Chip (see Chromebook 3, pg 38)",
    "A Martial Art: ArsakaTe Chip(see Chromebook 3, pg 38)",
    "A Taste Boost Chip (see Chromebook 4, pg 15)",
    "A Lockdown Chip (see Chromebook 4, pg 15)",
    "A Shape Recognition Chip (see Chromebook 4, pg 15)",
    "A ChipLok Chip (see Chromebook 4, pg 15)",
    "A Facedown Chip (see Chromebook 4, pg 16)",
    "A Home Chip (see Chromebook 4, pg 16)",
    "A Speedreading Chip (see Chromebook 4, pg 16)",
    "A Dream Suppressant Chip (see Chromebook 4, pg 16)",
    "A gift card to a local business worth 2D10 EB",
    "A gift card to a local business worth 2D10 x10 EB",
    "A bank strap of 1000 EB in brand-new bills",
    "1d10 pennies",
    "1d10 nickels",
    "1d10 dimes",
    "1d10 quarters",
    "A brand-new agent",
    "An agent with a pseudo AI",
    "An out-of-date agent",
    "A broken agent",
    "An expensive agent",
    "A cheap agent",
    "A burner phone",
    "A walkie-talkie",
    "A notepad containing love poems",
    "A leather notepad containing cocktail recipes",
    "A blank notepad",
    "A notepad containing corporate intel",
    "A notepad containing gang intel",
    "A notepad containing government intel",
    "A datawatch",
    "1D6 armor-piercing bullets",
    "1d10 armor-piercing bullets",
    "A photo of a child",
    "A photo of an adult",
    "A photo of a dog",
    "A photo of a cat",
    "A photo of a bird",
    "A photo of a lizard wearing clothes",
    "A photo of a celebrity",
    "A nude photo",
    "A photo of one of the PCs",
    "A switchblade",
    "A medium pistol",
    "A medium pistol with an extended clip",
    "A silenced medium pistol",
    "An elaborately decorated medium pistol",
    "A heavy pistol",
    "A heavy pistol with an extended clip",
    "An elaborately decorated heavy pistol",
    "A silenced heavy pistol",
    "A very heavy pistol",
    "A very heavy pistol with an extended clip",
    "A silenced very heavy pistol",
    "An elaborately decorated very heavy pistol",
    "A derringer (1d6 damage)",
    "A grenade (4D6 damage)",
    "A C9 explosive pack",
    "A smoke grenade",
    "A flashbang grenade",
    "A teargas grenade",
    "Sunglasses",
    "Mirror shades",
    "Prescription glasses",
    "A phone number written on a scrap of paper",
    "A business card",
    "A small baggie of cocaine",
    "A small baggie of marijuana",
    "A joint",
    "A small baggie of heroin",
    "A small baggie of meth",
    "A small baggie of ecstasy",
    "A small baggie of magic mushrooms",
    "A small baggie of PCP",
    "A small baggie of amphetamine medication",
    "A small baggie of opiate medication",
    "A small baggie of benzodiazepine medication",
    "An endorphin inhaler (see 2020 Rulebook, Pg 123)",
    "1D6 tabs of LSD",
    "A small vial of research chemicals",
    "A small baggie of Prime (see Chromebook 3, Pg 17)",
    "A small baggie of Timewarp (see Chromebook 3, Pg 17)",
    "A small baggie of Berserker (see Chromebook 3, Pg 17)",
    "A small baggie of Sedative (see Chromebook 3, Pg 17)",
    "A small baggie of Stim (see Chromebook 3, Pg 17)",
    "A small baggie of Surge (see Chromebook 3, Pg 17)",
    "A small baggie of Trauma I (see Chromebook 3, Pg 17)",
    "A small baggie of SynthCoke (see 2020 Rulebook, Pg 122)",
    "A kilo of SynthCoke",
    "A small baggie of Syncomp (see 2020 Rulebook, Pg 122)",
    "A small baggie of Speedheal (see 2020 Rulebook, Pg 122)",
    "A small baggie of Boost (see 2020 Rulebook, Pg 123)",
    "A small baggie of Blue Glass (see 2020 Rulebook, Pg 123)",
    "A can of Smash (see 2020 Rulebook, Pg 123)",
    "A small baggie of Black Lace (see 2020 Rulebook, Pg 123)",
    "A small baggie of protein powder",
    "A small baggie of cereal",
    "A datachip with a mundane braindance program on it",
    "A datachip with an illicit braindance program on it",
    "A datachip with encrypted data on it",
    "A datachip with illicit photos on it",
    "A datachip with corporate intel on it",
    "A datachip with gang intel on it",
    "A datachip with government intel on it",
    "A datachip with family photos on it",
    "A datachip with a game on it",
    "A datachip with an obedient Black ICE program on it",
    "A datachip with a netrunner program on it",
    "A vocaloid pop star's album on datachip",
    "A rockerboy's album on datachip",
    "Johnny Silverhand's \"Chippin' In\" on datachip",
    "1D10 albums on datachips",
    "A wiped datachip",
    "An antique glass eye",
    "A pack of gum",
    "An empty hip flask",
    "A hip flask full of liquor",
    "A hip flask full of an unknown liquid",
    "A wedding ring",
    "An engagement ring",
    "An obviously fake ID",
    "1D6 condoms",
    "1D6 tampons",
    "1D6 menstrual pads",
    "1D6 hard candies",
    "A bag of kibble",
    "A package of tissues",
    "A package of wet tissues",
    "Anxiety medication",
    "An epipen",
    "A glucometer",
    "Allergy medication",
    "Eye drops",
    "An asthma inhaler",
    "A bottle of ibuprofen",
    "A bottle of powerful painkillers with 2D10 pills (can be used to heal during active days)",
    "Male enhancement pills",
    "An unlabeled bottle of pills",
    "An IOU note from an unknown party",
    "A comb",
    "A box of mints",
    "Breath spray",
    "A portable game console and 1D6 games",
    "Pliers",
    "A multitool",
    "1D10 zip ties",
    "A removable earpiece",
    "A pair of earrings",
    "A single earring",
    "A bracelet",
    "A necklace",
    "A flamboyant ring",
    "An analogue watch",
    "A digital watch",
    "An expensive watch",
    "A fake expensive watch",
    "An antique pocket watch",
    "A bandana",
    "A handkerchief",
    "A lockpicking kit",
    "A 2-week sobriety token",
    "A 1-month sobriety token",
    "A 6-month sobriety token",
    "A 1-year sobriety token",
    "A 2-year sobriety token",
    "A 5-year sobriety token",
    "A 10-year sobriety token",
    "A small bottle of hot sauce",
    "A small bottle of extreme hot sauce",
    "A Lego minifigure",
    "A plastic lighter",
    "A metal lighter",
    "An ornate monogrammed lighter",
    "A pack of cheap cigarettes",
    "A pack of expensive cigarettes",
    "A single cigarette",
    "An expensive Cuban cigar",
    "A cheap cigar",
    "A miniature drone",
    "A pack of toothpicks",
    "A loose cybernetic eyeball",
    "A loose cybernetic finger",
    "A banana",
    "An apple",
    "An orange",
    "A tomato with a bite taken out of it ",
    "A pre-collapse Twinkie",
    "A leather pouch containing a set of RPG dice",
    "A travel toothbrush",
    "Dental floss",
    "A small bottle of mouthwash",
    "A laser pointer",
    "A prayer card",
    "1D6 screws",
    "1D6 bolts",
    "A colorful plastic fidget spinner",
    "A sleek metal fidget spinner",
    "Lip balm",
    "Lipstick",
    "Lip gloss",
    "Concealer",
    "Mascara",
    "Eyeshadow",
    "Eyeliner",
    "Bronzer",
    "Foundation",
    "Dry shampoo",
    "A bag of glitter",
    "A rain poncho",
    "A can of pepper spray",
    "A taser (1D6 damage)",
    "1d6 bottle caps",
    "A coupon for a free pizza",
    "A coupon for a free sandwich",
    "A coupon for a free round of bowling",
    "A coupon for a free \"happy ending\"",
    "A coupon for a free braindance session",
    "A coupon for a free cab ride",
    "A coupon for a free Combat Cab ride",
    "A coupon for a free helicopter tour",
    "A real ID card with a picture that looks shockingly like one of the PCs",
    "2D10 feet of paracord",
    "2D10 yards of fishing line",
    "1D6 paperclips",
    "1D6 binder clips",
    "A holographic camera",
    "A grocery list",
    "A shiv (1d6 damage)",
    "An unused NCART ticket",
    "A used NCART ticket",
    "A medical facemask",
    "Wired headphones",
    "Wireless headphones",
    "Roller skates",
    "Knee pads",
    "Elbow pads",
    "A scarf",
    "Brass knuckles (1D6 damage)",
    "A screwdriver",
    "A handheld digital pet",
    "A paperback sci-fi novel",
    "A paperback fantasy novel",
    "A paperback mystery novel",
    "A paperback romance novel",
    "A magazine",
    "An adult magazine",
    "An old screamsheet",
    "Today's screamsheet",
    "A can of spray paint",
    "1D6 air hypodermic needles",
    "A portable watercolor set",
    "A sketchbook full of bad drawings",
    "A sketchbook full of good drawings",
    "An empty sketchbook",
    "A rosary",
    "An e-reader",
    "An ancient coin",
    "An antique hobo nickel",
    "An origami crane",
    "An origami chicken",
    "An origami sheep",
    "An origami unicorn",
    "An origami fortune-teller",
    "A D&D character sheet",
    "A spork",
    "CA glue",
    "Trauma shears",
    "1D10 q-tips",
    "1D10 band-aids",
    "A box of chocolates",
    "A pressed flower",
    "1D10 hair ties",
    "1D6 baretts",
    "A small tactical flashlight",
    "A small UV flashlight",
    "A headlamp",
    "A tin of chewing tobacco",
    "A nicotine vape",
    "A marijuana vape",
    "Chopsticks",
    "1D10 mechanical parts",
    "1D6 cyanide pills",
    "1D10 cyanide pills",
    "1D6 ipecac pills",
    "An old-fashioned graphing calculator",
    "An extra pair of underwear",
    "An extra pair of fancy underwear",
    "An extra pair of socks",
    "A dog tag from the South American wars",
    "A plastic grocery bag",
    "A grocery receipt",
    "A gun store receipt",
    "A take-out receipt",
    "A cyberware installation receipt",
    "A tech receipt",
    "A medical receipt",
    "A losing scratch-off lottery ticket",
    "A winning scratch-off lottery ticket for 1D10 EB",
    "A winning scratch-off lottery ticket for 1D6 x100 EB",
    "A winning scratch-off lottery ticket for a free ticket",
    "A goat meat stick",
    "A synthetic meat stick",
    "A finger skateboard",
    "Low-light vision goggles",
    "A mummified finger",
    "A small portable speaker",
    "An antique pipe",
    "A small bottle of hand sanitizer",
    "A 50ML bottle of vodka",
    "A 50ML bottle of gin",
    "A 50ML bottle of whiskey",
    "A 50ML bottle of tequila",
    "A 50ML bottle of rum",
    "A 50ML bottle of bitters",
    "An energy drink",
    "An illegal energy drink",
    "A can of soda",
    "A bag of candy",
    "A bag of chips",
    "A water bottle",
    "A fanny pack",
    "A shoulder holster",
    "A hip holster",
    "A pocket bible",
    "A pocket quran",
    "A pocket torah",
    "A straight razor (1D6 damage)",
    "A pamphlet for a local business",
    "A religious pamphlet",
    "A political pamphlet",
    "A pamphlet for a local cult",
    "An old roll of film",
    "A chemical heating pack",
    "A chemical cooling pack",
    "A gold nugget",
    "Handcuffs",
    "Fluffy handcuffs",
    "A retractable baton (1D6 damage)",
    "An NCPD badge",
    "A US Federal badge",
    "A police radio",
    "Leather gloves",
    "Fingerless gloves",
    "Latex gloves",
    "Winter gloves",
    "Driving gloves",
    "Tactical gloves",
    "A golf glove",
    "A beanie",
    "A durag",
    "A cap gun",
    "A water gun",
    "A toy car",
    "A harmonica",
    "A plastic flute",
    "A small vibrator",
    "A stick-and-poke kit",
    "A glass pipe",
    "1D10 miscellaneous cables",
    "A stain-removal pen",
    "A wooden \"magic wand\"",
    "A box-cutter (1D6 damage)",
    "A flare gun (1D6 damage)",
    "1D6 drill bits",
    "A deck of cards",
    "A deck of rigged cards",
    "A pair of dice",
    "A pair of rigged dice",
    "Casino tokens worth 1D10 x10 EB",
    "Casino tokens worth 1D6 x100 EB",
    "1D6 buttons",
    "Tweezers",
    "A gas mask",
    "A cork",
    "A miniature blowtorch",
    "A mouse trap",
    "A pocket synth",
    "A pocket drum machine",
    "A baseball",
    "A tennis ball",
    "A bouncy ball",
    "A frisbee",
    "3D10 trading cards",
    "A common \"Touching Memories\" figurine",
    "An uncommon \"Touching Memories\" figurine",
    "A rare \"Touching Memories\" figurine",
    "A very rare \"Touching Memories\" figurine",
    "A legendary \"Touching Memories\" figurine",
    "An epic \"Touching Memories\" figurine",
    "A pair of DPI Body Rhythm Dance Bracelets (see Chromebook 2, pg 26) ",
    "1D6 button pins",
    "1D6 enamel pins",
    "1D6 stickers",
    "1D6 patches",
    "A pocket mirror",
    "A cup of pull-tab instant ramen",
    "A US passport",
    "A Mexican passport",
    "A Japanese passport",
    "A Euro passport",
    "A Chinese passport",
    "Rolling papers",
    "A tape measure",
    "A roll of duct tape",
    "A roll of packing tape",
    "A tracker and receiver",
    "A tracker without a receiver",
    "Deodorant",
    "1D6 packets of salt",
    "1D6 packets of sugar",
    "1D6 packets of pepper",
    "1D6 packets of artificial sweetener",
    "1D6 packets of ketchup",
    "1D6 packets of mustard",
    "1D6 packets of mayonnaise",
    "1D6 packets of relish",
    "1D6 packets of powdered creamer",
    "A ski mask",
    "A masquerade mask",
    "A sleeping mask",
    "A short-range EMP unit (1 use, 18'x18' range)",
    "Ear plugs",
    "1D6 nicotine patches",
    "An antique key",
    "An ornate letter opener (1D6 damage)",
    "A generic prepack meal",
    "A good prepack meal",
    "A roll of gauze",
    "An energy bar",
    "Miniature binoculars",
    "A survival blanket",
    "A menpō made of lacquered metal",
    "Protective goggles",
    "A spinning top",
    "An expensive tie",
    "A cheap tie",
    "A yo-yo",
    "1D6 guitar picks",
    "1D6 bullet casings with initials carved in them",
    "An antique compass",
    "A padlock and key",
    "An eyepatch",
    "A hacky sack",
    "An antique film camera",
    "An animal tooth",
    "A human tooth",
    "A pack of sticky notes",
    "A tea candle",
    "A pocket projector",
    "A bag of 1000 ball bearings",
    "A small, primitively carved abstract wooden sculpture",
    "1D6 tea bags",
    "A bag of marbles",
    "1D6 razor blades",
    "A Japanese folding fan",
    "A handheld electric fan",
    "A pocket tuner/ metronome",
    "A bar of chocolate wrapped in foil to look like a folding knife",
    "A can of compressed air",
    "A garotte (1D6 additional choking damage)",
    "A thermos of soup",
    "1D6 scrunchies",
    "An athletic headband",
    "A corkscrew",
    "A boiled egg",
    "A handheld printer",
    "A Telectronics Modulation Chip (see Chromebook 3, pg 13)",
    "Everest VentureWare Climbing Spikes (see Chromebook 3, pg 15)",
    "Everest VentureWare Grapple Line (see Chromebook 3, pg 15)",
    "A Geotech Enviroscanner (see Chromebook 3, pg 16)",
    "A Raven Microcyb Inc. \"Spider\" MicroWaldo Bracer (see Chromebook 3, pg 11)",
    "A Techtronica \"Mite\" Diagnostic Remote (see Chromebook 3, pg 11)",
    "A spray bottle of Utopian \"Small Wonders\" NanoAgents (see Chromebook 3, pg 4)",
    "TriTech Echolocation Goggles (see Chromebook 4, pg 68)",
    "A can of EnduroDrink (see Chromebook 4, pg 71)",
    "A can of ArmorSaver Drink (see Chromebook 4, pg 72)",
    "Thermite-in-a-Tube (see Chromebook 4, pg 72)",
    "A Techscanner",
    "1D6 glow sticks",
    "A Cardlock Decryptor (see 2020 Rulebook, pg 70)",
    "A VocDecryptor (see 2020 Rulebook, pg 70)",
    "IR goggles",
    "An IR flashlight",
    "A drug analyser",
    "A TriTech Sleep Inducer (see Chromebook 1, pg 11)",
    "A Cybermatrix Speed Holster (see Chromebook 1, pg 13)",
    "A Militech Personal Body Alarm (see Chromebook 1, pg 14)",
    "A Trauma Team Card",
    "Shower-in-a-Can",
    "A bottle of Nymph Perfume (see Chromebook 2, pg 11)",
    "A bottle of perfume ",
    "A bottle of cologne",
    "Kiroshi Optics Remote CyberCam (see Chromebook 2, pg 13)",
    "A Kiroshi HUD Monocle (see Chromebook 2, pg 17)",
    "Raven Microcyb Net-Vision IG-Algorith Glasses (see Chromebook 2, pg 24)",
    "A Zetatech D2-3000 Armdeck (see Chromebook 2, pg 25)",
    "A foldable pocket skateboard",
    "A voodoo doll",
    "A flexible display",
    "A Nikkon America Campod (see Chromebook 2, pg 11)",
    "A small bottle of hand lotion",
    "A DDI PrayerWare Unit (see Chromebook 2, pg 13)",
    "A portable power bank",
    "A SecSystems Detention Collar (see Chromebook 2, pg 13)",
    "A Telectronics Tattletale Voice Stress Analyzer (see Chromebook 2, pg 20)",
    "A CCI BRL-3014 Window Trembler (see Chromebook 2, pg 20)",
    "A Bug Detector (see Chromebook 2, pg 20)",
    "A Bug Jammer (see Chromebook 2, pg 20)",
    "An Omega Phone Tap by TriTech (see Chromebook 2, pg 21)",
    "An Arasaka OmniTec Radar Detector (see Chromebook 2, pg 21)",
    "A Telectronics \"Scout\" Signal Tracker (see Chromebook 2, pg 21)",
    "A TriTech \"Mumbler\" White Noise Generator (see Chromebook 2, pg 22)",
    "A direct-to-datachip audio recorder",
    "A bottle of Flashpaint (see 2020 Rulebook, pg 69)",
    "A roll of Flashtape (see 2020 Rulebook, pg 69)",
    "A Holo Generator (see 2020 Rulebook, pg 69)",
    "Binoglasses (see 2020 Rulebook, pg 70)",
    "A line tap unit",
    "1D6 disposable handcuffs",
    "A dermal stapler",
    "A can of Spray Skin (see 2020 Rulebook, pg 70)",
    "Air canister with 1D6 hours of breathable air",
    "A convincing wig",
    "An ugly wig",
    "A flamboyant wig",
    "A bad toupee",
    "A convincing toupee",
    "An electronic jeweler's loupe",
    "1D6 shuriken (1D6 damage)",
    "1D10 paper clips",
    "A concealable digital camera",
    "1D10 rubber bands",
    "1D6 caltrops (1D6 damage)",
    "1D6 kunai (1 D6 damage)",
    "A box of thumbtacks",
    "An eraser",
    "A jade elephant",
    "A jade Buddha",
    "A mouse preserved in a jar of formaldehyde",
    "A letter from a lover",
    "1D6 banjo picks",
    "A container of violin rosin",
    "An IOU note from an NCPD officer",
    "An IOU note from a mid-level corpo",
    "An IOU note from a mid-level gang boss",
    "A Personal Grooming Chip",
    "A Wardrobe and Style Chip",
    "A Swimming Chip",
    "An Accounting Chip",
    "An Anthropology Chip",
    "A Biology Chip",
    "A Botany Chip",
    "A Chemistry Chip",
    "An Education and General Knowledge Chip",
    "A Geology Chip",
    "A History Chip",
    "A Know Language: Japanese Chip",
    "A Know Language: Mandarin Chip",
    "A Know Language: Cantonese Chip",
    "A Know Language: Korean Chip",
    "A Know Language: Vietnamese Chip",
    "A Know Language: Spanish Chip",
    "A Know Language: French Chip",
    "A Know Language: Russian Chip",
    "A Know Language: Polish Chip",
    "A Know Language: Haitian Creole Chip",
    "A Know Language: Latin Chip",
    "A Know Language: English Chip",
    "A Mathematics Chip",
    "A Physics Chip",
    "A Programming Chip",
    "A Stock Market Chip",
    "A Wilderness Survival Chip",
    "A Zoology Chip",
    "An Astrology Chip",
    "A Daytimer Chip",
    "An Archery  Chip",
    "A Dance Chip",
    "A Driving Chip",
    "A Fencing Chip",
    "A Handgun Chip",
    "A Heavy Weapons Chip",
    "A Martial Art: Karate Chip",
    "A Martial Art: Kung Fu Chip",
    "A Martial Art: Jiu Jitsu Chip",
    "A Martial Art: Muay Thai Chip",
    "A Martial Art: Capoeira Chip",
    "A Martial Art: Krav Maga Chip",
    "A Martial Art: Taekwondo Chip",
    "A Martial Art: Thamoc Chip(see Chromebook 3, pg 38)",
    "A Techie AR-Chip(see Chromebook 3, pg 39)",
    "A Corporate AR-Chip(see Chromebook 3, pg 39)",
    "A Military AR-Chip(see Chromebook 3, pg 39)",
    "A Rocker AR-Chip(see Chromebook 3, pg 39)",
    "A Melee Chip",
    "A Motorcycle Chip",
    "An Operate Heavy Machinery Chip",
    "A Pilot: Gyro Chip",
    "A Pilot: Fixed Wing Chip",
    "A Pilot: Dirigible Chip",
    "A Pilot: Vector Thrust Vehicle Chip",
    "A Rifle Chip",
    "An SMG Chip",
    "An Aero Tech Chip",
    "An AV Tech Chip",
    "A Basic Tech Chip",
    "A Cryotank Operation Chip",
    "A Cyberdeck Design Chip",
    "A CyberTech Chip",
    "A Demolitions Chip",
    "A Disguise Chip",
    "An Electronics Chip",
    "An Electronic Security Chip",
    "A First Aid Chip",
    "A Forgery Chip",
    "A Gyro Tech Chip",
    "A Pharmaceuticals Chip",
    "A Pick Lock Chip",
    "A Pick Pocket Chip",
    "A Play Instrument Chip",
    "A Weaponsmith Chip",
    "A micro cyberdeck",
    "A Beyblade",
    "A pain medication slap patch",
    "An inflatable bed",
    "A pair of fishnet stockings",
    "A Speedo",
    "An 8 ball",
    "A pair of HUD-enabled contact lenses",
    "A micro rotary tool",
    "1D6 fish hooks",
    "1D6 fishing lures",
    "A live scorpion",
    "A live tarantula",
    "A live mouse",
    "A live rat",
    "A live hamster",
    "A dead hamster",
    "A robotic scorpion",
    "A robotic tarantula",
    "A robotic butterfly",
    "A small robotic snake",
    "A live betta fish in a jar",
    "A Ring Pop",
    "A can of fish",
    "A can of synthetic fish",
    "A can of cat food",
    "A box of matches",
    "A pen covered in dried blood",
    "An allen wrench",
    "A tiny ant farm",
    "A sea shell",
    "An unusually large ball of lint",
    "A gold tooth",
    "A loose cybernetic tooth with a camera in it",
    "A marijuana brownie",
    "A fossilized snail",
    "A small sewing kit",
    "A baggie containing 1D6 kumquats",
    "Mardi Gras beads",
    "An obviously counterfeit 100 EB bill",
    "An air hypodermic filled with Naloxone",
    "A lollipop",
    "Nail clippers",
    "A nail file",
    "A whistle",
    "A dog whistle",
    "A folding knife",
    "An antique hunting knife",
    "A butterfly knife",
    "An awl (1D6 damage)",
    "A bolo tie in the shape of a longhorn bull",
    "An antique dagger",
    "A tanto (1D6 damage)",
    "A military medal",
    "A locket containing a photo of a teen idol",
    "A bolo tie in the shape of the Militech logo",
    "A deck of tarot cards",
    "A knight chess piece",
    "A pawn chess piece",
    "A king chess piece",
    "A queen chess piece",
    "A rook chess piece",
    "A bishop chess piece",
    "A bottle of bubbles",
    "A rabbit's foot",
    "A beautiful ceramic D20",
    "An orthodontic retainer",
    "An ornate belt buckle",
    "A small squirt bottle of a strong acid",
    "A slingshot",
    "A bag of 2D10 uninflated water balloons",
    "An exploding cigar (4D6 damage)",
    "1D6 firecrackers",
    "A bottle containing 2D10 placebo pills",
    "A clown nose",
    "A knife disguised as a hairpin",
    "2D6 blank cartridges",
    "2D10 blank cartridges",
    "2D10 rubber bullets",
    "A comic book",
    "A practical joke hand buzzer",
    "Plastic poop",
    "Plastic vomit",
    "Stink spray",
    "A rubber spider",
    "A rubber cockroach",
    "A rubber snake",
    "A prank camera that shoots water",
    "A prank boutonniere that shoots water",
    "A prank stick of gum that shocks the victim",
    "A prank pen that shocks the victim",
    "An electronic whoopee cushion",
    "A Chinese finger trap",
    "Prank candy that tastes terrible",
    "A small bottle of fake blood",
    "Plastic vampire teeth",
    "A bottle of white out",
    "A container of greasepaint",
    "A nose ring",
    "Silly Putty",
    "A container of slime",
    "A fake silicone wound",
    "A stress ball shaped like the Petrochem logo",
    "A hand strengthener",
    "A small baggie of mundane white powder made to look like drugs",
    "A pirate flag",
    "An American flag",
    "A Japanese flag",
    "1D10 small magnets",
    "A bent spoon",
    "A small bottle of rat poison",
    "A gimp mask",
    "A flogger",
    "Nipple clamps",
    "A roll of velcro",
    "A broken key",
    "A bowtie",
    "A pacifier",
    "1D6 washers",
    "1D10 feet of copper wire",
    "A military beret",
    "A French beret",
    "A kippah",
    "A Weepul",
    "A finger puppet",
    "An antique wheellock pistol (1D6 damage)",
    "An acorn",
    "A pretty rock",
    "1D6 wild berries",
    "A nomad country album on datachip",
    "An action movie on datachip",
    "A rom com movie on datachip",
    "A sci fi movie on datachip",
    "A fantasy movie on datachip",
    "A bad comedy movie on datachip",
    "An independent pirate movie on datachip",
    "1D10 baseball cards",
    "An antique wooden thimble",
    "Opera gloves",
    "1D6 LEDs",
    "A handheld microscope",
    "1D6 \"healing\" crystals",
    "A small wireless mouse",
    "A worry stone",
    "The skull of a rodent",
    "A troll doll",
    "A pair of drumsticks",
    "A meeple",
    "A pair of real ivory pistol grips",
    "A domino",
    "1D10 pogs",
    "2D10 x10 arcade tickets",
    "2D10 arcade tokens",
    "A small metal puzzle",
    "A swastika armband",
    "A primitive wooden fertility idol",
    "A pewter fantasy miniature",
    "An antique ivory netsuke in the form of a rabbit",
    "An antique wooden netsuke in the form of a laughing monkey",
    "An antique ceramic netsuke in the form of a fat man",
    "An antique metal netsuke in the form of a frog",
    "A modern plastic netsuke in the form of a popular cartoon character",
    "A modern metal netsuke in the form of a cybernetic hand holding a knife",
    "A modern wooden netsuke in the form of the Arasaka logo",
    "A collapsible metal cup",
    "1D6 bottles of essential oil",
    "A polished wooden ball with a name carved in it",
    "1D10 small springs",
    "A pair of \"sexy\" dice",
    "1D10 temporary tattoos",
    "A ping pong ball",
    "A golf ball",
    "A set of three juggling balls",
    "A g-string with Johnny Silverhand's face on it",
    "An unfinished sudoku puzzle",
    "An unfinished crossword puzzle",
    "A comic strip clipped from a screamsheet",
    "A handheld notary embosser",
    "A rubber stamp that says \"DECLINED\"",
    "A rubber stamp that says \"APPROVED\"",
    "A rubber stamp that says \"PAID\"",
    "A rubber stamp that says \"URGENT\"",
    "1D6 fake moustaches",
    "A joker card",
    "1D10 Alka-Seltzer tablets",
    "A water filtration straw",
    "1D10 water filtration tablets",
    "A metal boba straw",
    "A decoder ring",
    "A plastic cocktail stirrer shaped like a Tiki",
    "1D6 golf tees",
    "Kickboxing hand wraps",
    "A hockey puck",
    "A Kennedy half dollar with a hole shot through it",
    "1D6 chicken bones",
    "An antique monocle",
    "A colored pencil",
    "A chainmail glove",
    "A knife disguised as a tube of lipstick",
    "A tube of toothpaste",
    "A hatchet (1D6 damage)",
    "A tomahawk (1D6 damage)",
    "An elote wrapped in aluminum foil",
    "A pair of nunchucks (2D6 damage)",
    "A pair of sais (2D6 damage each)",
    "A handheld crossbow and 1D10 bolts (1D6 damage)",
    "A shrunken head",
    "A cucumber wrapped in aluminum foil",
    "Crocheting needles",
    "Knitting needles",
    "A loose ID card",
    "1D6 ID cards of various individuals",
    "A loose driver's license",
    "1D6 driver's licenses of various individuals",
    "A loose aerogyro license",
    "A loose trucking license",
    "A loose CPR certification card",
    "A loose cosmetology certificate",
    "A loose Johnny Silverhand Fan Club membership card",
    "A micro diploma in business",
    "A micro diploma in history",
    "A micro diploma in chemistry",
    "A micro diploma in philosophy",
    "A micro diploma in math",
    "A micro diploma in art",
    "A micro diploma in english",
    "A micro medical degree",
    "A micro diploma in theater",
    "A micro diploma in creative writing",
    "A micro diploma in physics",
    "A micro diploma in biology",
    "A micro diploma in engineering",
    "A micro diploma in gender studies",
    "A micro diploma in anthropology",
    "A micro diploma from a police academy",
    "A lighter that looks like a gun",
    "A set of cheap grills",
    "A set of gold grills",
    "A set of gold grills inlaid with colorful gems",
    "A small decorative bottle full of ashes",
    "1D6 human teeth",
    "A small makeshift bomb (2D6 damage)",
    "A small baggie full of crumbs",
    "A bottle of multivitamins",
    "A Jew's harp",
    "A kazoo",
    "A cup of pull-tab instant oatmeal",
    "A label maker",
    "A urine sample",
    "A lock of hair",
    "Wire clippers",
    "A spray paint stencil",
    "A wakizashi (2D6 damage)",
    "A trench knife",
    "A dog collar",
    "A cat collar",
    "An ocarina",
    "A pickle in a bag",
    "A mbira",
    "A genetically modified tiny coconut",
    "A genetically modified tiny cube-shaped watermelon",
    "A bottle of appetite suppressants",
    "A fortune from a fortune cookie",
    "A bag of goat jerky",
    "A bag of chicken jerky",
    "A bag of synthetic jerky",
    "1D10 cannabis seeds",
    "1D10 tomato seeds",
    "1D10 flower seeds",
    "1D10 unknown seeds",
    "1D10 squash seeds",
    "A petri dish full of bacteria",
    "An herb grinder",
    "Glow-in-the-dark shoelaces",
    "A dorodango",
    "A cocktail toothpick shaped like an umbrella",
    "An arrowhead",
    "A chisel",
    "A crow bar (2D6 damage)",
    "1D10 nails",
    "Nail scissors",
    "A mint tin full of fingernail clippings",
    "1D10 traffic flares",
    "A fire starter",
    "A spot locator",
    "A glass breaking tool",
    "1D10 safety pins",
    "A can of insect repellant",
    "A melodica",
    "A bottle of sunscreen",
    "A pocket solar panel",
    "A \"dowsing rod\"",
    "A pocket camping stove",
    "A four-leaf clover encased in clear resin",
    "A pulse oximeter",
    "A datachip containing plans for a 3d printed pistol",
    "A sports bra",
    "1D6 unidentified circuit boards",
    "A walnut shell carved to look like a brain",
    "A ceramic kitchen knife",
    "A piece of purple seaglass",
    "A detached wallet chain",
    "A rocket propelled grenade round",
    "Kiroshi HUD Goggles (see Chromebook 2, pg 17)",
    "A buzzsaw blade",
    "1D6 carabiners",
    "A pair of panty hose",
    "A pair of pasties"
];