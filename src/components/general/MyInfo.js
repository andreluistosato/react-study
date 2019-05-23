import React from 'react';

function MyInfo() {
    const hours = new Date().getHours();
    let timeOfDay;
    const styles = {
        color: "blue", 
        textAlign: "center",
        //fontSize: 20 <- this is automatically use px
        //fontSize: "20px" <- if i need to specify the unit, quotes are necessary
    };

    if (hours < 12) {
        timeOfDay = "morning";
        styles.color = "orange";
      } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
        styles.color = "blue";
      } else {
        timeOfDay = "night";
        styles.color = "purple";
      }

    return (
        <div>
            <h1>André Luis Tosato da Cruz</h1>
            <p>This is a paragraph about me...</p>
            <ul>
                <li>Eat</li>
                <li>Train</li>
                <li>Sleep</li>
            </ul>
            <h1 style={styles}>Good {timeOfDay}!</h1>
            <h2 style={{color: "red", textAlign: "left"}}><b>It's about {hours}h!</b></h2>
            <h2 style={styles}><b>It's about {hours}h!</b></h2>
            <h2 style={{color: "green", textAlign: "right"}}><b>It's about {hours}h!</b></h2>
        </div>
    )
}

export default MyInfo;