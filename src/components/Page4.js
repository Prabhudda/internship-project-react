import React from 'react';
import '../styles/Page4.css';
import img1 from '../Images/img-1.jpg';
import img2 from '../Images/img-2.jpg';
import img3 from '../Images/img-3.jpg';



export default function Page4(props){
    return(
        <div className='page4-container'>
            <div className='page4-container-1'>
                <div className='page4-content1'>
                    <h2 className='page4-head-text'>{props.title}</h2>
                    <p>{props.content}</p>
                </div>
                <div className='page4-content2'>
                    <img src={img1} alt='technician' width="500px" height="350px"/>
                </div>
            </div><br/><br/><br/><br></br>

            <div className='page4-container'>
            <div className='page4-container-2'>
                <div className='page4-content3'>
                    <img src={img2} alt='technician' width="500px" height="350px"/>
                </div>
                <div className='page4-content4'>
                    <h2 className='page4-head-text'>Monthly Check-ups</h2>
                    <p>The study conducts patient check-up every<br/>third weekend of the month to keep track of<br/>patient's health and recovery.</p>
                </div>
            </div><br/><br/><br/><br></br>

            <div className='page4-container'>
            <div className='page4-container-3'>
                <div className='page4-content1'>
                    <h2 className='page4-head-text'>In-home check-ups</h2>
                    <p>Eligible candidates can choose for in-home<br/>consultation every month from our trained<br/>study professionals</p>
                </div>
                <div className='page4-content2'>
                    <img src={img3} alt='technician' width="500px" height="350px"/>
                </div>
            </div><br/><br/><br/><br></br>
        </div>
        </div>
        </div>
    )
}