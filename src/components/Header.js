import React from "react"

function Header(){

    const date = new Date()
    const hour = date.getHours()
    const min = date.getMinutes()
    const sec = date.getSeconds()
    var dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"]
    const day = date.getDay()
    console.log(min, sec, hour)
    let pahar
    let timeOfDay
    
    if (hour >= 12 && hour < 17){
      timeOfDay = "afternoon"
      pahar = "PM"
    }
    else if (hour >= 15 && hour < 20){
        timeOfDay = "evening"
        pahar = "PM"
    }
    else if (hour < 12){
      timeOfDay = "morning"
      pahar = "AM"
    }
    else{
      timeOfDay = "night"
      pahar = "PM"
    }
    return (
      <h1> hi good {timeOfDay}, Today is {dayList[day]}, and Current time is : {hour} : {min} : {sec} {pahar}  </h1>
      
)

}

export default Header