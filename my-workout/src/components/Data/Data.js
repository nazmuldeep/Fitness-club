import './Data.css';
import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';
import Workout from '../Workout/Workout';
import Sidebar from '../Sidebar/Sidebar';


const Data = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch('datas.json')
            .then(res => res.json())
            .then(data => setWorkouts(data));
    }, []);
    const [time, setTime] = useState(0);
    const workTimeEvent = (Time) => {
        setTime(time + Time);
        console.log(time)
    }

    return (

        <div className="information">
            <div className='workout_section'>
                {
                    workouts.map(workout => <Workout
                        key={workout.id}
                        workout={workout}
                        workTimeEvent={workTimeEvent}
                    >

                    </Workout>)
                }

            </div>
            <Sidebar data={time}></Sidebar>
        </div>
    );
};

export default Data;
