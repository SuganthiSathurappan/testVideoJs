import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from './common/layout';
import RunApp from "./components/testVideo";


function App() {
  return (
    <div>
      <Navbar />
      <RunApp />
    </div>
  )
}
export default App;

// import React from 'react';
// import VideoPlayer from './components/videoPlayer';
// import Overlay from './components/overlay';
// import './Style.css';

// const App = () => {
//   const videoUrl = '/assets/intro.mp4';

//   return (
//     <div>
//       <VideoPlayer videoUrl={videoUrl} />
//       <Overlay />
//     </div>
//   );
// };
// export default App;