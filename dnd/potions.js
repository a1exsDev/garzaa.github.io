function randPotion() {
    $("#outcome-title").text(getRand(type))
    $("#outcome-text").html(
        "In: " + getRand(container) +
        "<br>Effect: " + getRand(effects) +
        "<br>Strength: " + getRand(strength) +
        "<br>Side Effects: " + getRand(sideeffects) +
        "<br>Appearance: " + getRand(appearance) + " " + getRand(appearance2) +
        "<br>Smell: " + getRand(smell) +
        "<br>Taste: " + getRand(taste) +
        "<br>Label: " + getRand(label)
    )
}

var type = ["Potion", "Elixir", "Draught", "Vial", "Philter", "Tonic", "Brew", "Ichor", "Juice", "Concoction", ]
var effects = ["Healing. It instantly regenerates some health when drank.", "Vigor. Gives temporary health when drank.",
    "Vitality. It slowly regenerates health over a period of some hours.", "Might. It gives a bonus to attack rolls after drinking.",
    "Courage. Gives immunity to fear and some temporary inspiration.", "Giant Strength. It gives the user much more strength.",
    "Flame Resistance. It gives resistance to fire damage.", "Cold Resistance. It gives resistance to cold damage.",
    "Necro Resistance. Gives resistance to necrotic damage.", "Radiant Resistance. Gives resistance to radiant damage.",
    "Stoneskin. Gives resistance to martial damage.", "Acid Resistance. Gives resistance to acid.",
    "Lightning Resistance. Gives resistance to lightning damage.", "Succubus Charm. Makes the drinker irresistible to nearby people.",
    "Shielding. Gives the user a magical shield of energy.", "Flame Breath. Gives the user fire breath for a short time.",
    "Growth. Makes the user double in size.", "Shrinking. Makes the user half in size.",
    "Comprehension. Lets the user understand all languages.", "Fertility. Makes the user very fertile, almost certain to make a baby under its effects!",
    "Intimidation. Gives the user a huge booming voice that terrifies those around.",
    "Luck. It gives the user a temporary boost to luck.", "Mana. Gives the user more magical power to cast with.",
    "Arcane. Gives the user more powerful spells.", "Animal form. Makes the user turn into a random animal.",
    "Dreams. Makes the user get lost in a hallucinary dream world of their perfect dream.",
    "Nightmares. Makes the user get lost in a hallucinary dream world of their worst nightmares.",
    "Stamina. Gives the user more stamina and constitution.", "Fleet foot. Makes the user have more speed.",
    "Knowledge. Increases the users intelligence temporarily.", "The Bard. Increases the users charisma and charm temporarily.",
    "Disguise. Changes the users form to a disguised form of any race and appeance.",
    "Feast. Removes all hunger and thirst from the target.", "Youth. Makes the user grow some years younger.",
    "Age. Makes the user grow some years older.", "Furnace. Makes the user radiate with a damaging aura.",
    "Eagle Sight. Gives the user strong vision and a bonus to perception.", "Health. Cures all diseases and illnesses.",
    "Invulnerability. Freezes the user in stasis that makes them immune to damage but they cannot move or act.",
    "Riddle me gone. Gives the user the cure to a single riddle.", "Horrifying appearance. Makes the user look more ugly for a time.",
    "Beautiful appearance. Makes the user appear more attractive for a time.", "Swordsmanship. Makes the user more effective and versatile with a blade.",
    "Bowmanship. Makes the user more effective with a bow or ranged weapon.", "Nymph Breath. Gives water breathing.",
    "Midas. Makes the user turn things to gold.", "Berserker. Makes the user rage with great strength.",
    "Utter Hatred. Makes the user have bonuses against a particular type of enemy.",
    "Oracle. Lets the user divinate the future.", "Demonic Leech. Heals a portion of all damage the user deals.",
    "Fey Nature. Lets the user become one with animals and nature around them.", "Tracelessness. Makes the user very hard to follow.",
    "Gracefulness. Makes the user have a better acrobatics skill.", "Goblin Climb. Gives the user a bonus to climbing.",
    "Dead Ringer. Makes the user appear completely dead to all magic.", "One Leafed Clover. Gives the user worst luck.",
    "Possession. Lets the user gain control of a nearby creature, their body comatosed while they do.",
    "Owls Wake. Makes the user need no sleep for a time.", "Hawks Flight. Lets the user fly.",
    "Peace. Makes the user very calm and unable to harm others.", "Rejuvenation. Heals a single scar or bad injury on the user such as a missing arm.",
    "Sphinxes Truth. Makes the user tell the truth.", "Serpent Tongue. Makes the user only able to lie.",
    "Navigation. Makes the user unable to get lost and find where they need.", "Hook Horror. The users hands become sharp weaponised blades.",
    "Schaffensfreude. Makes the enemies take damage as they deal it to the user.",
    "Invisibility. Makes the user invisible.", "Wild magic. Taps into wild magic making an absolutely random thing happen.",
    "Fame. Makes the user more famous.", "Goats Trek. Makes the user immune to the toils of long travels and bad weather.",
    "Gargoyle Toughness. Increases the users constitution.", "Atomic Clock. Lets the user know the exact tme and date.",
    "Transmutation. Lets the user have the ability to change somethings properties.",
    "Iron Skin. Turns the users skin to metal giving them many resistances.", "Sex Change. Changes the users gender.",
    "Race Change. Changes the users race.", "Musical Breath. Makes the user say everything in song, and fey music follows them in the air.",
    "Utter Understanding. Makes the user know very intimately about one exact thing. Random, or they can decide.",
    "Split Form. The user turns into two or three tiny versions of themselves and controls them all.",
    "Flavour. Makes anything and everything taste amazing!", "Glimmer. Makes the user and its gear instantly clean and as good looking as possible.",
    "Love. Makes the user and someone else fall in love.", "Poison. Poisons the user, weakening them.",
    "Rebirth. Resurrects the user if they die soon after drinking.", "Elemental form. Turns the user to an elemental form relevant to their personality.",
    "True form. Turns the user into a familiar like creature similar to their personality.",
    "Gods Touch. Gives the user a holy connection to their god or fiendish deity.",
    "Antidepressant. Does what it says on the tin.", "Ghostly Form. Makes the user intangible and able to phase through objects.",
    "Artisans Skill. Gives the user skill in a particular art temporarily.", "Godly form. Improves all stats.",
    "Bless Weapon. Makes the users weapons do more damage.", "Euphoria. Makes the user feel amazing and trip out.",
    "Bodyguard. Creates a spectral bodyguard for a short time who obeys orders.", "Babelfish. Lets the user speak any language but not understand it.",
    "Preservation. Stops whatever its poured on from rotting or degrading.", "Fear. Makes the user terrified.",
    "Night vision. Gives the ability to see in the dark.", "Tracking. Lets the user track an enemy.",
    "Cure-all. Cures any status effects.",
]
var strength = ["Regular with a slight side effect.", "Regular with no side effect.", "Regular with a strong side effect.",
    "Minor with a strong side effect.", "Minor with a slight side effect.", "Major with a strong side effect.",
    "Major with a small side effect.", "A poison. Almost no positive affect all side effect.",
    "Temporary but strong and wears off quickly.", "Seemingly permanent.",
]
var sideeffects = ["Nothing bad at all!", "Puts the user to sleep.", "Rapid hair growth all over the body.",
    "Bleeding from the eyes.", "Vivid hallucinations.", "Flashbacks of your own eventual demise.",
    "The skin to crack and appear distorted.", "Spots to grow on the skin.", "Diarrhoea.",
    "Vomiting.", "Blurred Vision.", "Blindness.", "Deafness.", "Mutism.", "Health loss via rapid bleeding.",
    "A sudden horrific accent.", "The irresistible urge to dance.", "The hearing of demons.",
    "Loss of balance.", "Everything tasting like dirt for some time.", "Excessive drooling.",
    "Loss of intelligence.", "Loss of strength.", "Loss of speed.", "Loss of charisma.", "Genuine happiness.",
    "Hunger.", "Thirst.", "Trouble breathing.", "Sudden Moustache.", "Poisoning.", "Petrification.",
    "Stunning.", "Immobilisation.", "Increased libido.", "Fidgeting.", "Itchiness.", "Rashes.", "Attracts bears.",
    "Magically covers in dirt.", "Horrifying stench.", "Baldness.", "Swelling.", "Loss of a random item.",
    "Curses.", "Damage.", "Weakness to a magical damage type.", "Weakness to physical damage.",
    "Feelings of Guilt", "Feelings of Anxiety.", "Feelings of Shame.", "Sneezing.", "Uncontrollable crying.",
    "Need to sing heroic music.", "Urge to hug.", "Kleptomania.", "Burping.", "Loss of smell.",
    "Insomnia.", "Paranoia.", "Bad luck.", "Summons imps that want to kill you.", "Summons angry bees.",
    "Fear of something.", "Temporary madness.", "Relaxation.", "Appreciation of colours and sound.",
    "Tripping the hell out.", "Painful lust.", "Light headedness.", "Increased confidence.",
    "Recklessness.", "Rage.", "Sadness.", "Dizziness.", "Pain.", "Slight possession.", "Allergic reaction to your favourite food.",
    "Strong believe you’re someone else.", "Severe debt.", "Grumpiness.", "Muscle spasms.",
    "A bloated feeling.", "A cold.", "A fever.", "Becoming strangely light.", "Weakness.", "The urge to fight.",
    "The need to make friends.", "Nausea.", "Mood swings.", "Addiction.", "Need for booze.", "Drunkeness.",
    "Coughing.", "Uncontrollable babbling.", "Slight aches.", "A bad taste for some time.",
    "Giddiness.", "Laughter.", ]
