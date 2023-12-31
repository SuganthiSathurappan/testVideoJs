import React, { Component } from "react";

class DisplayImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };

   // if we are using arrow function binding is not required
   //  this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];

        this.setState({
            image: URL.createObjectURL(img) 
            });
      console.log (this.state.image,img )
    }
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <img src={this.state.image} style={{ width: '80px', height: '80px' }} />
            <h1>Select Image</h1>
            <input type="file"
            onChange={this.onImageChange} />
          </div>
        </div>
      </div>
    );
  }
}
export default DisplayImage;

