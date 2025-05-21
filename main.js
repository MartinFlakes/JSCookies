document.addEventListener("DOMContentLoaded", function () {
  // Crear confeti inicial
  createInitialConfetti(20);

  // Crear brillos iniciales
  createSparkles(30);

  // Manejar clic en la tarjeta
  document
    .getElementById("birthdayCard")
    .addEventListener("click", function () {
      this.style.transform =
        this.style.transform === "rotateY(10deg)"
          ? "rotateY(0deg)"
          : "rotateY(10deg)";
    });

  // Manejar clic en el botón celebrar
  document
    .getElementById("celebrateButton")
    .addEventListener("click", function (e) {
      e.stopPropagation();
      createConfetti(100);
      createBalloons(10);
      createSparkles(50);

      // Efecto de vibración
      const card = document.getElementById("birthdayCard");
      card.classList.add("shake");
      setTimeout(() => {
        card.classList.remove("shake");
      }, 500);
    });

  // Función para crear confeti
  function createConfetti(count) {
    const colors = ["#ff6eb4", "#5b6cf9", "#ffde59", "#ff9cc7", "#a5c8ff"];
    const shapes = ["circle", "square", "triangle"];

    for (let i = 0; i < count; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";

      // Posición aleatoria
      const x = Math.random() * window.innerWidth;

      // Estilo aleatorio
      const color = colors[Math.floor(Math.random() * colors.length)];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const size = Math.random() * 10 + 5;

      confetti.style.left = `${x}px`;
      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
      confetti.style.backgroundColor = color;

      if (shape === "circle") {
        confetti.style.borderRadius = "50%";
      } else if (shape === "triangle") {
        confetti.style.width = "0";
        confetti.style.height = "0";
        confetti.style.backgroundColor = "transparent";
        confetti.style.borderLeft = `${size / 2}px solid transparent`;
        confetti.style.borderRight = `${size / 2}px solid transparent`;
        confetti.style.borderBottom = `${size}px solid ${color}`;
      }

      // Animación
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 2;

      confetti.style.animation = `confettiFall ${duration}s ease-in ${delay}s forwards`;

      document.body.appendChild(confetti);

      // Eliminar después de la animación
      setTimeout(() => {
        document.body.removeChild(confetti);
      }, (duration + delay) * 1000);
    }
  }

  // Función para crear confeti inicial
  function createInitialConfetti(count) {
    const colors = ["#ff6eb4", "#5b6cf9", "#ffde59", "#ff9cc7", "#a5c8ff"];

    for (let i = 0; i < count; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";

      // Posición aleatoria
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;

      // Estilo aleatorio
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 8 + 4;

      confetti.style.left = `${x}px`;
      confetti.style.top = `${y}px`;
      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
      confetti.style.backgroundColor = color;
      confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
      confetti.style.opacity = "0.7";

      // Animación
      const duration = Math.random() * 20 + 10;
      confetti.style.animation = `float ${duration}s ease-in-out infinite`;

      document.body.appendChild(confetti);
    }
  }

  // Función para crear brillos
  function createSparkles(count) {
    const colors = ["#ffde59", "#fff9c4", "#fffde7", "#fff8e1"];

    for (let i = 0; i < count; i++) {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";

      // Posición aleatoria alrededor de la tarjeta
      const card = document.getElementById("birthdayCard");
      const cardRect = card.getBoundingClientRect();

      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;

      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 200 + 100;

      const x = cardCenterX + Math.cos(angle) * distance;
      const y = cardCenterY + Math.sin(angle) * distance;

      // Estilo aleatorio
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 6 + 2;

      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.boxShadow = `0 0 ${size * 2}px ${size}px ${color}`;

      // Animación
      const duration = Math.random() * 2 + 1;
      const delay = Math.random() * 5;

      sparkle.style.animation = `twinkle ${duration}s ease-in-out ${delay}s infinite`;

      document.body.appendChild(sparkle);
    }
  }

  // Función para crear globos
  function createBalloons(count) {
    const colors = ["#ff6eb4", "#5b6cf9", "#ffde59", "#ff9cc7", "#a5c8ff"];

    for (let i = 0; i < count; i++) {
      const balloon = document.createElement("div");
      balloon.className = "balloon";

      // Crear SVG para el globo
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", "100%");
      svg.setAttribute("viewBox", "0 0 50 60");

      const color = colors[Math.floor(Math.random() * colors.length)];

      // Forma del globo
      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute(
        "d",
        "M25,5 C15,5 5,15 5,30 C5,45 15,55 25,55 C35,55 45,45 45,30 C45,15 35,5 25,5 Z"
      );
      path.setAttribute("fill", color);

      // Cuerda del globo
      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      line.setAttribute("d", "M25,55 C25,55 23,60 25,65 C27,70 23,75 25,80");
      line.setAttribute("stroke", "#888");
      line.setAttribute("stroke-width", "1");
      line.setAttribute("fill", "none");

      svg.appendChild(path);
      svg.appendChild(line);
      balloon.appendChild(svg);

      // Posición aleatoria
      const x = Math.random() * window.innerWidth;

      balloon.style.left = `${x}px`;

      // Animación
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;

      balloon.style.animation = `balloonFloat ${duration}s ease-in ${delay}s forwards`;

      document.body.appendChild(balloon);

      // Eliminar después de la animación
      setTimeout(() => {
        document.body.removeChild(balloon);
      }, (duration + delay) * 1000);
    }
  }
});
