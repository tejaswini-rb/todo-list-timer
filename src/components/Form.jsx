import React from 'react'
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import * as $ from 'jquery';

const Title = styled.div`
  text-align: center;
  font-size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px 10px;

  background: linear-gradient(to right, #2502d5db, #910170);
  color: whitesmoke;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  text-shadow: 2px 2px grey;

  margin-bottom: 10px;

  border: 1px solid #dddddd;
border-radius: 5px;
`;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    background-color: #fb00ff3c;
    border-radius: 1rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Input = styled.input`
    font-size: 1.2rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 15rem;
`;

const Error = styled.p`
  //font-size: 1rem;
  color: #4a0000;
  margin-top: 1rem;
`;


const Button = styled.button`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #5900ff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #5900ff;
  }
`;

const Form = ({setTimeLeft, setIsPaused}) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const onSubmit = data => {
        console.log(data.minutes);
        $('#pomodoro-form').trigger("reset");
        setTimeLeft(data.minutes*60);
        setIsPaused(false);
    };

    const validateNumber = (value) => {
        if (value <= 0 || value > 120) {
          return "Please enter a number between 1 and 120.";
        }
        return true;
      };

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Container>
            <Title>POMODORO</Title>
            <InputContainer>
              <Input
                type="number"
                name="minutes"
                placeholder="Minutes"
                {...register('minutes', {
                  required:
                    'Enter the minutes you want to study for <3',
                  min: {
                    value: 0.01,
                    message: 'Please enter a number between .01 and 120.',
                  },
                  max: {
                    value: 120,
                    message: 'Please enter a number between .01 and 120.',
                  },
                  validate: validateNumber,
                })}
              />
            </InputContainer>
            {errors.minutes && <Error>{errors.minutes.message}</Error>}
            <Button type="submit">Start</Button>
          </Container>
        </form>
      );
    };
    
export default Form;