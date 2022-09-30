import './Sidebar.css';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Sidebar = ({ data }) => {
    const [breakTime, setBreakTime] = useState([]);
    useEffect(() => {

    }, [breakTime]);
    const addLocalStorage = Time => {
        localStorage.setItem("break", Time);
        setBreakTime(Time);
    };
    const getLocalStorageItem = localStorage.getItem("break");

    const notify = () => {
        toast("Congratulation!!! Yes you did it ");
    }

    return (
        <div className='user_info'>
            <div className="">
                <div className="personal">
                    <img src="" alt="" />
                    <div className="personal_info">
                        <h2>Md Nazmul Ahamed Deep</h2>
                        <h4>Bangledesh</h4>
                    </div>
                </div>
                <div className="physical_info exercise_time">
                    <div className="">
                        <h2>70 <small>kg</small></h2>
                        <h3>Weight</h3>
                    </div>
                    <div className="">
                        <h2>5.10 <small>in</small></h2>
                        <h3>Height</h3>
                    </div>
                    <div className="">
                        <h2>23 <small>yrs</small></h2>
                        <h3>Age</h3>
                    </div>
                </div>
            </div>
            <div className="brack">
                <h1>Add A Break</h1>
                <div className="physical_info exercise_time">
                    <button onClick={e => addLocalStorage(e.target.innerText)} className='brack_btn'>3</button>
                    <button onClick={e => addLocalStorage(e.target.innerText)} className='brack_btn'>5</button>
                    <button onClick={e => addLocalStorage(e.target.innerText)} className='brack_btn'>8</button>
                    <button onClick={e => addLocalStorage(e.target.innerText)} className='brack_btn'>10</button>
                    <button onClick={e => addLocalStorage(e.target.innerText)} className='brack_btn'>15</button>
                </div>
            </div>
            <div className="exercise">
                <h1>Exercise Details</h1>
                <div className="exercise_time">
                    <h3>Exercise time <small className='sort_text'><span >{data}</span> minutes</small> </h3>
                </div>
                <div className="exercise_time">
                    <h3>Break time <small className='sort_text'><span >{getLocalStorageItem}</span> minutes </small> </h3>
                </div>
            </div>
            <div className="acitivety">
                <button onClick={notify} className='acti_btn'>Activity Completed</button>

            </div>
            <ToastContainer />
        </div>

    );
};

export default Sidebar;