import React from 'react';

export default function SignIn(props) {
    function setLocalStorage(){
        if(!props.usernam || props.username.length < 0){
            return alert('Username is required')
        }
        if(!props.password || props.password.length < 0){
            return alert('Password is reqired')
        }
        localStorage.setItem('username', props.username)
        localStorage.setItem('password', props.password)
        props.handleLoading()
        props.handleSignIn(true)
    }

    return (
        <>
            <h1>Welcome to CLICKWAY</h1>
            <h4>We swear we're not a pyramid scheme.</h4>
            <p>Username: <input value={props.username} onChange={(e) => props.handleSetUserName(e.target.value)} /></p>
            <p>Password: <input value={props.password} onChange={(e) => props.handleSetPassword(e.target.value)} /></p>
            <button onClick={setLocalStorage}>CLICK!!</button>
        </>
    )
}