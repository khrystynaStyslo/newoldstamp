import { connect } from 'react-redux';
import { Card } from './Card';
import {
  checked,
  countChecked,
  changeDataChecked,
  deleteUser,
} from '../../store';

function mapStateToProps(state) {
  return {
    isChecked: state.isChecked,
    users: state.users,
  };
}

const mapDispatchToProps = dispatch => ({
  changeDataChecked: (id) => dispatch(changeDataChecked(id)),
  countChecked: () => dispatch(countChecked()),
  checked: () => dispatch(checked()),
  deleteUser: (id) => dispatch(deleteUser(id)),
});

const Enhanced = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);

export {
  Enhanced as Card
};

