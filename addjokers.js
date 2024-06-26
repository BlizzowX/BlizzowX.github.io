let jokers = [

  {
    name : "Omen - Mirror Shard",
    text: [
      "When selecting a {C:attention}blind{}:",                   
      "{C:green}1 in 3{} chance to turn into",
      "{C:attention}Omen - Broken Mirror{}.{C:inactive}",
      "{C:red}1 in 3{} chance to get {C:red}destroyed{}.", 
"{C:inactive}(... lucky?)"  
    ],
    image_url: "assets/1x/mirrorshard.png",
    rarity: "Common"
  }, 
  {
    name : "Omen - Broken Mirror",
    text: [
      "{C:green}1 in 6{} chance to turn", 
      "scored hand into {C:attention}Glass Cards{}.",
      "{C:red}1 in 4{} chance to {C:attention}shatter{} after scoring", 
"{C:inactive}(Mirror, mirror on the wall.)"    
    ],
    image_url: "assets/1x/brokenmirror.png",
    rarity: "Uncommon"
  }, 
  {
    name : "Omen - Black Cat",
    text: [
      "{C:green}1 in 6{} chance to turn", 
      "scored hand into {C:attention}Lucky Cards{}.",
      "{C:red}1 in 4{} chance to {C:red}lose {C:money}$2{} after scoring", 
"{C:inactive}(Why did the cat cross the road?)"    
    ],
    image_url: "assets/1x/cat.png",
    rarity: "Uncommon"
  }, 
  {
    name : "Omen - Suspicious Ladder",
    text: [
      "When selecting a {C:attention}blind{}:",                   
      "{C:green}1 in 6{} chance to {C:green}decrease blind size{}.", 
      "{C:red}1 in 4{} chance to {C:red}increase blind size{}", 
"{C:inactive}(It just stands there. Menacingly!)"  
    ],
    image_url: "assets/1x/ladder.png",
    rarity: "Uncommon"
  },
  {
    name : "Omen - Thirteen",
    text: [
      "Gains {X:mult,C:white}X0.25{} Mult when {C:red}bad effects{} activate.", 
      "{C:inactive}(Currently: {X:mult,C:white}X1.0{} {C:inactive}Mult)",                              
      "{C:green}1 in 4{} chance {C:green}increase {C:red}Bad Karma{}.", 
      "{C:red}1 in 6{} chance {C:red}decrease {C:green}Good Karma{}.",
"{C:inactive}(A lucky number?)"  
    ],
    image_url: "assets/1x/thirteen.png",
    rarity: "Rare"
  },
  {
    name : "Omen - Seven",
    text: [
      "Gains {X:mult,C:white}X0.25X{} Mult when {C:green}good{} effects activate.",
      "{C:inactive}(Currently: {X:mult,C:white}X1.0{} {C:inactive}Mult)",                            
      "{C:green}1 in 6{} chance {C:green}increase Good Karma{}.", 
      "{C:red}1 in 4{} chance {C:red}decrease {C:green}Good Karma{}.",
"{C:inactive}(A lucky number!)"  
    ],
    image_url: "assets/1x/seven.png",
    rarity: "Rare"
  },











  {
    name : "Cosmic - Capricorn",
    text: [
      "Scored cards gain {C:chips}+3{} Chips permanently.",
      "{C:purple}+1 Cosmic-Token{} per {C:attention}2{} scored.",
      "{C:inactive}(Steadfast ambition guides Capricorn's climb.)",
      "{C:inactive}({C:purple}Cosmic-Tokens:{} {X:purple,C:white}0{}{C:inactive})"    
    ],
    image_url: "assets/1x/capricorn.png",
    rarity: "Common"
  }, 
  {
    name : "Cosmic - Aquarius",
    text: [
      "{C:green}1 in 6{} chance to gain {C:money}$1{} per card scored.",
      "{C:purple}+1 Cosmic-Token{} per {C:attention}3{} scored.",
"{C:inactive}(Innovative vision shapes Aquarius' path.)",
      "{C:inactive}({C:purple}Cosmic-Tokens:{} {X:purple,C:white}0{}{C:inactive})"    
    ],
    image_url: "assets/1x/aquarius.png",
    rarity: "Common"
  }, 
  {
    name : "Cosmic - Pisces",
    text: [
      "Gains {C:mult}+1{} Mult and {C:purple}+1 Cosmic-Token{}.",
            "per {C:attention}4{} scored. {C:inactive}(Currently {C:mult}+3{} {C:inactive}Mult)",
			"{C:inactive}(Boundless empathy guides Pisces' journey.)",
      "{C:inactive}({C:purple}Cosmic-Tokens:{} {X:purple,C:white}0{}{C:inactive})"    
    ],
    image_url: "assets/1x/pisces.png",
    rarity: "Common"
  }, 
  {
    name : "Cosmic - Aries",
    text: [
      "Gains {C:chips}+10{} Chips and {C:purple}+1 Cosmic-Token{}.",
      "per {C:attention}5{} scored. {C:inactive}(Currently {C:chips}+30{} {C:inactive}Chips)",
"{C:inactive}(Unyielding courage fuels Aries' pursuits.)" ,
      "{C:inactive}({C:purple}Cosmic-Tokens:{} {X:purple,C:white}0{}{C:inactive})"    
    ],
    image_url: "assets/1x/aries.png",
    rarity: "Common"
  }, 
  {
    name : "Cosmic - Taurus",
    text: [
      "Gains {C:green}1%{} chance per {C:purple}Cosmic-Token{} on this",
      "to {C:attention}enhance{} scored cards. {C:inactive}(Currently {C:green}5%{}{C:inactive} chance)",    
      "{C:purple}+1 Cosmic-Token{} per {C:attention}6{} scored.",
"{C:inactive}(Enduring patience fortifies Taurus' strides.)",
      "{C:inactive}({C:purple}Cosmic-Tokens:{} {X:purple,C:white}0{}{C:inactive})"    
    ],
    image_url: "assets/1x/taurus.png",
    rarity: "Uncommon"
  }, 
  {
    name : "Cosmic - Gemini",
    text: [
      "Gains {C:green}1%{} chance per {C:purple}Cosmic-Token{} on this",
      "to {C:attention}retrigger{} scored cards. {C:inactive}(Currently {C:green}5%{}{C:inactive} chance)",      
      "{C:purple}+1 Cosmic-Token{} per {C:attention}7{} scored.",
"{C:inactive}(Curious intellect propels Gemini's exploration.)",
      "{C:inactive}({C:purple}Cosmic-Tokens:{} {X:purple,C:white}0{}{C:inactive})"    
    ],
    image_url: "assets/1x/gemini.png",
    rarity: "Uncommon"
  }, 
  {
    name : "Cosmic - Cancer",
    text: [
      "Gains {C:green}1%{} chance per {C:purple}Cosmic-Token{} on this",
      "to add a {C:attention}Seal{} to discarded cards. {C:inactive}(Currently {C:green}5%{}{C:inactive} chance)",
      "{C:purple}+1 Cosmic-Token{} per {C:attention}8{} scored.",
"{C:inactive}(Emotional depth enriches Cancer's connections.)",
      "{C:inactive}({C:purple}Cosmic-Tokens:{} {X:purple,C:white}0{}{C:inactive})"    
    ],
    image_url: "assets/1x/cancer.png",
    rarity: "Uncommon"
  }, 
  {
    name : "Cosmic - Leo",
    text: [
      "Gains {C:green}1%{} chance per {C:purple}Cosmic-Token{} on this",
      "to add a {C:attention}Edition{} to discarded cards. {C:inactive}(Currently {C:green}5%{}{C:inactive} chance)",
      "{C:purple}+1 Cosmic-Token{} per {C:attention}9{} scored.",
"{C:inactive}(Majestic passion ignites Leo's pursuits.)",
      "{C:inactive}({C:purple}Cosmic-Tokens:{} {X:purple,C:white}0{}{C:inactive})"    
    ],
    image_url: "assets/1x/leo.png",
    rarity: "Uncommon"
  }, 
  {
    name : "Cosmic - Virgo",
    text: [
      "Decreases blind size by {C:blue}0.1%{} per {C:purple}Cosmic-Token{}",
            "on all your {C:purple}Cosmic Jokers{}. {C:inactive}(Currently {C:blue}3%{}{C:inactive} decrease)",
            "{C:purple}+1 Cosmic-Token{} per {C:attention}10{} scored.",
			"{C:inactive}(Discerning wisdom guides Virgo's protection.)",
            "{C:inactive}(Total {C:purple}Cosmic-Tokens:{} {X:purple,C:white}0{}{C:inactive})"      
    ],
    image_url: "assets/1x/virgo.png",
    rarity: "Rare"
  }, 
  {
    name : "Cosmic - Libra",
    text: [
      "Adds {C:mult}+1%{} chip value of scored card as Mult",
            "per {C:purple}Cosmic-Token{} on all your {C:purple}Cosmic Jokers{}.",
            "{C:inactive}(Currently {C:mult}20%{}{C:inactive} chip value as Mult)",
            "{C:purple}+1 Cosmic-Token{} per {C:attention}Jack{} scored.",
			"{C:inactive}(Graceful equilibrium guides Libra's decisions.)",
            "{C:inactive}(Total {C:purple}Cosmic-Tokens:{} {X:purple,C:white}0{}{C:inactive})"      
    ],
    image_url: "assets/1x/libra.png",
    rarity: "Rare"
  }, 
  {
    name : "Cosmic - Scorpio",
    text: [
      "Scored cards gain {C:chips}+1{} Chips permanently",
      "per {C:purple}Cosmic-Token{} on all your {C:purple}Cosmic Jokers{}.",
      "{C:inactive}(Currently {C:chips}+3{}{C:inactive} Chips)",
      "{C:purple}+1 Cosmic-Token{} per {C:attention}Queen{} scored.",
"{C:inactive}(Unyielding determination propels Scorpio's evolution.)",
            "{C:inactive}(Total {C:purple}Cosmic-Tokens:{} {X:purple,C:white}0{}{C:inactive})"      
    ],
    image_url: "assets/1x/scorpio.png",
    rarity: "Rare"
  },
  {
    name : "Cosmic - Sagittarius",
    text: [
      "Gains {C:mult}+1{} Mult per {C:purple}Cosmic-Token{}",
      "on all your {C:purple}Cosmic Jokers{}. {C:inactive}(Currently {C:mult}+10{}{C:inactive} Mult)",
      "{C:purple}+1 Cosmic-Token{} per {C:attention}King{} scored.",
"{C:inactive}(Boundless optimism guides Sagittarius' adventures.)",
            "{C:inactive}(Total {C:purple}Cosmic-Tokens:{} {X:purple,C:white}0{}{C:inactive})"      
    ],
    image_url: "assets/1x/sagittarius.png",
    rarity: "Rare"
  },
  {
    name : "Cosmic - Ophiuchus",
    text: [
      "Gains {X:mult,C:white}X0.01{} Mult per {C:purple}Cosmic-Token{}",
      "on all your {C:purple}Cosmic Jokers{}. {C:inactive}(Currently {X:mult,C:white}X1.0{}{C:inactive} Mult)",
      "{C:purple}Cosmic Jokers{} gain 3X as many {C:purple}Cosmic-Tokens{}.",
"{C:inactive}(When the stars gather, Ophiuchus shines once more)",
            "{C:inactive}(Total {C:purple}Cosmic-Tokens:{} {X:purple,C:white}0{}{C:inactive})"      
    ],
    image_url: "assets/1x/ophiuchus.png",
    rarity: "Legendary"
  },
  {
    name : "The Cosmos",
    text: [
      "Creates a random",
            "{C:purple}Cosmic Joker{}.",
            "{C:inactive}(Must have room)"
    ],
    image_url: "assets/1x/cosmos.png",
    rarity: "Tarot"
  },
  {
    name : "The Constellation",
    text: [
      "Up to 3 selected cards gain",
            "{C:chips}+15{} Chips permanently",
            "All {C:purple}Cosmic Jokers{} gain",
            "{C:purple}+5 Cosmic-Tokens{}."
    ],
    image_url: "assets/1x/constellation.png",
    rarity: "Tarot"
  },
  {
    name : "The Sign",
    text: [
      "All {C:purple}Cosmic Jokers{} gain {C:purple}+10 Cosmic-Tokens{}.",
            "If you have more than 150",
            "{C:purple}Cosmic-Token{} on your Jokers,",
            "create a negative {C:legendary}Cosmic Ophiuchus."
    ],
    image_url: "assets/1x/sign.png",
    rarity: "Tarot"
  },
  
  
  
  
  
  
  
  {
    name : "First Piece of the Mischievous One",
    text: [
      "{C:mult}+1{} Mult",
      "Gains {C:mult}+1{} Mult for every other",
      "{C:attention}\"The Mischievous One\"{} Joker.",
"{C:inactive}(A piece of Jimbo the Mischievious One.)",
"{C:inactive}(Whosoever restores him will know infinite power.)"       
    ],
    image_url: "assets/1x/j_firstpieceofthemischievousone.png",
    rarity: "Common"
  }, 
  {
    name : "Second Piece of the Mischievous One",
    text: [
      "{C:mult}+1{} Mult",
      "Gains {C:mult}+1{} Mult for every other",
      "{C:attention}\"The Mischievous One\"{} Joker.",
"{C:inactive}(A piece of Jimbo the Mischievious One.)",
"{C:inactive}(Whosoever restores him will know infinite power.)"         
    ],
    image_url: "assets/1x/j_secondpieceofthemischievousone.png",
    rarity: "Common"
  }, 
  {
    name : "Third Piece of the Mischievous One",
    text: [
      "{C:mult}+1{} Mult",
      "Gains {C:mult}+1{} Mult for every other",
      "{C:attention}\"The Mischievous One\"{} Joker.",
"{C:inactive}(A piece of Jimbo the Mischievious One.)",
"{C:inactive}(Whosoever restores him will know infinite power.)"        
    ],
    image_url: "assets/1x/j_thirdpieceofthemischievousone.png",
    rarity: "Common"
  }, 
  {
    name : "Fourth Piece of the Mischievous One",
    text: [
      "{C:mult}+1{} Mult",
      "Gains {C:mult}+1{} Mult for every other",
      "{C:attention}\"The Mischievous One\"{} Joker.",
"{C:inactive}(A piece of Jimbo the Mischievious One.)",
"{C:inactive}(Whosoever restores him will know infinite power.)"           
    ],
    image_url: "assets/1x/j_fourthpieceofthemischievousone.png",
    rarity: "Common"
  }, 
  {
    name : "Cultist of the Mischievous One",
    text: [
      "When selecting a {C:attention}Blind{}, create 1 {C:attention}\"Piece of the Mischievous One\"{}",         
			"Gains {X:mult,C:white} X0.2{} for every {C:attention}\"The Mischievous One\"{} Joker.",
            "At the end of a {C:attention}Round{}, if you have all 4 pieces,",
            "{C:red}destroy{} them and this card, create 1 {C:legendary}\"Jimbo the Mischievous One\"{}",
            "{C:inactive}(Must have room. Currently: {X:mult,C:white} X1.2{}{C:inactive} Mult.)",
			"{C:inactive}(These cultists worship Jimbo like a god.)"               
    ],
    image_url: "assets/1x/j_cultistofthemischievousone.png",
    rarity: "Uncommon"
  }, 
  {
    name : "Jimbo the Mischievous One",
    text: [
      "When selecting a {C:attention}Blind{}, destroy all",
            "{C:attention}\"Pieces of the Mischievous One\"{} you have.",
            "Gains {X:mult,C:white} X1.5{} for each Joker destroyed by this effect",	
            "{C:inactive}(Currently {X:mult,C:white} X6{} {C:inactive}Mult)",
			"{C:inactive}(He returned to spread mischief once more.)"        
    ],
    image_url: "assets/1x/j_jimbothemischievousone.png",
    rarity: "Legendary"
  },
  {
    name : "Mischief",
    text: [
      "Creates a {C:attention}Piece of the Mischievous One",
      "or {C:attention}Cultist of the Mischievous One",
      "{C:inactive}(Must have room)"
    ],
    image_url: "assets/1x/mischief.png",
    rarity: "Tarot"
  },   
  {
    name: "Combat Ace - Soldier",
    text: [
      "Each scored {C:attention}Ace{}",			
			"adds {C:chips}+35{} Chips",
			"{C:JOKER_GREY}(Being a soldier is hard. Survived 0 rounds.)"
    ],
    image_url: "assets/1x/j_combatacesoldier.png",
    rarity: "Common"
  }, 
  {
    name: "Combat Ace - Mercenary",
    text: [
      "Scored {C:attention}Aces{} add {X:mult,C:white}X1.5{} Mult",			
      "At the end of a {C:attention}round{} pay {C:money}$5{},",
      "If you cannot, {C:RED}destroy this joker{}",
      "{C:JOKER_GREY}(Firepower, but at what cost?)"
    ],
    image_url: "assets/1x/j_combatacemercenary.png",
    rarity: "Common"
  }, 
  {
    name: "Combat Ace - Supplies",
    text: [
      "For every {C:RED}3 discarded{} ",			
			"{C:attention}Aces{} get {C:GOLD}3${}. This bonus ",
      "increases by {C:GOLD}$1{} every time it activates",
			"{C:JOKER_GREY}(Sustain is important! Next supply drop in: 3)"
    ],
    image_url: "assets/1x/j_combatacesupplies.png",
    rarity: "Common"
  },
  {
    name: "Combat Ace - Recruiter",
    text: [
      " {C:red}Discarded cards{} have a",
			"{C:green}1 in 8{} chance to",
			"become an {C:attention}Ace{}",
			"{C:JOKER_GREY}(Are you interested in joining the ACES?)"
    ],
    image_url: "assets/1x/j_combatacerecruiter.png",
    rarity: "Uncommon"
  },
  {
    name: "Combat Ace - Secret Agent",
    text: [
      "Copies the effect of the {C:attention}Combat Ace{}",			
			"to it's right.",
      "{C:green}{}",
      "{C:JOKER_GREY}(An enigma of the ACES)",
    ],
    image_url: "assets/1x/j_combatacesecretagent.png",
    rarity: "Uncommon"
  },
  {
    name: "Combat Ace - General",
    text: [
      "{C:attention}\"Combat Ace Jokers\"{}",
      "each add {X:mult,C:white}X1.5{} Mult",
      "Also counts itself",
      "{C:JOKER_GREY}(Aces = Power!)" 
    ],
    image_url: "assets/1x/j_combatacegeneral.png",
    rarity: "Uncommon"
  },
  {
    name: "Combat Ace - Promotion",
    text: [
			"Played {C:attention}Aces{} have a",
			"{C:green}1 in 6{} chance to",
			"become a random edition",
			"{C:JOKER_GREY}(Time for a promotion!)"
    ],
    image_url: "assets/1x/j_combatacepromotion.png",
    rarity: "Rare"
  },
  {
    name: "Combat Ace - Veteran",
    text: [
      "Each scored {C:attention}Ace{}",			
			"repeats and adds {C:chips}+50{} Chips",
      "This bonus increases by {C:chips}10{} every round",
			"{C:inactive}(The peak of the ACES. Survived 15 rounds.)"
    ],
    image_url: "assets/1x/j_combataceveteran.png",
    rarity: "Legendary"
  },
  {
    name : "The Contract",
    text: [
      "Creates a random",
      "{C:attention}Combat Ace Joker{}.",
      "{C:inactive}(Must have room)"
    ],
    image_url: "assets/1x/contract.png",
    rarity: "Tarot"
  }, 
]

