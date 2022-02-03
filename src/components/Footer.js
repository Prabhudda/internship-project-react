import React from 'react';
import '../styles/Footer.css';

export default function Footer(){
    return(
        <div  className='footer-container'>
            <div className='footer-content'>
            <div className='d-flex'>
                <div>
                    <h6 className='fw-bold'>Address</h6>
                    <p>350 5th Ave, New York, NY<br/>10118, USA</p>
                </div>
                <div className='mx-5'>
                    <h6 className='fw-bold'>Links</h6>
                        <a className='a' href='http://localhost:3000/'>About</a><br/>
                        <a className='a' href='http://localhost:3000/'>FAQ</a><br/>
                        <a className='a' href='http://localhost:3000/'>Eligibility</a><br/>
                        <a className='a' href='http://localhost:3000/'>Features</a><br/>
                        <a className='a' href='http://localhost:3000/'>Jounery</a><br/>
                </div>
            </div>
            <div>
                <h6 className='fw-bold'>Contacts</h6>
                <p>support@iconnect.com<br/>+1(0) 000 0000 001<br/>+1(0) 000 0000 002</p>
                <div className='copyright'>&copy; Copyright 2021 iConnect - All Rights Reserved</div>
            </div>
            </div>
            
        </div>
        
    )
}