// assets/js/custom-config.js

// Load your one-line config.json and apply dynamic behaviors
fetch('config.json')
  .then(res => res.json())
  .then(config => {
    // 1) Particle background
    const particleEl = document.getElementById('main-particle');
    if (particleEl && config.particleImage1) {
      particleEl.style.backgroundImage = `url('${config.particleImage1}')`;
    }

    // 2) Countdown (FlipDown)
    if (typeof FlipDown === 'function' && config.countdownValue) {
      new FlipDown(config.countdownValue).start();
    }

    // 3) YouTube music iframe
    const ytContainer = document.getElementById('youtubeFrame');
    if (ytContainer && config.youtubeID) {
      ytContainer.innerHTML = `
        <iframe
          width="0" height="0"
          src="https://www.youtube.com/embed/${config.youtubeID}
               ?autoplay=1&loop=1&playlist=${config.youtubeID}
               &mute=0&controls=0"
          frameborder="0"
          allow="autoplay"
          allowfullscreen>
        </iframe>`;
    }

    // 4) Theme and other data-attributes
    document.body.dataset.themeUrl  = config.theme_url;
    document.body.dataset.themeTone = config.theme_tone;

    // 5) (Optional) Add any further config-driven logic here...
  })
  .catch(err => console.error('Failed to load config.json:', err));