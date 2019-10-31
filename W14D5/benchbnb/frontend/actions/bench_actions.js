import * as BenchUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES'

export const fetchBenches = () => (dispatch) => {
  return (
    BenchUtil.fetchBenches().then(
      benches => dispatch(receiveBenches(benches))
    )
  )
};

export const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches
});