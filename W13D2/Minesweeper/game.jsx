import React from 'react';
import * as Minesweeper from './minesweeper';
import Board from './board';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      board: new Minesweeper.Board(10, 5)
    }
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, clickType) {

    if (clickType) tile.toggleFlag();
    else tile.explore();
    this.setState({ board: this.state.board })

  }

  render() {


    return (
      <div className="board">
        <Board
          board={this.state.board}
          game={this.updateGame}
        />
      </div >
    )
  }
}

export default Game;