var container = ["A conical smooth glass bottle.", "A square glass bottle.", "A not quite watertight leather waterskin.",
    "A stone flask.", "A metal thermos.", "A glass syringe.", "A small medical vial.", "A small shot sized bottle.",
    "A large metal bottle.", "A capped horn.", "An ornate very decorated glass bottle.",
    "A geometric diamond shaped bottle.", "A translucent long wine bottle.", "A translucent beer bottle.",
    "A leather pouch.", "An inhaler like spray bottle.", "A coloured bottle.", "A bone flask.",
    "A small metal vial.", "A large bottle that can be swigged several times.",
]
var appearance = [
    "Clear.", "Blue.", "Green.", "Red.", "Pale Green.", "Pink.", "Light Blue.", "White.", "Black.", "Dark Grey.",
    "Light grey.", "Yellow.", "Orange.", "Gold.", "Rainbow.", "Bronze.", "Metallic.", "Purple.", "Brown.",
    "Dark Red.",
]
var appearance2 = ["Flecks of colour.", "Swirls of colour.", "Fizzing bubbles.", "Bubbles suspended in it.",
    "Some kind of bone floating in it.", "Leaves and flowers in it.", "Two separating liquid.",
    "A bright glow.", "A soft glow.", "Stripes of colour.", "Translucency.", "A cloudy murkiness.",
    "Blood within it.", "Dirt floating in it.", "Chunks of metal in it.", "Some type of gore from a slain creature.",
    "Steam coming from it.", "A face in the liquid.", "Constantly moving and shifting liquid.",
    "A constant heat.", ]
