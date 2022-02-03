import React from 'react';
import '../styles/Page5.css';

export default function Page5(){
    return(
        <div className='page5-container'>
            <div>
                <div>
                    <h2 className='text-center'>Patient Journey</h2>
                </div>
                <div className='d-flex'>
                    <div className='p-2 fw-bold number-content num  my-3'>1</div>
                    <div className='mx-3 my-3'>
                        <h4>Check eligibility</h4>
                        <p className='my-3'>check your eligibility by taking up the <span className='text-danger'>eligibility test</span>.if you are eligible,you can connect with the team a a study site of your<br/>choice.</p> 
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='p-2 fw-bold number-content  my-3'>2</div>
                    <div className='mx-3 my-3'>
                        <h4>Screening Period</h4>
                        <p className='my-3'>The team will connect with you and screen you with other preliminary tests. This can take up to 30-35 days which may be<br/>extended.</p> 
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='p-2 fw-bold number-content my-3'>3</div>
                    <div className='mx-3 my-3'>
                        <h4>Treatment Period</h4>
                        <p className='my-3'>Eligible candidates will receive initial treatment for up to 24 weeks during which the health, sleep and physical activities will be<br/> monitored.</p> 
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='p-2 fw-bold number-content my-3'>4</div>
                    <div className='mx-3 my-3'>
                        <h4>Follow-up Period</h4>
                        <p className='my-3'>A follow-up period where you will be contacted approximately every 12 weeks to ask how you are doing.</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}