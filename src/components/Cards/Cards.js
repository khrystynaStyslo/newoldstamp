import React from 'react';
import './Cards.scss'
import { Card } from '../Card';
import { store } from '../../store';

export class Cards extends React.Component {
  state = {
    users: store.getState().users,
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState({
      users: store.getState().users,
    }));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="users-list">
        {this.state.users.map(user => (
          <Card user={user} key={user.id}/>
        ))}
      </div>
    )
  }
};
