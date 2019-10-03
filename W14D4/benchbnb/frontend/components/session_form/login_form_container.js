import { login } from '../../actions/session_actions';
import {connect} from 'react-redux';

const mapStateToProps = (state = {}, ownProps) => ({
  errors: Object.values(state.errors),
  formType: 'login'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: () => dispatch(login(ownProps.match.params.user))
});

