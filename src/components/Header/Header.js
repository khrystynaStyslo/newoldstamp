import React from 'react';
import './Header.scss';
import { store } from '../../store';

export class Header extends React.Component {
  state = {
    isChecked: store.getState().isChecked,
    users: store.getState().users,
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState({
      isChecked: store.getState().isChecked,
      users: store.getState().users,
    }));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const { isChecked, users } = this.state;
    const {
      checkedAll,
      uncheckedAll,
      deleteAllUsers,
      countChecked,
      checked
    } = this.props;
    return (
      <div className="header">
        {!isChecked && (
          <div className="header-main">
            <h3>Signature list</h3>
            <a
              href="https://newoldstamp.com/"
              target="_blank"
              className="btn btn-create"
            >
              Create signature
            </a>
          </div>
        )}
        {isChecked && (
          <div className="header-checked">
            <input
              type="checkbox"
              className="checkbox checkbox-header"
              onClick={() => (
                checkedAll() && countChecked() && checked()
              )}
              checked={users.every(user => user.checked)}/>
            <div className="menu-item" onClick={() => (
              uncheckedAll() && countChecked()
            )}>
              <p>
                Selected (
                {store.getState().users.filter(elem => elem.checked).length})
              </p>
              <i className="fas fa-times" />
            </div>
            <div className="menu-item menu-item__blue" onClick={() => deleteAllUsers()}>
              <p>Delete</p>
              <i className="far fa-trash-alt" />
            </div>
          </div>
        )}
      </div>
    );
  }
}
