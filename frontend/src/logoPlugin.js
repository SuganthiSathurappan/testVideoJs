import videojs from 'video.js';

const logoPlugin = function () {
  const player = this;

  player.ready(function () {
    const logoContainer = document.createElement('div');
    const logoImage = document.createElement('img');

    logoContainer.className = 'vjs-logo-container';

    logoImage.src = 'path/to/your/logo.png'; // Replace with the path to your logo image
    logoImage.alt = 'Logo';

    logoContainer.appendChild(logoImage);

    // Append the logo to the control bar
    const controlBar = player.controlBar.el();
    controlBar.appendChild(logoContainer);
  });
};

videojs.registerPlugin('logoPlugin', logoPlugin);