var texture = ["Thick and sludgy.", "Thin and watery.", "Airy and bubbly.", "Slimey.", "Almost solid.", "Oily.",
    "Chunky.", "Bitty.", "Milky.", "Almost gaseous.", ]
var smell = ["Nothing at all.", "Sulphur.", "Fresh air.", "Baking cookies.", "Flowers.", "Rotting meat.", "Egg.",
    "Rotten eggs.", "Fresh bread.", "Blood.", "Home.", "Vomit.", "Garlic.", "Fruit.", "Chocolate.", "Beer.",
    "Smoke.", "Wood.", "Death.", "Orc.", "Wet dog.", "Wet goblin.", "Perfume.", "Cheap perfume.", "Musk.",
    "Garbage.", "Sand.", "The Forest.", "Nuts.", "Acidic.", "Spicy.", "Minty.", "Of chemicals.", "Dirt.", "Of something bad flavoured to taste better.",
    "Alcohol.", "Sugar.", "A damp cave.", "Strange.", "Indescribable but nice.", "Indescribable but horrid.",
    "Rain.", "Medical.", "Bacon.", "Coffee.", "Cut grass.", "Vanilla.", "The sea.", "Roast meat.", "Festive.",
    "Lavender.", "Lilac and Gooseberries.", "A fresh baby.", "A new car.", "Cirtrus.", "Leather.",
    "Metal.", "A forge.", "Fresh Cake.", "Paint.", "Wine.", "Polish.", "Cheese.", "Fish.", "Compost.", "The sewers.",
    "Apples.", "Holy oils.", "Massage oil.", "A brothel.", "Old fruit.", "Roses.", "Something that stirs memories.",
    "Gingerbread.", "Cinnamon.", "Candy.", "Fumes.", "Bark.", "Chicken.", "Beef.", "Human Flesh.", "Gunpowder.",
    "A storm.", "Success.", "Gold.", "Mayonnaise.", "Barbeque.", "Salt.", "Pepper.", "Aromatic spices.",
    "Fruit punch.", "Water.", "Fresh water.", "Stagnant water.", "Mud.", "A colour.", "Music.", "The end of the world.",
    "Magically the worst thing to you", "Magically the most desirable thing to you.", ]
