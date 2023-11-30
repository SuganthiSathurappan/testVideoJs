import React, { useRef, useEffect, useState, useMemo } from 'react';
import videojs from 'video.js';
import 'videojs-overlay';
// import { useVideoJS } from 'react-videojs-hooks';
import ReactDOM from 'react-dom'; // Import ReactDOM
import 'video.js/dist/video-js.css';
import 'videojs-overlay/dist/videojs-overlay.css';
import TestModal from "./testModal";

const Sale = () => {
    const videoRef = useRef(null);
    const [showButton, setShowButton] = useState(false);
    const [showForm, setShowForm] = useState(false);

    // Video.js player setup
    const options = {
        controls: true,
        fluid: true,
        // Add more options as needed
    };

    const events = {
        // Add more events as needed
    };

    // Define overlays using useMemo to memoize the array
    const overlays = useMemo(
        () => [
            {
                start: 5, // Display the button at 5 seconds
                align: 'top-left',
                content: '<button id="overlayButton">Click Me</button>',
            },
            {
                start: 10, // Display the form at 10 seconds
                align: 'top-left',
                content: '<div id="overlayForm"></div>',
            },
            // Add more overlays as needed
        ],
        []
    );


    useEffect(() => {
        const { player } = videojs(videoRef.current,{
            src: 'assets/intro.mp4', // Replace with your video source
            options,
            events,
            plugins: {
                overlay: {
                    overlays,
                },
            },
        });

        // Check current time of the video to toggle overlay visibility
        const timeUpdateHandler = () => {
            overlays.forEach((overlay) => {
                if (player.currentTime() >= overlay.start) {
                    if (overlay.content.includes('<button')) {
                        setShowButton(true);
                        setShowForm(false);
                    } else {
                        setShowButton(false);
                        setShowForm(true);
                    }
                } else {
                    setShowButton(false);
                    setShowForm(false);
                }
            });
        };

        player.addEventListener('timeupdate', timeUpdateHandler);

        return () => {
            player.removeEventListener('timeupdate', timeUpdateHandler);
        };
    }, [overlays]);

    useEffect(() => {
        // Attach click event for the button overlay
        const buttonOverlay = document.getElementById('overlayButton');
        if (buttonOverlay) {
            buttonOverlay.addEventListener('click', () => {
                // Add button click logic here
                console.log('Button clicked!');
            });
        }

        // Render the form component inside the form overlay
        const formOverlay = document.getElementById('overlayForm');
        if (formOverlay) {
            ReactDOM.render(<TestModal onSubmit={(formData) => console.log('Form submitted with data:', formData)} />, formOverlay);
        }

        return () => {
            // Cleanup when component unmounts
            if (buttonOverlay) {
                buttonOverlay.removeEventListener('click', () => { });
            }
            if (formOverlay) {
                ReactDOM.unmountComponentAtNode(formOverlay);
            }
        };
    }, [showButton, showForm]);

    return (
        <div>
            <div data-vjs-player>
                <video ref={videoRef} className="video-js" />
            </div>

            {/* Display the button overlay */}
            {showButton && (
                <div className="videojs-overlay videojs-overlay-top-left">
                    <button id="overlayButton">Click Me</button>
                </div>
            )}

            {/* Display the form overlay */}
            {showForm && (
                <div className="videojs-overlay videojs-overlay-top-left">
                    <div id="overlayForm"></div>
                </div>
            )}
        </div>
    );
};

export default Sale;
