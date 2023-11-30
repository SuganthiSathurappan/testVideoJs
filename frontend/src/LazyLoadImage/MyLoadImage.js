import { LazyLoadImage } from "react-lazy-load-image-component";
//import imgage1 from "../Images/2.jpg"

const generateArray = (items) => [...Array.from(Array(items).keys())];

const App = () => {
  const imageFileNames = ['0.jpg', '2.JPG', '3.JPG', '4.JPG', '5.JPG', '6.JPG', '7.JPG',
    '8.JPG', '9.JPG', '10.JPG', '11.JPG', '12.JPG', '13.JPG', '14.JPG', '15.JPG', '16.JPG',
    '17.JPG', '18.JPG', '19.JPG', '20.JPG'];
  return (
    <div>
      <h1><span>Lazy Loading Images</span> 🖼️</h1>

      <div className="container-images">
        {
          imageFileNames.map((fileName, index) => (
            <LazyLoadImage
              key={index}
              src={`/Images/${fileName}`}
              alt={`Image ${index + 1}`}
              effect="blur"
              className="img-lazy"
              width={500} height={500}
            />
          ))
        }
        {/* {
          generateArray(30).map(i => (
            <LazyLoadImage
              key={i}
              src={"http://localhost:3000/images/"}
              alt={`Image Alt-${i}`}
              className="img-lazy"
              width={700} height={500}
            />
          ))
        } */}
      </div>
    </div>
  )
}
export default App