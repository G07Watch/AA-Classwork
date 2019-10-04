import React from 'react'
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    // debugger
    this.props.fetchBenches();
  }

  render() {
    let benches;

    if (this.props.benches) {
      benches = this.props.benches.values.map(
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

    else benches = <p>Loading Benches...</p>

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