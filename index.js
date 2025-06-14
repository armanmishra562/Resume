document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Create and style print button
  const printButton = document.createElement("button");
  printButton.innerHTML = '<i class="fas fa-print"></i>';

  // Add styles to the button
  Object.assign(printButton.style, {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#00caff",
    border: "none",
    color: "white",
    fontSize: "24px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    zIndex: "1000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  // Add print-specific style
  const style = document.createElement("style");
  style.textContent = `
    @media print {
      button[style*="position: fixed"] {
        display: none !important;
      }
    }
  `;
  document.head.appendChild(style);

  // Add hover effect
  printButton.addEventListener("mouseover", () => {
    printButton.style.backgroundColor = "rgb(61, 55, 236)";
    printButton.style.transform = "translateY(-3px)";
    printButton.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.3)";
  });

  // Remove hover effect
  printButton.addEventListener("mouseout", () => {
    printButton.style.backgroundColor = "#00caff";
    printButton.style.transform = "translateY(0)";
    printButton.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
  });

  // Add click effect
  printButton.addEventListener("mousedown", () => {
    printButton.style.transform = "translateY(-1px)";
  });

  printButton.addEventListener("mouseup", () => {
    printButton.style.transform = "translateY(-3px)";
  });

  // Add print functionality
  printButton.addEventListener("click", () => {
    window.print();
  });

  // Add button to the page
  document.body.appendChild(printButton);

  const skillBars = document.querySelectorAll(".progress-bar");

  const animateSkillBars = () => {
    skillBars.forEach((bar) => {
      const targetWidth = bar.parentElement.getAttribute("aria-valuenow") + "%";
      requestAnimationFrame(() => {
        bar.style.width = targetWidth;
      });
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateSkillBars();
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  document.querySelectorAll(".skill-item").forEach((item) => {
    observer.observe(item);
  });

  const projectCards = document.querySelectorAll(".card");
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
});
