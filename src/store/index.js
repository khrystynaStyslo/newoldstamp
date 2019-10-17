import { createStore } from 'redux';
import { users } from '../api/data';

const ACTION_TYPES = {
  CHECKING_BOX: 'CHECKING_BOX',
  CHECKED_ALL: 'CHECKED_ALL',
  UNCHECKED_ALL: 'UNCHECKED_ALL',
  COUNT_ACTIVE_CHECKBOX: 'COUNT_ACTIVE_CHECKBOX',
  CHANGE_DATA_CHECKED: 'CHANGE_DATA_CHECKED',
  DELETE_USER: 'DELETE_USER',
  DELETE_CHECKED_USERS: 'DELETE_CHECKED_USERS',
};

export const countChecked = () => ({
  type: ACTION_TYPES.COUNT_ACTIVE_CHECKBOX,
});

export const checked = () => ({
  type: ACTION_TYPES.CHECKING_BOX,
});

export const changeDataChecked = (id) => ({
  type: ACTION_TYPES.CHANGE_DATA_CHECKED,
  payload: id,
});

export const checkedAll = () => ({
  type: ACTION_TYPES.CHECKED_ALL,
});

export const uncheckedAll = () => ({
  type: ACTION_TYPES.UNCHECKED_ALL,
});

export const deleteUser = (id) => ({
  type: ACTION_TYPES.DELETE_USER,
  payload: id,
});

export const deleteAllUsers = () => ({
  type: ACTION_TYPES.DELETE_CHECKED_USERS,
});

const initialState = {
  users: users,
  isChecked: false,
  countChecked: 0,
};

function reducer(state = initialState, action = {}) {
  switch(action.type) {
    case ACTION_TYPES.CHANGE_DATA_CHECKED: {
      return {
        ...state,
        users: [...state.users].map(user => (
          user.id === action.payload
            ? { ...user, checked: !user.checked }
            : { ...user }
        )),
      }
    }
    case ACTION_TYPES.COUNT_ACTIVE_CHECKBOX: {
      return {
        ...state,
        countChecked: state.users.filter(elem => elem.checked).length,
        isChecked: state.countChecked ? state.isChecked : !state.isChecked,
      }
    }
    case ACTION_TYPES.CHECKING_BOX: {
      return {
        ...state,
        isChecked: state.countChecked ? state.isChecked : !state.isChecked,
      }
    }
    case ACTION_TYPES.CHECKED_ALL: {
      return {
        ...state,
        users: state.users.every(user => user.checked)
          || state.users.every(user => user.checked)
          ? [...state.users].map(user => (
            { ...user, checked: !user.checked }))
          : [...state.users].map(user => (
            { ...user, checked: true })),
      }
    }
    case ACTION_TYPES.UNCHECKED_ALL: {
      return {
        ...state,
        isChecked: false,
        users: [...state.users].map(user => (
          { ...user, checked: false }
        ))
      }
    }
    case ACTION_TYPES.DELETE_USER: {
      return {
        ...state,
        users: [...state.users].filter(user => user.id !== action.payload),
      }
    }
    case ACTION_TYPES.DELETE_CHECKED_USERS: {
      return {
        ...state,
        users: state.users.filter(user => !user.checked),
        isChecked: false,
        countChecked: 0,
      }
    }
    default:
      return state;
  }
}

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
