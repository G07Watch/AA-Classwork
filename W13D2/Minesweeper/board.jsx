import React from "react";
import { Tile } from "./tile.jsx";

class Board extends React.Component {
  constructor(props) {  // board={this.state.board}   game = { this.updateGame }
    super(props);
  }

  render() {
    const grid = this.props.board.grid;
    const update = this.props.game;
    const board =
      grid.map((row, rowIdx) => {
        return (
          <div className="row" key={rowIdx}>
            {row.map((tile, tileIdx) => {
              return (
                <Tile tile={tile} update={update} key={tileIdx} />
              )
            })}
          </div>
        )
      });
    return (
      <div>
        {board}
      </div>
    )
  }

}

export default Board;
