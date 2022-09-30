import './Question.css';
import React from 'react';

const Question = () => {
    return (
        <div>
            <h1>Question & Ans</h1>
            <h3 className='question'>How React works?</h3>
            <p>Ans: React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            <h3 className='question'>Difference between props and state?</h3>
            <p>Ans: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component</p>
            <h3 className='question'>Whrer USeEffect uses?</h3>
            <p>Ans: Basically UseEffect use many kind of things <br /> 1.updating the DOM,  and timers <br /> 2.runs on every render <br />3.fetching data</p>
        </div>
    );
};

export default Question;
