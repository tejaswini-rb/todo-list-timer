import React, { useState } from 'react';
import Form from './components/Form';
import Timer from './components/Timer';
import Finished from './components/Finished';
import TodoList from './components/TodoList';
import styled from 'styled-components';
import backgroundImage from './wallpapers/forest.jpeg';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const styles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: -30rem;
`;

function App() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  return (
    <div style={styles}>
      <Form setTimeLeft={setTimeLeft} setIsPaused={setIsPaused} />

      {timeLeft < 0 ? (
        <AppWrapper>
          <Finished setTimeLeft={setTimeLeft} setIsPaused={setIsPaused} />
        </AppWrapper>
      ) : (
        <AppWrapper>
          <Timer
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
            isPaused={isPaused}
            setIsPaused={setIsPaused}
          />
          <Container>
            <TodoList />
          </Container>
        </AppWrapper>
      )}
    </div>
  );
}

export default App;
