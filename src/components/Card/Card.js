import React from "react";
import cx from 'classnames'
import "./Card.scss";


export class Card extends React.Component {
  render() {
    const {
      user,
      checked,
      isChecked,
      countChecked,
      changeDataChecked,
      deleteUser,
    } = this.props;

    const {
      facebook,
      twitter,
      linkedin,
      instagram
    } = this.props.user.socialMedia;

    const cardStyle = cx({
      'card__hover': !isChecked,
      'card__hover is-active': isChecked,
    });

    return (
      <div className="card">
        <div className="card__default">
          <img src={user.image} alt={user.name} />
          <div className="user-info">
            <h3 className="username">{user.name}</h3>
            <h6 className="position">{user.position}</h6>
            <p>
              <i className="fas fa-phone" />
              {user.phone}
            </p>
            <p>
              <i className="fas fa-mobile-alt" />
              {user.mobile}
            </p>
            <p>
              <i className="fas fa-envelope" />
              {user.email}
            </p>
            <p>
              <i className="fas fa-home" />
              {user.address}
            </p>
            {user.site && (
              <p>
                <i className="fas fa-globe-americas" />
                <a href={user.site}>{user.site}</a>
              </p>
            )}
          </div>
          <div className="social-media">
            <i className="fab fa-facebook-square" >
              <a href={facebook} />
            </i>
            <i className="fab fa-twitter-square">
              <a href={twitter} />
            </i>
            <i className="fab fa-linkedin">
              <a href={linkedin} />
            </i>
            {instagram && (
              <i className="fab fa-instagram">
                <a href={instagram} />
              </i>
            )}
          </div>
        </div>
        <div className={cardStyle}>
          <input
            type="checkbox"
            className="checkbox"
            checked={user.checked}
            onChange={() => (
            changeDataChecked(user.id) && countChecked() && checked()
          )}/>
          {!isChecked && (
            <>
              <div className="card-info">
                <h4>Sent by admin: {user.sentByAdmin}</h4>
                <h4>Installed by user: {user.installedByUser}</h4>
                <h4>Last edited: {user.lastEdited}</h4>
              </div>
              <div className="card-nav">
                <a href="https://newoldstamp.com/" target="_blank" className="btn btn-use">Use</a>
                <div className="card-nav-icons">
                  <i className="fas fa-pencil-alt" />
                  <i className="fas fa-eye" />
                  <i className="far fa-trash-alt" onClick={() => deleteUser(user.id)} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
};
