const container = document.getElementById("forest");

/* GRID SIZE — must match your CSS grid */
const columns = 30;
const rows = 30;
const totalCells = columns * rows;

/* ICON POOLS */
const common = ["🌲", "🌳", "🌱", "🌿"];
const rare = ["🌷", "🍄", "🌰", "🐇", "🌺", "🌾", "🐿","🚲", "🏖️", "⛺", "🏠", "🐈", "🍕","🚙","🍦","👷"];
let unique = []; // appear only once


/* PROBABILITIES */
const EMPTY_CHANCE = 0.35;   // 35% empty space
const RARE_CHANCE = 0.07;    // 7% rare items
const UNIQUE_CHANCE = 0.05;  // 5% chance to try placing a unique item


for (let i = 0; i < totalCells; i++) {
  const cell = document.createElement("div");

  if (Math.random() < EMPTY_CHANCE) {
    container.appendChild(cell);
    continue;
  }

  cell.className = "grid-item";
  const p = document.createElement("p");

  if (Math.random() < RARE_CHANCE) {
    p.textContent = rare[Math.floor(Math.random() * rare.length)];
  } else {
    p.textContent = common[Math.floor(Math.random() * common.length)];
  }

  // <-- assign rabbit class here
  if (p.textContent === "🐇") {
    cell.classList.add("rabbit");
  }

  cell.appendChild(p);
  container.appendChild(cell);

    if (p.textContent === "🏠") {
    cell.classList.add("home");
  }

  cell.appendChild(p);
  container.appendChild(cell);

if (p.textContent === "⛺") {
  cell.classList.add("tent");

  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.textContent = "Attention !!!!! Araignées !!!!";
  
  cell.appendChild(tooltip);



  cell.appendChild(p);
  container.appendChild(cell);
}

if (p.textContent === "🌺") {
  cell.classList.add("loveflower");

  const hoverText = document.createElement("span");
  hoverText.className = "hover-text";
  hoverText.textContent = "🌸 ne pas cueillir 🌸 ";

  cell.appendChild(hoverText);
}

  if (p.textContent === "🐈") {
    cell.classList.add("cat");
  }

  cell.appendChild(p);
  container.appendChild(cell);

    if (p.textContent === "🚲") {
    cell.classList.add("bike");
  }

  cell.appendChild(p);
  container.appendChild(cell);

    if (p.textContent === "🍕") {
    cell.classList.add("pizza");
  }

  cell.appendChild(p);
  container.appendChild(cell);

      if (p.textContent === "🚙") {
    cell.classList.add("car");
  }

  cell.appendChild(p);
  container.appendChild(cell);

      if (p.textContent === "🍦") {
    cell.classList.add("cream");
  }

  cell.appendChild(p);
  container.appendChild(cell);

        if (p.textContent === "🏖️") {
    cell.classList.add("beach");
  }

  cell.appendChild(p);
  container.appendChild(cell);

          if (p.textContent === "👷") {
    cell.classList.add("cricri");
  }

  cell.appendChild(p);
  container.appendChild(cell);

  
}


