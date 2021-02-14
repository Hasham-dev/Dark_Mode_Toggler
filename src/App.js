import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './theme'
import Switch from '@material-ui/core/Switch';

const StyleApp = styled.div`
  color: ${props => props.theme.fontColor};
  margin: 0 auto;
  display: flex;
  align-items:center;
  width: 350px;
  background-color: ${props => props.theme.backgroundColor};
  margin-top: 100px;
  padding: 20px 0px;
  border: 0px solid #fff;
  border-radius: 4px;
  flex-direction: column;
`

const TimeComponent = styled.div`
font-weight: 500;
font-size: 60px;
font-family: Arial, Helvetica, sans-serif;
margin: 20px 0px 40px 0px;
text-align: center;
`

const InputComponent = styled.div`
width: 80%;
height: 40px;
margin: 10px 0px;
background-color: #58acf5;
border-radius: 5px;

`
const Input = styled(InputComponent)`
height: 70px;
background-color: ${props => props.theme.inputColor};
`
const Text = styled(StyleApp)`
  color: ${props => props.theme.fontColor};
  margin: 10px auto;
  padding: 10px 0px;
  font-weight: 500;

`
function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyleApp >
      <Switch onClick={themeToggler} color="primary"/>
        <TimeComponent>
          9:14
        </TimeComponent>
        <Input />
        <Input />
        <InputComponent />
      </StyleApp>
        <Text>
          Made by Hasham Vakani
        </Text>
    </ThemeProvider>
  );
}

export default App;
