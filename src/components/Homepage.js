import React from 'react';
import icon from '../Images/logo.png';
import '../styles/Homepage.css';

export default function Homepage(){
    return(
        <section className='home-page-img'>
            <div className="Header-Content">
                <div className='Header-left'>
                    <img src={icon} alt="icon"/>
                    <p className='text-iconnect fw-bold'>iConnect</p>
                </div>
                <nav className='Header-right'>
                    <ul>
                        <li><a className='link' href="http://localhost:3000/">About</a></li>
                        <li><a className='link' href="http://localhost:3000/">FAQ</a></li>
                        <li><a className='link' href="http://localhost:3000/">Features</a></li>
                        <li><a className='link' href="http://localhost:3000/">Journey</a></li>
                        <li><a href="http://localhost:3000/" className='button-text'>Am I Eligible?</a></li>
                    </ul>
                </nav>
                </div>
            <div className='home-page-content'>
                <div className='home-page-text'>
                    <h1 className='home-heading fw-bold'>A clinical research study for<br/> people with myelodysplastic<br/>syndromes with anemia.</h1>
                    <p>The study is to compare the effectiveness of a study drug versus a standard-of-<br/>care therapy.Individuals will be evaluated to determine their eligibility to <br/>participate.Each person who qualifies will receive either the study drug or<br/> standard-of-care therapy,study-related medical exams, and study-related <br/>laboratory tests at no cost.</p>
                    <button className='home-check-button'>check my eligibility</button>
                    <button className='home-learn-button' >Learn more</button>
                </div>
            </div>
        </section>
    )
}