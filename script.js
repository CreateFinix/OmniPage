const aliens = [
  {
    nome: "Chama",
    imagem: "img/ChamaOS.png",
    descricao: "Alien de fogo poderoso.",
    infoGerais: {
      especie: "Pyronita",
      planeta: "Pyros",
      corpo: "Humanoide inflamável",
      originalmente: "Heatblast",
      predador: "Siridozer",
    },
    poderes: [
      "Pirocinese",
      "Voo (via propulsão)",
      "Imunidade ao fogo",
      "Imunidade ao gelo",
      "Geocinese limitada",
      "Criocinese (apenas quando resfriado)",
      "Força aprimorada",
      "Resistência aprimorada",
      "Velocidade aprimorada (via propulsão)",
    ],
  },
  {
    nome: "XRL8",
    imagem: "img/XRL8.jpeg",
    descricao:
      "XLR8 é a amostra de DNA do Omnitrix de um Kinecelerano do planeta Kinet.",
    infoGerais: {
      especie: "Kinecelerano",
      planeta: "Kinet",
      corpo: "Velociraptor humanoide",
      originalmente: "XRL8",
      predador: "Desconhecido",
    },
    poderes: [
      "Supervelocidade",
      "Super agilidade",
      "Salto aprimorado",
      "Reflexos aprimorados",
      "Regeneração aprimorada",
      "Garras afiadas",
      "Passar sobre paredes e água",
      "Máscara",
      "Eletricidade estática",
    ],
  },
  {
    nome: "Quatro Braços",
    imagem: "img/Quatro_Bracos.jpeg",
    descricao:
      "Diamante é a amostra de DNA do Omnitrix de um Petrosapien do planeta Petropia.",
    infoGerais: {
      especie: "Tetramando",
      planeta: "Khoros",
      corpo: "Humanoide com quatro braços",
      originalmente: "Four Arms",
    },
    poderes: [
      "Superforça",
      "Ondas supersônicas",
      "Salto aprimorado",
      "Resistência aprimorada",
      "Agilidade aprimorada",
    ],
  },
  {
    nome: "Diamante",
    imagem: "img/Diamante.png",
    descricao:
      "Diamante é a amostra de DNA do Omnitrix de um Petrosapien do planeta Petropia.",
    infoGerais: {
      especie: ["Petrosapien", "Híbrido de Petrosapien e Crystalsapien"],
      planeta: "Petropia",
      corpo: "Humanoide de diamante",
      originalmente: "Diamondhead",
    },
    poderes: [
      "Cristalocinese",
      "Regeneração",
      "Alteração do corpo",
      "Reflexão de energia",
      "Força aprimorada",
      "Resistência aprimorada",
      "Resistência ao fogo",
      "Imunidade ao envelhecimento",
      "Sobrevivência no espaço",
    ],
  },
  {
    nome: "Ultra T",
    imagem: "img/UltraT.png",
    descricao:
      "Ultra T é a amostra de DNA do Omnitrix de um Mecamorfo galvânico da lua Galvan B.",
    infoGerais: {
      especie: "Mecamorfo galvânico",
      planeta: "Galvan B",
      corpo: "Humanoide tecnológico",
      originalmente: "Upgrade",
      predador: "Malware",
    },
    poderes: [
      "Disparo de lasers do olho",
      "Deformação do corpo",
      "Regeneração",
      "Elasticidade",
      "Força aprimorada",
      "Resistência aprimorada",
      "Sobrevivência no espaço",
    ],
  },
  {
    nome: "Feedback",
    imagem: "img/FeedOV16.png",
    descricao:
      "Feedback é a amostra de DNA do Omnitrix de um Conductoide da nebulosa de Teslavorr.",
    infoGerais: {
      especie: "Conductoide",
      planeta: "Teslavorr",
      corpo: "Humanoide",
      originalmente: "Feedback",
    },
    poderes: [
      "Eletrocinese",
      "Absorção de energia",
      "Redirecionamento de energia",
      "Voo com ajuda da eletricidade",
      "Supervelocidade a partir de fios elétricos",
      "Força aprimorada",
      "Agilidade aprimorada",
      "Salto aprimorado",
    ],
  },
];

function carregarAliens() {
  const alienCards = document.getElementById("alien-cards");
  aliens.forEach((alien) => {
    const infoGerais = `
              <div class="info-section">
                  <h4>INFORMAÇÕES GERAIS</h4>
                  <p><strong>Espécie:</strong> ${alien.infoGerais.especie}</p>
                  <p><strong>Planeta natal:</strong> ${
                    alien.infoGerais.planeta
                  }</p>
                  <p><strong>Corpo:</strong> ${alien.infoGerais.corpo}</p>
                  <p><strong>Originalmente:</strong> ${
                    alien.infoGerais.originalmente
                  }</p>
                  <p><strong>Predador:</strong> ${
                    alien.infoGerais.predador || "Desconhecido"
                  }</p>
              </div>
          `;

    const poderes = `
              <div class="info-section">
                  <h4>PODERES E HABILIDADES</h4>
                  <ul>
                      ${alien.poderes
                        .map((poder) => `<li>${poder}</li>`)
                        .join("")}
                  </ul>
              </div>
          `;

    alienCards.innerHTML += `
              <div class="col-md-4">
                  <div class="alien-card text-center">
                      <img src="${alien.imagem}" class="alien-img" alt="${alien.nome}" loading="lazy">
                      <h3>${alien.nome}</h3>
                      <p>${alien.descricao}</p>
                      ${infoGerais}
                      ${poderes}
                  </div>
              </div>
          `;
  });
}

function randomAlien() {
  const randomIndex = Math.floor(Math.random() * aliens.length);
  alert(`Alien Aleatório: ${aliens[randomIndex].nome}`);
}

function toggleMode() {
  document.body.classList.toggle("light-mode");
}

document.addEventListener("DOMContentLoaded", carregarAliens);
