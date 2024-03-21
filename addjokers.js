let jokers = [
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
    image_url: "assets/1x/j_combatacemercenary.png",
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
]

let cols = {
  
  MULT: "#FE5F55",
  CHIPS: "#009dff",
  MONEY: "#f3b958",
  XMULT: "#FE5F55",
  FILTER: "#ff9a00",
  ATTENTION: "#ff9a00",
  BLUE: "#009dff",
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
  "Legendary": "#b26cbb"
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