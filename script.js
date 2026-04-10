// Arrays med navne-dele 
const firstPart = [
  "Skatte", "Fnuller", "Putte", "Guld", "Musse", "Snuske", "Mælke", "Jelly", "Cookie", "Buller", 
  "Kramme", "Guld", "Prutte", "Misse", "Stjerne", "Tosse", "Grine", "Puller", "Sveske", "Mulle", "Tulle", "Smukke", "Sukker", "Lækker", "Sol", "Prinsesse", "Elske", "Charme", "Lækker", "Honning", "Nusse", "Skum", "Mini", "Prinse", "Sommer", "Puslinge", "Kramme", "Nuller", "Bølle", "Muller", "Pjuske", "Plysser", "Tutte", "Smør", "Fjolle", "Glitter", "Snurre", "Bobbel", "Plys", "Lækker", "Bamse", "Glimmer", "Snuller", "Tutte", "Fluffe-","Lulle", "Nutte-", "Cutie", "Tuller", "Marcipan", "Tumle", "Chaos", "Bøvle", "Snurre", "Latter", "Krudt", "Kuller", "Sukker", "Toffee", "Ballade", "Pichaa", "Alfe", "Poke", "Karamel" 
];

const secondPart = [
  "mus", "gøj", "-tøs", "bamse", "-fis", "mis", "-bøtte", "bean", "monster", "mås", 
  "bjørn", "klump", "top", "dyr", "kat", "lys", "tosse", "-fyr", "dukke", "bisken", "trold", "sikke", "-futmælk", "-ling", "kage", "-fidus", "-bar", "panda", "-muuh", "fugl", "boble", "blomst", "stjerne", "fisk", "gøjl", "stråle", "my", "-top", "fnug", "sky", "blomst", "fe", "ælling", "hvalp", "tumling", "-smølf", "perle", "pjusk", "drys", "putling", "-puff", "-patootie", "brød", "kriger", "butt", "ugle", "tut", "bandit", "snut", "drage", "-kartoffel", "-trooper", "-fisk", "-odder", "man", "drøm"
];

// Funktion til at generere et tilfældigt kælenavn
function generateNickname() {
  const randomFirst = firstPart[Math.floor(Math.random() * firstPart.length)];
  const randomSecond = secondPart[Math.floor(Math.random() * secondPart.length)];
  document.getElementById("nickname").innerText = randomFirst + randomSecond;  // Sammenføje uden mellemrum
}

// Håndter knap klik
document.getElementById("generate").addEventListener("click", generateNickname);
