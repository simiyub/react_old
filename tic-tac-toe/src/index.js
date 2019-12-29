import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//source https://reactjs.org/tutorial/tutorial.html

function Square(props){

        return(
            <button 
            className="square" 
            onClick = {props.onClick}>
                {props.value}
            </button>
        )
    }

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

class Board extends React.Component{

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         squares:Array(9).fill(null),
    //         xIsNext:true,
    //         noWiner:false
    //     }
    // }



    renderSquare(i){
        return <Square 
                value = {this.props.squares[i]} 
                onClick = { () => this.props.onClick(i)}
                />;
    }

    render(){
        // const next      = 'next player is ' + (this.state.xIsNext ? 'X': 'O');
        // const winner    = calculateWinner(this.state.squares);
        // const status    = winner ? 'The winner is:'+winner : this.state.noWinner? 'No winner': next;  
        
        return (
            <div>
<div className = 'board-row'>
{this.renderSquare(0)}
{this.renderSquare(1)}
{this.renderSquare(2)}
</div>
<div className = 'board-row'>
    {this.renderSquare(3)}
    {this.renderSquare(4)}
    {this.renderSquare(5)}
</div>
<div className = 'board-row'>
    {this.renderSquare(6)}
    {this.renderSquare(7)}
    {this.renderSquare(8)}
</div>
            </div>
        )
    }
}

class Game extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            stepNumber  : 0,
            history     : [{squares:Array(9).fill(null),}],
            xIsNext : true,
        }
    }

    jumpTo(step){
        this.setState({
            stepNumber  : step,
            xIsNext     : (step % 2) === 0,
        })
    }
        
    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        this.setState({
            noWinner: squares[i]
        })
        if(calculateWinner(squares)||this.state.noWinner) return;

        squares[i] = this.state.xIsNext ? 'X':'O';
        this.setState({
            history : history.concat([{squares:squares,}]),
            stepNumber: history.length,
            xIsNext : !this.state.xIsNext,
        })
    }
    render(){
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ? 'Go to move #' + move : 'Goto game start';

            return (
                <li key={move}>
                    <button onClick={ () => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        }
        )
        const winnerStatus      = 'Winner: ' + winner;
        const nextPlayerStatus  = 'Next player:' + (this.state.xIsNext) ? 'X' : 'O';
        let status = winner ? winnerStatus : nextPlayerStatus;

        return (
            <div className = "game">
                <div className = "game-board">
                    <Board
                    squares = {current.squares}
                    onClick = { i => this.handleClick(i)}
                    />
                </div>
                <div className = "game-info">

                    <div>
                        {status}
                    </div>
                    <ol>{moves}</ol>
                </div>

            </div>
        )
    }
}

ReactDOM.render(
    <Game/>, document.getElementById('root')
)