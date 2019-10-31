import React from 'react'
import BenchIndexItem from './bench_index_item';


class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   bench_items: ""
    // }

  }



  componentDidMount() {
    this.props.fetchBenches();
      // .then( ()=> {
      //   this.setState({
      //     bench_items: this.props.benches
      //   });
      // });
  }

  render() {
    let benches;

    if (this.props.benches) {
      benches = this.props.benches.map(
        bench => {
          return (
            <BenchIndexItem
              key={bench.id}
              description={bench.description}
              lat={bench.lat}
              lng={bench.lng}
            />
          )
        }
      );
    }

    else {
      console.log("PROPS BITCHES", this.props);
      benches = <p>Loading Benches...</p>
    }

    return (
      <div>
        <ul>
          {benches}
        </ul>
      </div>
    )
  }

}

export default BenchIndex;