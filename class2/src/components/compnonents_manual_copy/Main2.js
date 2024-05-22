import React from 'react';
import Counter2 from './Counter2';
export default function Main2(props) {
    const userName = localStorage.getItem('userName')
    return (
        <>
            <h1>Hello {userName}</h1>
            <Counter2 clickCount={props.clickCount} handleClickCount={props.handleclicks} handleSaveClickCount={props.handleSaveClickCount} handleResetClickCount={props.handleResetClickCount} handleSignout={props.handleSignout} />
        </>
    )
}