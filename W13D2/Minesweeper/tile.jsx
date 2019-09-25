import React from 'react';
import { toUnicode } from 'punycode';

export class Tile extends React.Component {
  constructor(props) {
    const { tile, update } = props;
    super(props);

    this.state = {
      bombed: tile.bombed,
      flagged: tile.flagged,
      explored: tile.explored
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let clickType;
    if (e.altKey) {
      this.setState({ flagged: !this.state.flagged });
      clickType = true;
    } else {
      this.setState({ explored: true });
      clickType = false;
    }
    this.props.update(this.props.tile, clickType);
  }

  componentDidMount() {

  }

  render() {
    let square;
    let tileType;
    if (this.state.explored && this.state.bombed) {
      square = <>{"\u2600"}</>;
      tileType = 'bombed';
    } else if (this.state.explored && !this.state.bombed) {
      square = this.props.tile.adjacentBombCount();
      tileType = 'blank';
    } else if (this.state.flagged) {
      square = <>{"\u2691"}</>; 
      tileType = 'flagged';
    } else {
      square = " ";
      tileType = 'hidden';
    }
    
  
    return (
      <div className={`tile ${tileType}`} onClick={(e) => this.handleClick(e)}>
        {square}
      </div>
    )
  }
}