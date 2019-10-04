import { connect } from 'react-redux';
import { fetchBenches } from '../actions/bench_actions'
import BenchIndex from './bench_index';

const mapStateToProps = state => {
  debugger
  let benches;
  if (state.entities.benches) benches = state.entities.benches.values;
  else benches = {};
  return { benches: benches }
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