import React from 'react';

export default function Counter2(props) {
    return (
        <>
            <p>You've clicked this many times: {props.clickCount}</p>
            <p>
                <button onCluck={props.handleClickCount}>Add Clicks and Make Your Upline Proud!</button>
            </p>
            <p>
                <button onClick={props.handleSaveClickCount}>Submit your clicks so you whole team gets creadit!</button>
            </p>
            <p>
                <button onClick={props.handleResetClickCount}>Only click this button if you want to lose all your progress.</button>
            </p>
            <p>
                <button onClick={props.handleSignout}>Sign Out</button>
            </p>
        </>
    )
}