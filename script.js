// ========================================
// Spotify Mood Player
// Demonstrates:
// Objects
// Nested Arrays
// Event Listeners
// Loops
// DOM Manipulation
// Conditionals
// ========================================


// STEP 1: Create object with nested arrays
const moods = {

  happy: [
    {
      artist: "Pharrell Williams",
      title: "Happy",
      cover: "https://upload.wikimedia.org/wikipedia/en/2/23/Pharrell_Williams_-_Happy.jpg"
    },
    {
      artist: "Taylor Swift",
      title: "Shake It Off",
      cover: "https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png"
    },
    {
      artist: "Katy Perry",
      title: "Firework",
      cover: "https://upload.wikimedia.org/wikipedia/en/8/8a/Katy_Perry_-_Teenage_Dream.png"
    }
  ],

  chill: [
    {
      artist: "SZA",
      title: "Kill Bill",
      cover: "https://upload.wikimedia.org/wikipedia/en/b/bf/SZA_-_SOS.png"
    },
    {
      artist: "Drake",
      title: "Hold On, We're Going Home",
      cover: "https://upload.wikimedia.org/wikipedia/en/9/90/Nothing_Was_the_Same_cover.png"
    },
    {
      artist: "Frank Ocean",
      title: "Thinkin Bout You",
      cover: "https://upload.wikimedia.org/wikipedia/en/a/a0/Channel_ORANGE.jpg"
    }
  ],

  hype: [
    {
      artist: "Kanye West",
      title: "Stronger",
      cover: "https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg"
    },
    {
      artist: "Travis Scott",
      title: "SICKO MODE",
      cover: "https://upload.wikimedia.org/wikipedia/en/1/1f/Astroworld_by_Travis_Scott.jpg"
    },
    {
      artist: "Beyoncé",
      title: "CUFF IT",
      cover: "https://upload.wikimedia.org/wikipedia/en/a/a1/Beyonce_-_Renaissance.png"
    }
  ]

};



// STEP 2: Select DOM elements
const moodSelector = document.getElementById("moodSelector");
const songsContainer = document.getElementById("songsContainer");
const message = document.getElementById("message");



// STEP 3: Add event listener
moodSelector.addEventListener("change", function () {

  const selectedMood = moodSelector.value;

  // STEP 4: Clear previous content
  songsContainer.innerHTML = "";
  message.innerHTML = "";

  // STEP 5: Conditional check
  if (!moods[selectedMood]) {

    message.innerHTML = "Please select a mood.";

    return;
  }

  // Personalized message
  message.innerHTML = `Your ${selectedMood} playlist is ready 🎧`;

  // STEP 6: Loop through songs
  moods[selectedMood].forEach(function (song) {

    // Create column
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    // Create card
    col.innerHTML = `
      <div class="song-card">

        <img src="${song.cover}" class="song-cover">

        <div class="song-title">
          ${song.title}
        </div>

        <div class="song-artist">
          ${song.artist}
        </div>

      </div>
    `;

    // Add to page
    songsContainer.appendChild(col);

  });

});
