/*
  Duolingo Team Prototype
  ----------------------
  Your goal is NOT to copy the instructor demo.
  Your goal is to make PRODUCT DECISIONS using logic.

  Focus on:
  - conditionals
  - comparisons
  - randomness
  - feedback
*/

// ==============================
// STEP 1: App State
// ==============================

let xpTotal = 0;

// XP rewards (randomized)
const xpRewards = [10, 15, 20];

// ==============================
// STEP 2: DOM Elements
// ==============================

const xpDisplay = document.getElementById("xp-total");
const button = document.getElementById("complete-lesson");
const feedback = document.getElementById("feedback");

// ==============================
// STEP 3: Event Listener
// ==============================

button.addEventListener("click", function () {

  // STEP 4: Random XP reward
  const randomIndex = Math.floor(Math.random() * xpRewards.length);
  const earnedXP = xpRewards[randomIndex];

  xpTotal += earnedXP;
  xpDisplay.textContent = xpTotal;

  // STEP 5: CONDITIONAL LOGIC
  // 👉 This is where YOU solve the client problem

  if (xpTotal < 50) {
    feedback.textContent = `Nice start! You earned ${earnedXP} XP 👍`;
    feedback.className = "good text-center";
  } else if (xpTotal >= 50 && xpTotal < 100) {
    feedback.textContent = `You're on a streak! 🔥 +${earnedXP} XP`;
    feedback.className = "mid text-center";
  } else {
    feedback.textContent = `LEVEL UP! 🎉 You're crushing it!`;
    feedback.className = "great text-center";
  }
});

/*
  TEAM QUESTIONS TO DISCUSS:
  --------------------------
  - Are these XP thresholds right?
  - How many learner states should exist?
  - What feels motivating vs annoying?
  - What would Duolingo want users to FEEL here?
*/
