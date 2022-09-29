import './Data.css';
import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';
import Workout from '../Workout/Workout';
import Sidebar from '../Sidebar/Sidebar';


const Data = () => {
    const [workouts, setWorkouts] = useState([]);



    const workTimeEvent = (workout) => {
        console.log(workout);
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
            <Sidebar data={workTimeEvent}></Sidebar>
        </div>
    );
};

export default Data;
