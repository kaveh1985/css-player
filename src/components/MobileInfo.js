import React from 'react'
import TimeIcon from './icons/TimeIcon';
import FiveGIcon from './icons/5Gicon';
import '../styles/MobileInfo.css'
import '../styles/signalIcon.css'


const MobileInfo = () => {
    return (
     
                <h4 className='topInfo'>
                    <i>{ <TimeIcon />}</i>
                    <i className="signal icon signalIcon"></i>
                    <i>{< FiveGIcon />}</i>
                    <i className="battery half icon"></i>
                </h4>
             
    
    )
}

export default MobileInfo;