var taste = ["Nothing at all.", "Sulphur.", "Fresh air.", "Baking cookies.", "Flowers.", "Rotting meat.", "Egg.",
    "Rotten eggs.", "Fresh bread.", "Blood.", "Home.", "Vomit.", "Garlic.", "Fruit.", "Chocolate.", "Beer.",
    "Smoke.", "Wood.", "Death.", "Orc.", "Wet dog.", "Wet goblin.", "Perfume.", "Cheap perfume.", "Musk.",
    "Garbage.", "Sand.", "The Forest.", "Nuts.", "Acidic.", "Spicy.", "Minty.", "Of chemicals.", "Dirt.", "Of something bad flavoured to taste better.",
    "Alcohol.", "Sugar.", "A damp cave.", "Strange.", "Indescribable but nice.", "Indescribable but horrid.",
    "Rain.", "Medical.", "Bacon.", "Coffee.", "Cut grass.", "Vanilla.", "The sea.", "Roast meat.", "Festive.",
    "Lavender.", "Lilac and Gooseberries.", "A fresh baby.", "A new car.", "Cirtrus.", "Leather.",
    "Metal.", "A forge.", "Fresh Cake.", "Paint.", "Wine.", "Polish.", "Cheese.", "Fish.", "Compost.", "The sewers.",
    "Apples.", "Holy oils.", "Massage oil.", "A brothel.", "Old fruit.", "Roses.", "Something that stirs memories.",
    "Gingerbread.", "Cinnamon.", "Candy.", "Fumes.", "Bark.", "Chicken.", "Beef.", "Human Flesh.", "Gunpowder.",
    "A storm.", "Success.", "Gold.", "Mayonnaise.", "Barbeque.", "Salt.", "Pepper.", "Aromatic spices.",
    "Fruit punch.", "Water.", "Fresh water.", "Stagnant water.", "Mud.", "A colour.", "Music.", "The end of the world.",
    "Magically the worst thing to you", "Magically the most desirable thing to you.", ]
