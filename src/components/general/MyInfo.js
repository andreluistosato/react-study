import React from 'react';

function MyInfo() {
    const time = new Date().getHours();

    return (
        <div>
            <h1>André Luis Tosato da Cruz</h1>
            <p>This is a paragraph about me...</p>
            <ul>
                <li>Eat</li>
                <li>Train</li>
                <li>Sleep</li>
            </ul>
            <h2><b>It's about {time}h!</b></h2>
        </div>
    )
}

export default MyInfo