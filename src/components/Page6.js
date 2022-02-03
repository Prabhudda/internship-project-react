import React from 'react';
import '../styles/Page6.css';

export default function Page6(){
    return(
        <div>
            <div className='bg-page6'>
                <div className='container'>
                    <h3 className='bg-about-text fw-bold'>Got a question?</h3>
                    <div className='form-container my-4'>
                        <form className='text-center'>
                            <input type="text" placeholder='Name' className='input1 p-2'></input>
                            <input type="text" placeholder='Email' className='input2 p-2'></input><br></br>
                            <textarea placeholder='Question' className='my-4 pt-2' rows='2'></textarea>
                            <button className='btn '>Send message</button>
                        </form>
                    </div>
                </div>
            </div><br/>
        </div>
    )
}
