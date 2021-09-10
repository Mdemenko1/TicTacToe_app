import React, { Component } from 'react';
import Header from './Header'
import Info from './Info'
import Board from './Board'


class Game extends Component {

  constructor() {
    super();
    this.state = {
      start: false,
      startGame: false,
      turn: 0,
      isPlaying: false,
      value: 0
    }
  }

  changeStart = () => {
    this.setState({
      start: true
    })
  }

  handleStartGame = () => {

    if (Math.random() > 0.5) {
      this.setState({
        turn: 1
      })

    }
    else {
      this.setState({
        turn: 2
      })

    }

    this.setState({
      startGame: true,
      start: false,
    })
    console.log(this.state.turn)
    this.changeIsPlaying();
  }
  changeTurn = (turn) => {
    if (turn == 1)
      this.setState({
        turn: 2
      })
    else
      this.setState({
        turn: 1
      })
  }

  changeIsPlaying = () => {
    this.setState({
      isPlaying: true
    });
  }

  handleSetPlayerName = (playerX_name, playerO_name) => {
    this.setState({
      playerX_name,
      playerX_id: 1,
      playerO_name,
      playerO_id: 2,

    })
  }


  render() {
    return (
      <div>
        <Header
          title="TIC TAC TOE"
          start={this.state.start}
          changeStart={this.changeStart}
        />

        <Info
          start={this.state.start}
          startGame={this.handleStartGame}

          setPlayerName={this.handleSetPlayerName.bind(this)}



        />
        <Board
          start={this.state.start}
          startGame={this.state.startGame}
          playerX_name={this.state.playerX_name}
          playerO_name={this.state.playerO_name}

          // value={this.state.value}
          turn={this.state.turn}
          changeTurn={this.changeTurn}

        />


      </div>
    );
  }
}

export default Game;
