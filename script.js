/* ===================================================== */
/* Scroll function from hero to app */
/* ===================================================== */

function scrollToApp() {

  document.getElementById("app")
    .scrollIntoView({ behavior: "smooth" });

}


/* ===================================================== */
/* PLAYLIST DATA OBJECT */
/* Reliable images with fallback protection */
/* ===================================================== */

const playlistData = {

  focus: [

    {
      title: "Tycho — Awake",
      cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&q=80"
    },

    {
      title: "Lo-fi Beats",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&q=80"
    },

    {
      title: "Hans Zimmer — Time",
      cover: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300&q=80"
    }

  ],


  chill: [

    {
      title: "Frank Ocean — Pink + White",
      cover: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80"
    },

    {
      title: "SZA — Good Days",
      cover: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=300&q=80"
    },

    {
      title: "Daniel Caesar — Best Part",
      cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&q=80"
    }

  ],


  hype: [

    {
      title: "Drake — Nonstop",
      cover: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=300&q=80"
    },

    {
      title: "Travis Scott — SICKO MODE",
      cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&q=80"
    },

    {
      title: "Kanye West — POWER",
      cover: "https://images.unsplash.com/photo-1464375117522-1311dd6d0cd1?w=300&q=80"
    }

  ]

};


/* ===================================================== */
/* DOM ELEMENTS */
/* ===================================================== */

const selector = document.getElementById("mood-selector");

const container = document.getElementById("playlist-container");

const feedback = document.getElementById("feedback");


/* ===================================================== */
/* EVENT LISTENER */
/* ===================================================== */

selector.addEventListener("change", function () {

  const mood = selector.value;


  /* Clear playlist */
  container.innerHTML = "";


  /* Conditional feedback */

  if (mood === "focus") {

    feedback.innerText = "Time to focus. Let's get productive.";

  }

  else if (mood === "chill") {

    feedback.innerText = "Relax and enjoy the vibes.";

  }

  else if (mood === "hype") {

    feedback.innerText = "Energy mode activated.";

  }

  else {

    feedback.innerText = "Select a mood.";

  }


  /* Get songs */

  const songs = playlistData[mood];


  /* Loop through songs */

  if (songs) {

    songs.forEach(function(song) {

      const row = document.createElement("div");

      row.className = "song-row";


      const img = document.createElement("img");

      img.src = song.cover;

      /* fallback protection */
      img.onerror = function() {

        this.src = "https://placehold.co/60x60?text=Music";

      };


      const title = document.createElement("div");

      title.innerText = song.title;


      row.appendChild(img);
      row.appendChild(title);


      container.appendChild(row);

    });

  }

});
