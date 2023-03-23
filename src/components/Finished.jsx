import React, {useEffect} from 'react'
import Confetti from 'react-confetti'
import useSound from 'use-sound'
import styled from 'styled-components'

import YAY from '../sound/YAY.mp3'

const Text = styled.h1`
    //margin: 20px 100px;
    font-family: Helvetica, sans-serif;
    font-weight: bold;
    color: #333333;
    margin-bottom: 10px;
`

const Text2 = styled.h3`
    //margin: 20px 100px;
    font-family: Helvetica, sans-serif;
    color: #333333;
    margin-bottom: 20px;
`

const Container1 = styled.div`
    margin-bottom: 20px;
`;

const Button = styled.button`
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

const Finished = ({setTimeLeft, setIsPaused}) => {
    let width=window.innerWidth;

    const [play] = useSound(YAY, { volume: .25 });

    useEffect(()=>{
        play();
    }, [play])

    return (
        <div align='center'>
            <TimerWrapper>
                <Container1>
                <Confetti width={width}/>
                <Text>Congratulations!</Text>
                <Text2>Time to take a break {"❤︎"}</Text2>
                </Container1>
                <Button onClick={()=>{
                    setTimeLeft(0);
                    setIsPaused(true);
                }}>Reset</Button>
            </TimerWrapper>
        </div>
    )
}

export default Finished