import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { logOutUser } from '../../Actions/authAction';
// import { clearCurrentProfile } from '../../Actions/profileActions';

class Navbar extends Component {
  onLogout(e) {
    e.preventDefault();
    // this.props.clearCurrentProfile();
    // this.props.logOutUser();
  }

  render() {
    // const { isAuthenticated, user } = this.props.auth;

    // const authLinks = (
    //   <ul className="navbar-nav ml-auto">
    //   <li className="nav-item">
    //       <Link className="nav-link" >
    //         Post Feed
    //       </Link>
    //     </li>
    //   <li className="nav-item">
    //       <Link className="nav-link">
    //         Dashboard
    //       </Link>
    //     </li>

    //     <li className="nav-item">
    //       <a href='#' className="nav-link">
    //         <img
    //           src={user.avatar}
    //           alt={user.name}
    //           style={{ width: '25px', marginRight: '5px' }}
    //           className="rounded-circle"
    //         />{' '}
    //         Logout
    //       </a>
    //     </li>
    //   </ul>
    // );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            YSBLOG
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" >
                  {' '}
                  Developers
                </Link>
              </li>
            </ul>
            {/* {isAuthenticated ? authLinks : guestLinks} */}
          </div>
        </div>
      </nav>
    );
  }
}

// Navbar.propTypes = {
//   logOutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
// });
export default Navbar;
// export default connect(
//   mapStateToProps,
//   { logOutUser, clearCurrentProfile }
// )(Navbar);
