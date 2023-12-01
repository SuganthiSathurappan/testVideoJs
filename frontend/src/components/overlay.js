import React, { useRef, useEffect, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-overlay/dist/videojs-overlay.css';
import 'videojs-overlay';
import { renderToString } from 'react-dom/server';

import Login from '../page/login'; // Import your Login component
import Communication from '../page/communication';


const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);


  useEffect(() => {
    const player = videojs(videoRef.current, {

      // controls: false,
      // Video.js options (e.g., controls, autoplay, etc.)
    });

    // Define hideLoginForm function

    // Render Skip button and get its HTML
    const skipButtonHtml = `<div class="custom-skip-button">
    <button id="skipButtonId" class="custom-skip-button" title="skip" onClick="showLoginForm()">
    Skip
    </button></div>`;


    // Add overlay with login form at 10 seconds
    const overlay = player.overlay(
      {
        content: skipButtonHtml, // Render your Login component
        start: 10,
        end: 20,
        align: 'bottom',
      }
    );

    player.ready(() => {

      // Define show sales Form function
      window.showLoginForm = () => {
        setIsLoginFormVisible(true);
        const skipoverlay = document.querySelector('.custom-skip-button')
        if (skipoverlay) {
          skipoverlay.style.display = 'none';
        }
        player.tech().el().style.opacity = '0.5';
        player.el().classList.add('hide-controls');
        player.pause()
        // Ensure that controlBar is available before calling hide
        if (player.controlBar) {
          player.controlBar.hide(); // Hide control bar
        }
        
    // player.on('click', () => {
    //   console.log(isLoginFormVisible)
    //   // Check if the form is visible before resuming
    //   if (isLoginFormVisible === true) {

    //     console.log("player")
    //     player.pause();
    //   }
    //   else
    //     player.play()
    // });
      };


      window.closeLoginForm = () => {
        setIsLoginFormVisible(false);

        if (!isLoginFormVisible) {

          // player.play(); // Resume player when form is closed
          player.controlBar.show();
        }
      };
    });


    // player.on('click', () => {
    //   console.log(isLoginFormVisible)
    //   // Check if the form is visible before resuming
    //   if (isLoginFormVisible === true) {

    //     console.log("player")
    //     player.pause();
    //   }
    //   else
    //     player.play()
    // });
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('fullscreen-toggle-btn'
        .addEventListener('click', toggleFullScreen))
    })

    const toggleFullScreen = async () => {
      const container = document.getElementById('wrapper');
      const fullscreenApi = container.requestFullscreen
        || container.webkitRequestFullScreen
        || container.mozRequestFullScreen
        || container.msRequestFullscreen;
      if (!document.fullscreenElement) {
        fullscreenApi.call(container);
      }
      else {
        document.exitFullscreen();
      }
    };

    // Clean up when the component is unmounted
    return () => {
      if (player) {
        // player.dispose();
      }
    };
  }, [isLoginFormVisible]);




  return (
    <div data-vjs-player style={{ width: "500px", height: "500px" }}>
      {isLoginFormVisible && (
        <div className={`login-form`} id="wrapper">
          <Communication onClose={window.closeLoginForm} />
        </div>
      )}

      <video ref={videoRef} className="video-js" controls>
        <source src='assets/intro.mp4' type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
