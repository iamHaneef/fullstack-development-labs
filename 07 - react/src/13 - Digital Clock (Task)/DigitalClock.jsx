import { useEffect, useState } from "react";
import "./DigitalClock.css"
function DigitalClock() {

    const [time, setTime] = useState(new Date());

    //define a clock by timeout

    useEffect(() => {
        //Time out for Timer

        const timer = setInterval(()=>{
            setTime(new Date());
        },1000);

        return() => {
            clearInterval(timer);
        }

    }, []);

    //Time format

    function TimeFormat() {

        let hour = time.getHours();
        let minute =  time.getMinutes();
        let second = time.getSeconds();
        let meridian = hour >= 12 ? "PM" : "AM";

        //24 -> 12 hours convert
        hour = hour % 12 || 12;

        return `${zeropad(hour)} : ${zeropad(minute)} : ${zeropad(second)} ${meridian}`;

    }

    function zeropad(value) {
        return (value < 10 ? "0" : "") + value;
    }

    return (
        //Here i manually call TimeFormat so () is mandatory 
        <div className="container">
            <p>{TimeFormat()}</p>
        </div>
    )
}

export default DigitalClock;