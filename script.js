// Arrays med navne-dele 
const firstPart = [
    "Skatte", "Fnuller", "Putte", "Guld", "Musse", "Snuske", "Mælke", "Jelly", "Cookie", "Buller", "Kramme", "Prutte", "Misse", "Stjerne", "Tosse", "Grine", "Puller", "Sveske", "Mulle", "Tulle", "Smukke", "Sukker", "Lækker", "Sol", "Prinsesse", "Elske", "Charme", "Honning", "Nusse", "Skum", "Mini", "Prinse", "Sommer", "Puslinge", "Nuller", "Bølle", "Muller", "Pjuske", "Plysser", "Tutte", "Smør", "Fjolle", "Glitter", "Snurre", "Bobbel", "Plys", "Bamse", "Glimmer", "Snuller", "Fluffe", "Lulle", "Nutte", "Pludre", "Kuller", "Muffin", "Tuller", "Marcipan", "Tumle", "Chaos", "Buller", "Bøvle", "Snurre", "Grine", "Latter", "Finurlig"
];

const secondPart = [
    "mus", "gøj", "tøs", "bamse", "-fis", "mis", "bøtte", "bean", "monster", "mås", "bjørn", "klump", "top", "dyr", "kat", "lys", "-tosse", "fyr", "dukke", "bisken", "trold", "sikke", "-futmælk", "-ling", "kage", "fidus", "-bar", "panda", "-muuh", "fugl", "boble", "blomst", "stjerne", "fisk", "gøjl", "stråle", "-my", "fnug", "sky", "fe", "ælling", "hvalp", "tumling", "-smølf", "perle", "pjusk", "drys", "-putling", "-puff", "-mulle", "-blomst", "-muller", "-buller", "-bølle", "-bøf", "trunte", "basse", "skat", "-min", "-muller", "form", "-skovl", "brød", "orkan, "kriger, "top", "frit", "butt", "bøvl"
];

// Funktion til at generere et tilfældigt kælenavn
function generateNickname() {
    const randomFirst = firstPart[Math.floor(Math.random() * firstPart.length)];
    const randomSecond = secondPart[Math.floor(Math.random() * secondPart.length)];
    document.getElementById("nickname").innerText = randomFirst + randomSecond; // Sammenføje uden mellemrum
}

// Håndter knap klik
document.getElementById("generate").addEventListener("click", generateNickname);