var label = ["Its name and title in bold letters.", "Its description in ornate elvish.", "Its description in elvish with a relevant mythic story.",
    "Its description on dwarven.", "Dwarven runes.", "Its description in gnomish.", "Gnomish diagrams for its use.",
    "The words USE ONLY IN EMERGANCIES scrawled on iti.", "A mass produced label claiming the company has no fault for any side effects.",
    "A mass produced label saying it’s a new flavour.", "Very tiny print describing how the potion was made in great detail, around 1000 words.",
    "Its name in Bold words in Giant.", "Is scrawled off.", "Has faded beyond reading.",
    "Doesn’t seem to have one.", "Its description and a random fact.", "Its description and a small compliment to make your day better.",
    "Its description and a joke.", "Its description in infernal.", "Its description in some ancient language.",
    "All in some kind of symbols.", "All in some kind of raised symbols for the blind to read.",
    "Its description in elemental languages.", "Its name and flavour.", "Its name with a warning about side effects.",
    "Its name and its recommended buying price.", "Bloody prints all over it.", "Name engraved into the container.",
    "Its name glowing with minor magic.", "A cartoony mascot.", "A warning of an ancient curse.",
    "Its name and description in invisible ink.", "Its description in draconic.", "Several different names and descriptions plastered over eachother.",
    "A name of a completely different potion to what it does.", "A title describing the exact opposite.",
    "A money back guarantee.", "A coupon for a free potion.", "A living face looking around.",
    "Its name and recipe for other alchemists.", "A heartfelt love letter for someone.",
    "A heartfelt hate letter for someone.", "A persons name. The potion wont work unless asked by its name to do so.",
    "A strange prophecy.", "A small doodle.", "A note saying DO NOT DRINK.", "A passive aggressive note about other people drinking potions that don’t belong to them.",
    "Brightly glowing letters.", "That plays a very quiet sing song till the bottle is empty.",
    "Ornate and beautiful designs.", "Very practical designs.", "Holy symbols.", "Unholy symbols.",
    "Fey symbols and sylvan writing.", "A riddle, the lid not opening unless the riddle is solved.",
    "Saying its designed for babies.", "Saying that it shouldn’t be drank by anyone under 18.",
    "A note saying its illegal contraband being confiscated.", "A note saying the alchemist thinks it is its greatest work.",
    "A note saying the alchemist is sorry for ever creating it.", "A note saying that it never should have been made and copius blood stains over the bottle.",
    "It says you’re being watched. When the person checks it instead says Just Kidding.",
    "Its description in Druidic.", "Its description in orcish", "Its description in goblin.",
    "Its description in Halfling.", "Its description in Celestial.", "Its description in Undercommon.",
    "Its description in Deep speech.", "Its description in strange arcane symbols.", "A map of where the potion was made.",
    "A small puzzle for kids.", "A list of ingredients in their chemical forms.", "A list of possible side effects as long as the bottle is.",
    "A red X.", "A sad face.", "An angry face.", "A happy face.", "A healing symbol.", "A cheesy pun potion name.",
    "Growing with vines.", "Growing with flowers.", "Growing with crystals.", "Growing with rock.",
    "Shamanistic symbols and shavings.", "No words just a single colour.", "Water damage but a just legibale label.",
    "A label as if it was some kind of present.", "A label showing how many calories it is.",
    "A warning about potion abuse and to only take in moderation.", "A label with warnings and side effects all scribbled out.",
    "That only shows the side effects.", "A mysterious number.", "A code name.", "A few unrelated letters.",
    "The name of one of the party members.", "The name of the bad guy.", "Crawling with bugs.",
    "Covered in something unspeakable.", "Covered in glitter. It gets everywhere.", ]
