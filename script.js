
var transition = document.querySelector('#themetransition');
var DarkMode = false;

async function ThemeSwitch() {

    if (DarkMode == false) {
        transition.style.opacity = 0;
        SetDarkTheme();

        DarkMode = true;
        localStorage.setItem('darkmode', 'true');
        transition.style.opacity = 1;
    } else {
        document.body.style.backgroundImage = "url('images/background_with_lilypads.png')"; 
        document.getElementById('themebutton').src = 'images/moon.png';

        // document.documentElement.style.setProperty('--green', '#90AA86');
        // document.documentElement.style.setProperty('--paper', '#DCCCA3');

        DarkMode = false;
        localStorage.setItem('darkmode', 'false');
    }
    
}

async function CheckForTheme() {
    if (localStorage.getItem('darkmode') == 'true') {
        DarkMode = true;
        SetDarkTheme();
    }
}


async function SetDarkTheme() {
    document.body.style.backgroundImage = "url('images/background_short_dark.png')";
    document.getElementById('themebutton').src = 'images/sun.png';

    // document.documentElement.style.setProperty('--green', '#3c4e36ff');
    //document.documentElement.style.setProperty('--paper', 'rgba(121, 111, 90, 1)');
}


CheckForTheme()

document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("text");
  const textbox = document.getElementById("textbox");
  const blip = document.getElementById("blip");

  // lines
  const messages = [
    "Heya! Welcome to my gaming corner :)",
    "Have fun and look around for a bit!",
    "Maybe you'll find some games to play ;)"
  ];

  let messageIndex = 0;
  let charIndex = 0;
  let typing = false;

  function typeWriter() {
    typing = true;
    if (charIndex < messages[messageIndex].length) {
      textElement.textContent += messages[messageIndex].charAt(charIndex);

      charIndex++;
      setTimeout(typeWriter, 40); // typing speed
    } else {
      typing = false;
    }
  }

  function showMessage() {
    textbox.style.display = "block";
    textElement.textContent = "";
    charIndex = 0;
    typeWriter();
  }

  function nextMessage() {
    if (typing) {
      // Skip typing
      textElement.textContent = messages[messageIndex];
      typing = false;
    } else {
      // Move to next line
      messageIndex++;
      if (messageIndex < messages.length) {
        showMessage();
      } else {
        textbox.style.display = "none"; // hide
      }
    }
  }

  // Start first message
  showMessage();

  // Key press listener
  document.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      nextMessage();
    }
  });
});

if (/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // This is a mobile device
    window.location.href = "mobile.html";
}