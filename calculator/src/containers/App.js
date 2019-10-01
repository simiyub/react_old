import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header';

const buttonStyle = {
  margin: '10px 10px 10px 0'
}
const button_1 = function Button_1(){
  return(
    <button 
    className = "button_1"
    style = {buttonStyle}
    //onClick = https://subscription.packtpub.com/book/web_development/9781783551620/7/ch07lvl1sec44/creating-the-button-component
    ></button>
  )
} 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        The Calculator.
      </header>
    <Header/>
    </div>
  );
}

export default App;