let cols = {
  
  MULT: "#FE5F55",
  CHIPS: "#009dff",
  MONEY: "#f3b958",
  XMULT: "#FE5F55",
  FILTER: "#ff9a00",
  ATTENTION: "#ff9a00",
  BLUE: "#009dff",
  LEGENDARY: "#b26cbb",
  RED: "#FE5F55",
  GREEN: "#4BC292",
  PALE_GREEN: "#56a887",
  ORANGE: "#fda200",
  IMPORTANT: "#ff9a00",
  GOLD: "#eac058",
  YELLOW: "#ffff00",
  CLEAR: "#00000000", 
  WHITE: "#ffffff",
  PURPLE: "#8867a5",
  BLACK: "#374244",
  L_BLACK: "#4f6367",
  GREY: "#5f7377",
  CHANCE: "#4BC292",
  INACTIVE: "#bfc7d5",
  JOKER_GREY: "#bfc7d5",
  VOUCHER: "#cb724c",
  BOOSTER: "#646eb7",
  EDITION: "#ffffff",
  DARK_EDITION: "#000000",
  ETERNAL: "#c75985",
  DYN_UI: {
    MAIN: "#374244",
    DARK: "#374244",
    BOSS_MAIN: "#374244",
    BOSS_DARK: "#374244",
    BOSS_PALE: "#374244"
  },
  SO_1: {
    Hearts: "#f03464",
    Diamonds: "#f06b3f",
    Spades: "#403995",
    Clubs: "#235955",
  },
  SO_2: {
    Hearts: "#f83b2f",
    Diamonds: "#e29000",
    Spades: "#4f31b9",
    Clubs: "#008ee6",
  },
  SUITS: {
      Hearts: "#FE5F55",
      Diamonds: "#FE5F55",
      Spades: "#374649",
      Clubs: "#424e54",
  },
  
  SET: {
    Default: "#cdd9dc",
    Enhanced: "#cdd9dc",
    Joker: "#424e54",
    Tarot: "#424e54",
    Planet: "#424e54",
    Spectral: "#424e54",
    Voucher: "#424e54",
  }, 
  SECONDARY_SET: {
    Default: "#9bb6bdFF",
    Enhanced: "#8389DDFF",
    Joker: "#708b91",
    Tarot: "#a782d1",
    Planet: "#13afce",
    Spectral: "#4584fa",
    Voucher: "#fd682b",
    Edition: "#4ca893",
  },
}

