import React from 'react';
import '../styles/Page1.css';
export default function Page1(){
    return(
        <div>
            <div className='page-content'>
            <div className='page-text'>
                <h2>Are blood transfusions holding you back?</h2>
                <p className='page-text-paragraph'>The purpose of the is to compare the effectiveness of a study drug versus a standard-of-care therapy.<br/>individuals will be evaluated to determine their eligibility to participate. Each person who qualifies will receive<br/>either the study drug or standard-of-care therapy, study-related medical exams,and study-related laboratory tests at no cost.</p>
            </div>
            </div>
            <div className='bg-page1'>
                <div>
                    <h3 className='bg-about-text'>About the study</h3>
                    <p className='bg-about-paragraph'>Here are some key highlights of our study</p>
                </div>
                <div className='page1-grid'>
                    <div className='page1-grid1'>
                        <h3>Eligibility</h3>
                        <p>18 years or older participants with symptoms of MDS or<br/>anemia</p>
                    </div>
                    <div className='page1-grid2'>
                        <h3>Monthly Check-ups</h3>
                        <p>A check-up every third month to keep<br/> track of patient's health and recovery.</p>
                    </div>
                </div>
                <div className='page1-grid'>
                    <div className='page1-grid3'>
                        <h3>Treatment Period</h3>
                        <p>The total treatment period of this study is about 20-24<br/>weeks.</p>
                    </div>
                    <div className='page1-grid4'>
                        <h3>Compensation</h3>
                        <p>Participants might receive up to $300 for taking part in<br/> the study</p>
                    </div>
                </div>
            </div>
            </div>
    )
}