import { useEffect, useRef, useState } from "react";
import "./StopWatch.css";

function StopWatch() {
    const [isRunning, setIsRunning] = useState(false); // now clock is not run yet
    const [elapsedTime, setElapsedTime] = useState(0);

    const intervalIdRef = useRef(null); // don't use [] for define REF
    const startTimeRef = useRef(0);

    //when every renders
    useEffect(() => {

        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }
        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning])

    //start a clock
    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    //stop a clock
    function stop() {
        setIsRunning(false);
    }

    //reset a clock 
    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    //format Time
    function FormatTime() {

        let hour = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minute = Math.floor(elapsedTime / (1000 * 60) % 60);
        let second = Math.floor(elapsedTime / (1000) % 60);
        let millisecond = Math.floor(elapsedTime % (1000) / 10);

        hour = String(hour).padStart(2, "0");
        minute = String(minute).padStart(2, "0");
        second = String(second).padStart(2, "0");
        millisecond = String(millisecond).padStart(2, "0");

        return `${hour} : ${minute} : ${second} : ${millisecond}`

    }

    return (
        <div className="containers">
            <div className="card">
                <div className="time">
                    <p>{FormatTime()}</p>
                </div>
                <div className="buttons">
                    <button className="start" onClick={start}>Start</button>
                    <button className="stop" onClick={stop}>Stop</button>
                    <button className="reset" onClick={reset}>reset</button>
                </div>
            </div>
        </div>
    )
}

export default StopWatch;