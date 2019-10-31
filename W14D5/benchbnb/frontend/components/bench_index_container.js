import { connect } from 'react-redux';
import { fetchBenches } from '../actions/bench_actions'
import BenchIndex from './bench_index';

const mapStateToProps = state => {
  let benches;
  console.log("mapStateToProps.state", state)
  // undefined is not an object so therefore has no properties
  // this means we have to check undefined at every level
  if (state && state.entities && state.entities.benches){ 
    benches = Object.values(state.entities.benches);
  }
  return ({ 
    benches: benches 
  })
};

const mapDispatchToProps = dispatch => {
  return { 
    fetchBenches: () => dispatch(fetchBenches()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);