let rarities = {
  "Common": "#009dff", 
  "Uncommon": "#4BC292",
  "Rare": "#fe5f55",
  "Legendary": "#b26cbb",
  "Tarot":"#424e54"
}

regex = /{([^}]+)}/g;

let jokers_div = document.querySelector(".jokers");

for (let joker of jokers) {
  console.log("adding joker", joker.name);

  joker.text = joker.text.map((line) => { return line + "{}"});

  joker.text = joker.text.join("<br/>");
  joker.text = joker.text.replaceAll("{}", "</span>");
  joker.text = joker.text.replace(regex, function replacer(match, p1, offset, string, groups) {
    let classes = p1.split(",");

    let css_styling = "";

    for (let i = 0; i < classes.length; i++) {
      let parts = classes[i].split(":");
      if (parts[0] === "C") {
        css_styling += `color: ${cols[parts[1].toUpperCase()]};`;
      } else if (parts[0] === "X") {
        css_styling += `background-color: ${cols[parts[1].toUpperCase()]}; border-radius: 5px; padding: 0 5px;`;
      }
    }

    return `</span><span style='${css_styling}'>`;
  });

  let joker_div = document.createElement("div");
  joker_div.classList.add("joker");
  joker_div.innerHTML = `
    <h3>${joker.name}</h3>
    <img src="${joker.image_url}" alt="${joker.name}" />
    <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
    <div class="text">${joker.text}</div>
  `;

  jokers_div.appendChild(joker_div);
}