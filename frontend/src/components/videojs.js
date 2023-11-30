import React, { useRef, useState, useEffect } from "react";
import videojs from "video.js";
import "videojs-contextmenu-ui";
import "videojs-overlay"
import { renderToString } from 'react-dom/server';

import SalesForm from "../page/testModal";
import Communication from "../page/communication";
import ContactForm from "../page/contactUs";

const VideoPlayer = (props) => {
  const videoPlayerRef = useRef(null); // Instead of ID

  const [displayForm, setDisplayForm] = useState(false);

  const [displayCommunication, setDisplayCommunication] = useState(false)
  const [checkForm, setCheckForm] = useState(false);

  // const videoSrc = "https://ix-shop.imgix.video/Croatia.mp4?fm=hls";
  const player = useRef(null);


  const videoJSOptions = {
    type: "video/mp4",
    videoSrc: 'assets/intro.mp4',
    autoplay: "muted",
    controls: true,
    userActions: { hotkeys: true },
    playbackRates: [0.5, 1, 1.5, 2]
  };
  console.log(videoJSOptions.controls)

  useEffect(() => {
    if (videoPlayerRef.current) {
      console.log("videoPlayerRef is hit");
      player.current = videojs(videoPlayerRef.current, videoJSOptions, () => {
        player.current.src({ src: videoJSOptions.videoSrc, type: videoJSOptions.type });
        console.log(`videoSrc is : ` + videoJSOptions.videoSrc);

        player.current.on("ended", () => {
          console.log("ended");
        });
        console.log("Player Ready");
      });

      const longText = `
      Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
      Praesent non nunc mollis, fermentum neque at, semper arcu.
      Nullam eget est sed sem iaculis gravida eget vitae justo.
      `;
      const overlay_content1 = `<div class=" custom-overlay"><button title="Sales"   target="_blank" onclick="showSalesForm()">
      <img alt="Qries" src="assets/icon1.png" class="overlaycss overlaycss1"/></button>
     </div>`;

      const overlay_content2 = `<div class=" custom-overlay"><button  title="${longText}"  id="overlayButton2" target="_blank">
      <img alt="Qries" src="assets/icon2.png" class="overlaycss overlaycss2"/></button></div>`;

      const overlay_content3 = `<div class=" custom-overlay"><button title="Reporting" id="overlayButton3" target="_blank">
      <img alt="Qries" src="assets/icon3.png" class="overlaycss overlaycss3"/></button></div>`;

      const overlay_content4 = `<div class=" custom-overlay"><button title="Communication" id="overlayButton4" target="_blank">
      <img alt="Qries" src="assets/icon4.png" class="overlaycss overlaycss4"/></button></div>`;

      const skipOverlay_content = `<div class="custom-skip-button">
      <button id="skipButtonId" class="custom-skip-button" title="skip">
      Skip
      </button></div>`

      const overlay_contactus = `<div class=" custom-overlay"><button title="Contact Us" id="overlaycontact" target="_blank">
      <img alt="Qries" src="assets/contact us.png" class="overlaycss overlaycss4"/></button></div>`;

      const closeSalesForm = () => {

        const saleForm = document.querySelector('.sales-form');
        console.log("close form", saleForm)
        if (saleForm) {
          console.log("login form", saleForm)
          saleForm.style.display = 'none';
          player.current.pause()
          // overlayBlockFunction()
        }
        // setCheckForm(true)
      };
      // Render sales component and get its HTML
      const SalesFormComponent = <SalesForm onClose={closeSalesForm} />;
      const salesFormHtml = renderToString(SalesFormComponent);


      // Render communication component and get its HTML
      const communicationFormComponent = <Communication onClose={closeSalesForm} />;
      const communicationFormHtml = renderToString(communicationFormComponent);

      // Render sales component and get its HTML
      const ContactFormComponent = <ContactForm onClose={closeSalesForm} />;
      const contactFormHtml = renderToString(ContactFormComponent);


      const overlayContent = player.current.overlay({

        overlays: [
          {
            start: 10, // Show overlay at 10 seconds
            end: 20,   // Hide overlay at 11 seconds
            content: overlay_content1 + overlay_content2 + overlay_content3 + overlay_content4 + skipOverlay_content,
            align: 'middle',
          },
          // {
          //   start: 10, // Show overlay at 10 seconds
          //   end: 20,   // Hide overlay at 11 seconds
          //   content: overlay_contactus + contactFormHtml,
          //   align: 'middle',
          // },
         
          {
            start: 10,
            end: 20,
            content: salesFormHtml
            // content: displayForm ? salesFormHtml : (overlay_content1 + overlay_content2 + overlay_content3 + overlay_content4),
          },
          {
            start: 10,
            end: 20,
            content: communicationFormHtml
          },   

          // { 
          //   start: 10,
          //   end: 'play'
          // },
          // {
          //   start: 20
          //   end: 'pause'
          // }
        ]
      });

      if (checkForm) {
        overlayContent()
      }

      console.log("After overlay initialization");

      // Define showLoginForm function
      window.showSalesForm = () => {
        const saleForm = document.querySelector('.sales-form');
        console.log("login form", saleForm)
        if (saleForm) {
          console.log("login form", saleForm)
          saleForm.style.display = 'block';
          player.current.pause()
          overlayNoneFunction()
        }
      };


      // // Handle button click
      // const overlayButton1 = document.getElementById('overlayButton1');
      // if (overlayButton1) {
      //   overlayButton1.addEventListener('click', () => {
      //     setDisplayForm(true);
      //     player.current.pause()
      //     player.current.tech().el().style.opacity = '0.5';
      //     player.current.el().classList.add('hide-controls');
      //     overlayNoneFunction()
      //   });
      // }

      // Handle button click
      const overlayButton2 = document.getElementById('overlayButton2');
      if (overlayButton2) {
        overlayButton2.addEventListener('click', () => {
          overlayNoneFunction()
        });
      }
      // Handle button click
      const overlayButton3 = document.getElementById('overlayButton3');
      if (overlayButton3) {
        overlayButton3.addEventListener('click', () => {
          overlayNoneFunction()
        });
      }

      const overlayButton4 = document.getElementById('overlayButton4');
      if (overlayButton4) {
        overlayButton4.addEventListener('click', () => {
          // setDisplayCommunication(true);
          const communicationForm = document.querySelector('.communication-form');
          console.log("communicationForm form", communicationForm)
          if (communicationForm) {
            console.log("login form", communicationForm)
            communicationForm.style.display = 'block';
            player.current.pause()
            overlayNoneFunction()
            player.current.tech().el().style.opacity = '0.5';
            player.current.el().classList.add('hide-controls');

          }
        });
      }

      // overlay imgaes display none
      const overlayNoneFunction = () => {
        // Hide the overlay by manipulating the DOM element
        const overlayElement1 = document.querySelector('.overlaycss1');
        if (overlayElement1) {
          overlayElement1.style.display = 'none';
        }
        const overlayElement2 = document.querySelector('.overlaycss2');
        if (overlayElement2) {
          overlayElement2.style.display = 'none';
        }
        const overlayElement4 = document.querySelector('.overlaycss4');
        if (overlayElement4) {
          overlayElement4.style.display = 'none';
        }

        const overlayElement3 = document.querySelector('.overlaycss3');
        if (overlayElement3) {
          overlayElement3.style.display = 'none';
        }

        // const skipElement = document.querySelector('.skipButtonId');
        // if (skipElement) {
        //   skipElement.style.display = 'none';
        // }        
      }

      const overlayBlockFunction = () => {
        // Hide the overlay by manipulating the DOM element
        const overlayElement1 = document.querySelector('.overlaycss1');
        if (overlayElement1) {
          overlayElement1.style.display = 'block';
        }
        const overlayElement2 = document.querySelector('.overlaycss2');
        if (overlayElement2) {
          overlayElement2.style.display = 'block';
        }
        const overlayElement4 = document.querySelector('.overlaycss4');
        if (overlayElement4) {
          overlayElement4.style.display = 'block';
        }

        const overlayElement3 = document.querySelector('.overlaycss3');
        if (overlayElement3) {
          overlayElement3.style.display = 'block';
        }
      }

      const skipButton = document.getElementById('skipButtonId');
      if (skipButton) {
        skipButton.addEventListener('click', () => {
          // alert('Skip Button clicked!');
          setDisplayForm(false);
          overlayNoneFunction()
          const skipElement = document.querySelector('.custom-skip-button');
          console.log(skipElement)
          if (skipElement) {
            skipElement.style.display = 'none';
          }
          // You can perform any action here
          player.current.tech().el().style.opacity = '1';
          player.current.el().classList.remove('hide-controls');
          player.current.play();
        });
      }


      // Pause the player when the overlay is shown
      player.current.on('timeupdate', () => {
        console.log('Current Time:', player.current.currentTime());

        if (player.current.currentTime() >= 10) {
          const overlayElement1 = document.querySelector('.overlaycss1');
          if (overlayElement1 && overlayElement1.style.display !== 'none') {
            player.current.tech().el().style.opacity = '0.5';
            player.current.pause();
            // Apply blur and hide controls when overlay is shown
            player.current.el().classList.add('hide-controls');
          }
          const overlayElement2 = document.querySelector('.overlaycss2');
          if (overlayElement2 && overlayElement2.style.display !== 'none') {
            player.current.pause();
            // Apply blur and hide controls when overlay is shown
            player.current.el().classList.add('hide-controls');
          }

          const overlayElement4 = document.querySelector('.overlaycss4');
          if (overlayElement4 && overlayElement4.style.display !== 'none') {
            player.current.pause();
            // Apply blur and hide controls when overlay is shown
            player.current.el().classList.add('hide-controls');
          }

          const overlayElement3 = document.querySelector('.overlaycss3');
          if (overlayElement3 && overlayElement3.style.display !== 'none') {
            player.current.pause();
            // Apply blur and hide controls when overlay is shown
            player.current.el().classList.add('hide-controls');
          }

        }

        // //Sales form display
        // if (player.current.currentTime() >= 4) {
        //   // Display your sales form overlay
        //   setDisplayForm(true);
        //   player.current.pause()
        //   player.current.tech().el().style.opacity = '0.5';

        //   // const getVideoPlayer = document.getElementById('myVideoPlayer');
        //   // // getVideoPlayer.style.filter = 'blur(2px)';
        //   // getVideoPlayer.style.opacity = '0.3'
        //   // getVideoPlayer.style.background = 'rgba(0, 0, 0, 0.5)';
        //   player.current.el().classList.add('hide-controls');
        // }

      });

      return () => {

      };
    }

  }, []);


  // const closeSalesForm = () => {
  //   setDisplayForm(false);
  //   setCheckForm(true)
  // };

  return (
    <div className="container">
      <div id="overlay"><h3>Customized Interactive Video Player</h3></div>
      <div data-vjs-player >
        <video
          ref={videoPlayerRef}
          className="video-js container" id="myVideoPlayer"
        //poster="https://image.media.imgix.video/02wBXRA6PpXwgqZdwXbIGgP00Ggj2hdbyd/thumbnail.jpg?width=800"
        />
      </div>
      {/* Display the form within the overlay */}
      {/* {displayForm && <SalesForm onClose={closeSalesForm} />} */}
      {/* {displayCommunication && <Communication />} */}

    </div>
  );
};  


export default VideoPlayer