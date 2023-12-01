import React, { useRef, useState, useEffect } from "react";
import videojs from "video.js";
import 'video.js/dist/video-js.css';
import "videojs-contextmenu-ui";
import "videojs-overlay";
import { renderToString } from 'react-dom/server';

// Import your SalesForm component
import SalesForm from "../page/testModal";
import Documentation from "../page/documentation";
import Reporting from "../page/reporting"
import Communication from "../page/communication";
import ContactForm from "../page/contactUs";

const VideoPlayer = (props) => {
    const videoPlayerRef = useRef(null);
    const player = useRef(null);
    const overlayRef = useRef(null);
    const overlayNoneFunction = useRef(null)
    const overlayBlockFunction = useRef(null)

    const [displayForm, setDisplayForm] = useState(false);
    const [displayDocument, setDisplayDocument] = useState(false);
    const [displayReporting, setDisplayReporting] = useState(false);
    const [displayCommunication, setDisplayCommunication] = useState(false)
    const [displayContact, setDisplayContact] = useState(false)

    const videoJSOptions = {
        type: "video/mp4",
        videoSrc: 'assets/intro.mp4',
        // autoplay: "muted",
        controls: true,
        userActions: { hotkeys: true },
        playbackRates: [0.5, 1, 1.5, 2]
    };

    useEffect(() => {
        if (videoPlayerRef.current) {
            player.current = videojs(videoPlayerRef.current, videoJSOptions, () => {
                player.current.src({ src: videoJSOptions.videoSrc, type: videoJSOptions.type });

                // const existingLogoButton = player.current.controlBar
                //     .children()
                //     .find(child => child.hasClass('vjs-logo-button'));

                // if (!existingLogoButton) {
                //     // Add your custom logo to the control bar
                //     const logoButton = player.current.controlBar.addChild('button', {
                //         text: 'Logo',

                //         clickHandler: function () {
                //             // Handle logo button click
                //             console.log('Logo clicked');
                //         },
                //     });

                //     const newLink = document.createElement('a');
                //     newLink.setAttribute('href', 'https://www.techtist.com/');

                //     // Comment out the next line to open link in the same browser tab
                //     newLink.setAttribute('target', '_blank');
                //     // Create an img element for the logo
                //     const logoImg = document.createElement('img');
                //     logoImg.src = 'assets/logocopy.png'; // Update with the correct path
                //     newLink.appendChild(logoImg);
                //     // Append the img element to the button
                //     logoButton.el().appendChild(newLink);
                //     logoButton.addClass('vjs-logo-button');
                // }

                // // Remove all existing controls
                // player.current.controlBar.children().forEach((child) => {
                //     player.current.controlBar.removeChild(child);
                // });

                // // // Add only the controls you want
                // // // Customize the control bar
                // addControlBarChild(player.current, 'PlayToggle', {}, 0);
                // addControlBarChild(player.current, 'MuteToggle', {}, 1);

                // // // Position ProgressControl at the top
                // addControlBarChild(player.current, 'ProgressControl', {},2); // 0 is the index for top

                // addControlBarChild(player.current, 'FullscreenToggle', {},3);


                const overlay_Title1 = `<div class="overlayTitle1"><span >Logisuite</span></button>
               </div>`;

                const overlay_content1 = `<div class="custom-overlay ">
                <button  class="overlaycss overlaycss1" title="Sales" target="_blank" onclick="showSalesForm()">
                <img alt="Qries" src="assets/icon1.png" /><br/>
                <span>Sales</span>
                </button>                
               </div>`;

                const overlay_content2 = `<div class="custom-overlay">
                <button class="overlaycss overlaycss2" title="Documentation"  id="overlayButton2" target="_blank" onclick="showDocumentForm()">
                <img alt="Qries" src="assets/icon2.png" /><br/>
                <span>Documentation</span>
                </button></div>`;

                const overlay_content3 = `<div class="custom-overlay">
                <button class="overlaycss overlaycss3" title="Reporting" id="overlayButton3" target="_blank" onclick="showReportForm()">
                <img alt="Qries" src="assets/icon3.png" /><br/>
                <span>Reporting</span>
                </button></div>`;

                const overlay_content4 = `<div class="custom-overlay">
                <button class="overlaycss overlaycss4" title="Communication" id="overlayButton4" target="_blank" onclick="showCommunicationForm()">
                <img alt="Qries" src="assets/icon4.png" /><br/>
                <span>Communication</span>
                </button></div>`;

                const skipOverlay_content = `<div class="custom-skip-button">
                <button id="skipButtonId" class="custom-skip-button" title="skip" onclick="handleSkip()">
                <span> Skip</span>
                </button></div>`;

                const overlay_contactus = `<div class=" custom-overlay">
                <button class="common contactusCss" title="Contact Us" id="overlaycontact" target="_blank" onclick="showContactForm()">
                <img alt="Qries" src="assets/contact us.png"/></button></div>`;

                // Render sales component and get its HTML

                const ContactFormComponent = <ContactForm onClose={closeSalesForm} />;
                const contactFormHtml = renderToString(ContactFormComponent);


                // Set up the overlay
                overlayRef.current = player.current.overlay({

                    overlays: [
                        {
                            start: 88, // Show overlay at 10 seconds
                            end: 100,   // Hide overlay at 11 seconds
                            content: overlay_Title1 + overlay_content1 + overlay_content2 + overlay_content3 + overlay_content4 + skipOverlay_content,
                            align: 'middle',
                        },
                        {
                            start: 120, // Show overlay at 10 seconds
                            end: 123,   // Hide overlay at 11 seconds
                            content: overlay_contactus + skipOverlay_content,
                            align: 'middle',
                        },

                        // {
                        //     start: 'playing',
                        //     end: 'paused',
                        //     // class: 'custom-skip-button',
                        //     content: overlay_content_sales,
                        //     align: 'middle', // Adjust position as needed                           
                        // },                       
                    ],
                });

                // Define show sales Form function
                window.showSalesForm = () => {
                    setDisplayForm(true);
                    player.current.pause()
                    overlayNoneFunction.current()
                };

                // Define show document Form function
                window.showDocumentForm = () => {
                    setDisplayDocument(true);
                    player.current.pause()
                    overlayNoneFunction.current()
                };
                // Define show document Form function
                window.showReportForm = () => {
                    setDisplayReporting(true);
                    player.current.pause()
                    overlayNoneFunction.current()
                };
                // Define show Communication form function
                window.showCommunicationForm = () => {
                    setDisplayCommunication(true);
                    player.current.pause()
                    overlayNoneFunction.current()
                };

                // Define show contact us form function
                window.showContactForm = () => {
                    setDisplayContact(true);
                    player.current.pause()
                    const overlayContactbtn = document.querySelector('.contactusCss');
                    if (overlayContactbtn) {
                        overlayContactbtn.style.display = 'none';
                        // player.current.el().classList.add('hide-controls');
                        // player.current.tech().el().style.opacity = '0.5';
                    }
                };

                //skip button click
                window.handleSkip = () => {
                    setDisplayCommunication(false)
                    setDisplayForm(false);
                    setDisplayContact(false)
                    setDisplayReporting(false)
                    setDisplayDocument(false)
                    overlayNoneFunction.current()

                    const skipElement = document.querySelector('.custom-skip-button');
                    if (skipElement) {
                        skipElement.style.display = 'none';
                    }
                    if (player.current.currentTime() >= 120) {
                        const overlayContactbtn = document.querySelector('.contactusCss');
                        if (overlayContactbtn) {
                            overlayContactbtn.style.display = 'none';
                        }            
                    }
                    // You can perform any action here
                    player.current.tech().el().style.opacity = '0.95';
                    player.current.el().classList.remove('hide-controls');
                    player.current.play();
                    if (player.current.controlBar) {
                        player.current.controlBar.show(); // show control bar
                    }
                };

                // overlay imgaes display none
                overlayNoneFunction.current = () => {
                    // Hide the overlay by manipulating the DOM element
                    const overlayTitle = document.querySelector('.overlayTitle1');
                    if (overlayTitle) {
                        overlayTitle.style.display = 'none';
                    }

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

                }

                // overlay imgaes display block
                overlayBlockFunction.current = () => {
                    // Hide the overlay by manipulating the DOM element
                    const overlayTitle = document.querySelector('.overlayTitle1');
                    if (overlayTitle) {
                        overlayTitle.style.display = 'block';
                    }
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

                // //skip button
                // const skipButton = document.getElementById('skipButtonId');
                // console.log(skipButton)
                // if (skipButton) {
                //     console.log("skipButton")
                //     skipButton.addEventListener('click', () => {
                //         alert('Skip Button clicked!');
                //         setDisplayCommunication(false)
                //         setDisplayForm(false);
                //         setDisplayContact(false)
                //         setDisplayReporting(false)
                //         setDisplayDocument(false)
                //         overlayNoneFunction.current()
                //         const skipElement = document.querySelector('.custom-skip-button');
                //         console.log(skipElement)
                //         if (skipElement) {
                //             skipElement.style.display = 'none';
                //         }
                //         // You can perform any action here
                //         player.current.tech().el().style.opacity = '0.95';
                //         player.current.el().classList.remove('hide-controls');
                //         player.current.play();
                //         if (player.current.controlBar) {
                //             player.current.controlBar.show(); // show control bar
                //         }
                //     });
                // }

                player.current.on("ended", () => {
                    console.log("ended");
                });
                console.log("Player Ready");
            });

            // Pause the player when the overlay is shown
            player.current.on('timeupdate', () => {
                console.log('Current Time:', player.current.currentTime());

                if (player.current.currentTime() >= 88 && player.current.currentTime() <= 100) {

                    const overlayElement1 = document.querySelector('.overlaycss1');
                    if (overlayElement1 && overlayElement1.style.display !== 'none') {
                        player.current.pause();
                        // Apply blur and hide controls when overlay is shown
                        player.current.tech().el().style.opacity = '0.5';
                        player.current.el().classList.add('hide-controls');
                        if (player.current.controlBar) {
                            player.current.controlBar.hide(); // Hide control bar
                        }
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

                else if (player.current.currentTime() >= 120 && player.current.currentTime() <= 121) {
                    const overlayContactbtn = document.querySelector('.contactusCss');
                    // if (overlayContactbtn) {
                    //     overlayContactbtn.style.display = 'block';                       
                    // }
                    if (overlayContactbtn && overlayContactbtn.style.display !== 'none') {
                        player.current.pause();
                        // Apply blur and hide controls when overlay is shown
                        player.current.tech().el().style.opacity = '0.5';
                        player.current.el().classList.add('hide-controls');
                        if (player.current.controlBar) {
                            player.current.controlBar.hide(); // Hide control bar
                        }
                    }
                }
                else {
                    player.current.tech().el().style.opacity = '0.95';
                    player.current.el().classList.remove('hide-controls');
                    // player.current.play();
                }
            });

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

            return () => {
                // Clean up if needed
                // if (player.current) {
                //   player.current.dispose();
                // }
            };
        }
    }, []);

    // Function to add a child to the control bar only if it doesn't exist
    const addControlBarChild = (player, componentName, options, index) => {
        const existingChild = player.controlBar.getChild(componentName);
        if (!existingChild) {
            player.controlBar.addChild(componentName, options, index);
        }
    };

    //close all form code here
    const closeSalesForm = () => {
        setDisplayForm(false);
        setDisplayDocument(false)
        setDisplayReporting(false)
        setDisplayCommunication(false)
        setDisplayContact(false)
        // if (videoPlayerRef.current) {
        //     videoPlayerRef.current.play();
        // }
        overlayBlockFunction.current()
    };
    const closeContactForm = () => {
        setDisplayContact(false)
        if (videoPlayerRef.current) {
            videoPlayerRef.current.play();
        }

        player.current.tech().el().style.opacity = '0.95';
    };

    return (
        <div className="container">
            <div id="overlay" className="flex mt-2 items-center text-red-600 font-semibold text-2xl justify-center">
                Customized Interactive Video Player
            </div>
            <div data-vjs-player vjs-big-play-button>
                <video
                    ref={videoPlayerRef}
                    className="video-js container"
                />
                <div id="wrapper">
                    {displayForm &&
                        <div id="overlay">
                            <SalesForm onClose={closeSalesForm} />
                        </div>
                    }
                    {displayDocument &&
                        <Documentation onClose={closeSalesForm} />
                    }
                    {displayReporting &&
                        <Reporting onClose={closeSalesForm} />
                    }
                    {displayCommunication &&

                        <Communication onClose={closeSalesForm} />
                    }
                    {displayContact &&
                        <ContactForm onClose={closeContactForm} />
                    }
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
