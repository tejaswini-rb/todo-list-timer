import React, {useState} from 'react';
import Form from './components/Form';
import Timer from './components/Timer';
import Finished from './components/Finished';
import styled from 'styled-components';
import backgroundImage from './wallpapers/forest.jpeg';


const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const styles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100vh'
};

function App() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  return (
    <div style={styles}>
      <Form setTimeLeft={setTimeLeft} setIsPaused={setIsPaused}/>
      {timeLeft<0?
        <AppWrapper>
        <Finished setTimeLeft={setTimeLeft} setIsPaused={setIsPaused}/>
        </AppWrapper>:
        
        <AppWrapper>
        <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} 
        isPaused={isPaused} setIsPaused={setIsPaused}/>
        </AppWrapper>
      }
    </div>
  );
}

export default App;