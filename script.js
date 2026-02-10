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

/*
  Duolingo Team Prototype
  ----------------------
  Your goal is NOT to copy the instructor demo.
  Your goal is to make PRODUCT DECISIONS using logic.
*/

// ==============================
// STEP 1: App State
// ==============================

let xpTotal = 0;
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

  // STEP 5: CONDITIONAL LOGIC (YOU WRITE THIS)
  // Requirements:
  // - At least 3 user states
  // - Use comparisons
  // - Feedback must change based on progress

  // TODO:
  // if (...)
  // else if (...)
  // else (...)

});

/*
  TEAM QUESTIONS TO DISCUSS:
  --------------------------
  - Are these XP thresholds right?
  - How many learner states should exist?
  - What feels motivating vs annoying?
  - What would Duolingo want users to FEEL here?
*/
