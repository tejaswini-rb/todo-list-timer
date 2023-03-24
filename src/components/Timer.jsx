import React,  {useEffect, useRef} from 'react';
import styled from 'styled-components';

const Container1 = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const Container2 = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    flex-direction: column;
`;

const Container3 = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 65px;
    flex-direction: column;
`;

const TimeValue = styled.span`
  font-size: 100px;
  font-weight: bold;
  color: #333333;
`;

const ResetButton = styled.button`
  font-size: 20px;
  color: #ffffff;
  background-color: #333333;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const TimerWrapper = styled.div`
    background-color: #ffffff42;
    border: 1px solid #dddddd;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    width: 400px;
    height: 233px;
    padding: 20px;
    margin-bottom: 60vh;
`;

const TimeLabel = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #666666;
  margin-top: 5px;
`;

const Timer = ({timeLeft, setTimeLeft, isPaused, setIsPaused}) => {
    //TIMELEFT IS IN SECONDS
    let minutes = Math.floor(timeLeft/60);
    let seconds = Math.floor(timeLeft-60*minutes);

    let intervalRef = useRef();

    useEffect(()=>{
        const id = setInterval(()=>{
            {isPaused?
                clearInterval(intervalRef.current):
                setTimeLeft(timeLeft-1)
            }
        }, 1000)
        intervalRef.current=id;
        return () => clearInterval(intervalRef.current);
    });

    return (
        <TimerWrapper>
            <Container1>
                <Container2>
                <TimeValue>{minutes.toString().padStart(2, '0')}</TimeValue>
                <TimeLabel>Minutes</TimeLabel>
                </Container2>
                <Container3>
                <TimeValue>:</TimeValue>
                </Container3>
                <Container2>
                <TimeValue>{seconds.toString().padStart(2, '0')}</TimeValue>
                <TimeLabel>Seconds</TimeLabel>
                </Container2>
            </Container1>
            <ResetButton onClick={()=>{
                    setTimeLeft(0);
                    setIsPaused(true);
                }}>Reset
            </ResetButton>
        </TimerWrapper>
    )
}

export default Timer