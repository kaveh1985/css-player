import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styles/Slider.css'



class Slider extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.display = false;
      }

   
//    getTheWith() {
//     //   console.log(this.myRef.current.offsetWidth)
//       this.display =  this.myRef.current.offsetWidth > 415 ? true : false;
//    }

      
  componentDidMount() {
    // this.getTheWith()
    // console.log(this.display)
  }
     
    render() {
        const result = this.props.text;
    
        return (
           <div>
            <h1 className="top">{this.props.topic}</h1>
            <Carousel 
            autoPlay={false}
            centerMode={true}
            showThumbs={this.display}
            showIndicators={this.display}
            showArrows={false}
            showStatus={false}>
               
                <div>
                    <img src={this.props.one} />
                    <p>{result[0]}</p>
                </div>
                <div>
                    <img src={this.props.two} />
                    <p>{result[1]}</p>
                
                </div>
                <div>
                    <img src={this.props.three} />
                    <p>{result[2]}</p>
            
                </div>
                <div ref={this.myRef}>
                    <img src={this.props.for1}/>
                    <p>{result[2]}</p>
            
                </div>
                <div>
                    <img src={this.props.five} />
                    <p>{result[2]}</p>
                </div>
              
    </Carousel>

           </div>
        )
    }
   
}

export default Slider;