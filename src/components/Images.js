import React from 'react'
import one from '../img/one.jpg';
import five from '../img/five.webp';
import for1 from '../img/for.jpg';
import three from '../img/three.jpg';
import two from '../img/two.jpg';
import '../styles/Images.css'


export default (props) => {
    return (
            <div >
                <h1>{props.text}</h1>
                <p className='images'>testing</p>
            </div>
    )
}