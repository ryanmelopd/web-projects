const botao = document.getElementById("button-generate");
let nomePersonagem = document.getElementById("character-name");
let nomeJogo = document.getElementById("game-name");

const brawlhalla = [
    "Hattori",
    "Orion",
    "Nix",
    "Bödvar",
    "Ember"
];

const terraria = [
    "Guide",
    "Merchant",
    "Nurse",
    "Dryad",
    "Demolitionist"
];

const deadCells = [
    "The Beheaded",
    "The Concierge",
    "The Giant",
    "The Time Keeper",
    "The Queen"
];

const fallout = [
    "Courier Six",
    "Benny",
    "Mr. House",
    "Yes Man",
    "Caesar"
];


const jogos = [
    brawlhalla,
    terraria,
    deadCells,
    fallout
];

const nomesJogos = [
    "Brawlhalla",
    "Terraria",
    "Dead Cells",
    "Fallout: New Vegas"
];


botao.addEventListener("click", function() {
    let numeroJogo = Math.floor(Math.random() * jogos.length);
    let jogo = jogos[numeroJogo];
    let numeroPersonagem = Math.floor(Math.random() * jogo.length);
    let personagem = jogo[numeroPersonagem];
    nomePersonagem.textContent = personagem;
    nomeJogo.textContent = nomesJogos[numeroJogo];
});