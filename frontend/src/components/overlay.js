import React, { useRef, useEffect,useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-overlay/dist/videojs-overlay.css';
import 'videojs-overlay';
import { renderToString } from 'react-dom/server';

import Login from '../page/login'; // Import your Login component


const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);


  useEffect(() => {
    const player = videojs(videoRef.current, {
      
      // controls: false,
      // Video.js options (e.g., controls, autoplay, etc.)
    });

    // Define hideLoginForm function

    // Render Login component and get its HTML
  
    const loginComponent = <Login onCancel={() => setIsLoginFormVisible(false)} />;
    const loginHtml = renderToString(loginComponent);

    // Render Skip button and get its HTML
    const skipButtonHtml = '<button class="skip-button" onclick="showLoginForm()">Skip</button>';


    // Add overlay with login form at 10 seconds
    player.overlay({
      content: loginHtml, // Render your Login component
      start: 5,
      end: 20,
      // align: 'middle',
      class: 'login-form'
    },
      {
        content: skipButtonHtml, // Render your Login component
        start: 10,
        end: 20,
        align: 'middle',
      });


    // Define showLoginForm function
    window.showLoginForm = () => {
      // Display the login form
      const loginForm = document.querySelector('.login-form');
      console.log("login form", loginForm)
      if (loginForm) {
        console.log("login form", loginForm)
        loginForm.style.display = 'block';
        player.pause()
      }
    };


    // Clean up when the component is unmounted
    return () => {
      if (player) {
        // player.dispose();
      }
    };
  }, []);



  const hideLoginForm = () => {
    // Hide the login form
    console.log("Hide the login form")
    if (videoRef.current) {
      videoRef.current.pause();
    }
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
      loginForm.style.display = 'none';
    }
  };


  return (
    <div data-vjs-player style={{width:"500px", height:"500px"}}>
      {isLoginFormVisible && (
        <div className={`login-form`}>
          <Login onCancel={() => setIsLoginFormVisible(false)} />
        </div>
      )}
      <video ref={videoRef} className="video-js" controls>
        <source src='assets/intro.mp4' type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
