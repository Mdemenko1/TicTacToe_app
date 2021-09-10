import React, { Component } from 'react';
import Icon1 from '../images/1.png';
import Icon0 from '../images/0.png';
import Cell from './Cell';


class Board extends Component {
  constructor() {
    super();
    this.state = {
      board: [0, 0, 0, 0, 0, 0, 0, 0, 0]

    }
  }

  // evaluateBoard = () => {
  //   let cells = document.querySelectorAll(".cell")
  //   console.log(cells)
  // }

  createBoard = () => {
    const board = [];
    // let cellValue = 0;
    let counter = 1;
    let counterDiv = 1;
    for (var x = 0; x < 3; x++) {
      let row = []
      for (var y = 0; y < 3; y++) {
        row.push(<Cell
          // value={this.props.value} 
          key={counter}
          // updateBoard={this.evaluateBoard}
          turn={this.props.turn}
          changeTurn={this.props.changeTurn} />)
        counter++;
      }
      board.push(<div key={counterDiv} className="row">{row}</div>)
      counterDiv++;
    }
    console.log(board)
    console.log(this.state.board)
    return board

  }


  showTurn = () => {
    let showTurnContent;
    if (this.props.turn == 1) {
      showTurnContent = this.props.playerX_name
    }
    else {
      showTurnContent = this.props.playerO_name
    }
    return showTurnContent
  }

  render() {
    if (this.props.startGame) {

      return (
        <div>
          <div className="together">
            <p><img src={Icon1} alt="Icon1" className="icon" />{this.props.playerX_name}</p>
            <p className="niceFont">Now Playing :{this.showTurn()}</p>
            <p><img src={Icon0} alt="Icon0" className="icon" />{this.props.playerO_name}</p>
          </div>
          <div className="board"> {this.createBoard()}
          </div>
          <div className="together">
            <button className="btn btn-dark niceFont" > New Game </button>
            <button className="btn btn-dark niceFont" > Reset </button>
          </div>

        </div>)
    }
    else {
      return (<div className="center">
      </div>);
    }
  }
}

export default Board;
