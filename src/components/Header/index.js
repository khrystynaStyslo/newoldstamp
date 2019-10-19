import { connect } from 'react-redux';
import { Header } from '../Header/Header';
import { checkedAll, uncheckedAll, deleteAllUsers, countChecked, checked, } from '../../store';

function mapStateToProps(state) {
  return {
    users: state.users,
    isChecked: state.isChecked,
  };
}

const mapDispatchToProps = dispatch => ({
  checkedAll: () => dispatch(checkedAll()),
  uncheckedAll: () => dispatch(uncheckedAll()),
  deleteAllUsers: () => dispatch(deleteAllUsers()),
  countChecked: () => dispatch(countChecked()),
  checked: () => dispatch(checked()),
});

const Enhanced = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export {
  Enhanced as Header
};
