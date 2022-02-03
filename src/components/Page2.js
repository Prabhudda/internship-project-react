import React from 'react';
import '../styles/Page2.css';

export default function Page2(){
    return(
        <div>
            <div className='page2-container'>
                <div className='page2-content'>
                    <h5 className='page2-head-text fw-bold'>What is MDS and anemia?</h5>
                    <p>MDS is a rare blood cancer in which blood cells the bone marrow do not grow to become healthy red blood cells, white blood cells, or platelets - all the vital components of blood. Not being able to develop healthy red blood cells leads to anemia, which is common with MDS. Anemia has many of the same y as MDS and causes even greater fatigue.<br/><br/>
                    It can be exhausting to live with a condition that makes you feel like you're being held back if you're caring for a loved one with the condition,it can be equally trying. However, right now, research is underway an investigational study drug to see if it may help alleviate anemic symptoms and better manage your MDS And you may be able to take part in this study.</p>
                </div>
            </div>
            <div className='page2-container-2'>
                <div className='page2-content-2'>
                    <h6 className='page2-h6'>Let's find out if you are eligible for the study.</h6>
                    <p className='page2-head-text2'>Take up this questionnaire to help us determine if you have symptoms that are common for MDS<br/>and anemia. If you have the common symptoms, you may be eligible to take part in the study</p>
                    <button className='page2-button'>Start answering &rarr;</button>
                </div>
            </div>
        </div>
    )
}