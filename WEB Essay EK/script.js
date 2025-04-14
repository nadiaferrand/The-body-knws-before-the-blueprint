// ========== QUIZ LOGIC ==========
function openQuiz() {
  document.getElementById("quiz-popup").style.display = "flex";
}

function selectAnswer(button, answer) {
  const correct = "80%";
  const feedback = document.getElementById("quiz-feedback");
  const continueBtn = document.getElementById("continue-button");

  if (answer === correct) {
    feedback.textContent = "✅ Correct! 80% of water collection is done by women and girls.";
  } else {
    feedback.textContent = "❌ Not quite. The correct answer is 80%.";
  }

  continueBtn.style.display = "inline-block";
}

function goToTrail() {
  document.getElementById("homepage").style.display = "none";
  document.getElementById("quiz-popup").style.display = "none";
  document.getElementById("trail-section").style.display = "block";

  function goToTrail() {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('trail-section').style.display = 'block';
    document.getElementById('quiz-popup').style.display = 'none'; // ✅ Hides the quiz
    document.getElementById('homeButton').style.display = 'block';
  }

  // Optional: Reset scroll position to top-left of canvas
  window.scrollTo(0, 0);
}


// ========== FADE-IN ON SCROLL ==========
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
  observer.observe(el);
});


// === FLOATING TITLES: Constant Independent Motion ===
document.addEventListener("DOMContentLoaded", () => {
  const floats = document.querySelectorAll(".float");

  floats.forEach(el => {
    el.style.position = "absolute";
    el.style.top = `${Math.random() * 80 + 10}vh`;
    el.style.left = `${Math.random() * 80 + 10}vw`;

    // Very slow drift
    let dx = (Math.random() - 0.5) * 0.03;
    let dy = (Math.random() - 0.5) * 0.03;

    function moveFloat() {
      let top = parseFloat(el.style.top);
      let left = parseFloat(el.style.left);

      top += dy;
      left += dx;

      // bounce off the screen edges
      if (top <= 0 || top >= 90) dy *= -1;
      if (left <= 0 || left >= 90) dx *= -1;

      el.style.top = `${top}vh`;
      el.style.left = `${left}vw`;

      requestAnimationFrame(moveFloat);
    }

    moveFloat(); // Start the animation
  });
});

function goHome() {
  document.getElementById("homepage").style.display = "flex";
  document.getElementById("trail-section").style.display = "none";
  document.getElementById("floating-titles").style.display = "block";
  window.scrollTo(0, 0); // resets scroll position to top
}


// Show homepage, hide trail
function goHome() {
  document.getElementById("homepage").style.display = "flex";
  document.getElementById("trail-section").style.display = "none";
  document.getElementById("floating-titles").style.display = "block";
  window.scrollTo(0, 0);
}

// Show trail, hide homepage
function goToTrail() {
  document.getElementById("homepage").style.display = "none";
  document.getElementById("trail-section").style.display = "block";
  document.getElementById("quiz-popup").style.display = "none";
  document.getElementById("floating-titles").style.display = "none";
  window.scrollTo(0, 0);
}

// Fade in paragraphs on scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

