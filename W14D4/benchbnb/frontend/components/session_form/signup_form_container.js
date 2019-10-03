import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state = {}, ownProps) => ({
  errors: Object.values(state.errors),
  formType: 'signup'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: () => dispatch(signup(ownProps.match.params.user))
});



