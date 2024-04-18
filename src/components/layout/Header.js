import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link, withRouter } from "react-router-dom";
import Logo from "./partials/Logo";
import { Menu, MenuItem } from "@mui/material";

const propTypes = {
  active: PropTypes.bool,
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
};

const defaultProps = {
  active: false,
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

class Header extends React.Component {
  state = {
    isActive: false,
  };

  nav = React.createRef();
  hamburger = React.createRef();

  componentDidMount() {
    this.props.active && this.openMenu();
    document.addEventListener("keydown", this.keyPress);
    document.addEventListener("click", this.clickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPress);
    document.addEventListener("click", this.clickOutside);
    this.closeMenu();
  }

  openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    this.nav.current.style.maxHeight = this.nav.current.scrollHeight + "px";
    this.setState({ isActive: true });
  };

  closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    this.nav.current && (this.nav.current.style.maxHeight = null);
    this.setState({ isActive: false });
  };

  openMenuSub = (name, anchor) => {
    this.setState({ [name]: anchor });
  };

  closeMenuSub = (name) => {
    this.setState({ [name]: false });
  };

  keyPress = (e) => {
    this.state.isActive && e.keyCode === 27 && this.closeMenu();
  };

  clickOutside = (e) => {
    if (!this.nav.current) return;
    if (
      !this.state.isActive ||
      this.nav.current.contains(e.target) ||
      e.target === this.hamburger.current
    )
      return;
    this.closeMenu();
  };

  render() {
    const {
      className,
      active,
      navPosition,
      hideNav,
      hideSignin,
      bottomOuterDivider,
      bottomDivider,
      location,
      ...props
    } = this.props;
    const currentPath = (location.pathname || "").replace("/", "");
    const classes = classNames(
      "site-header invert-color",
      bottomOuterDivider && "has-bottom-divider",
      className
    );

    return (
      <header {...props} className={classes}>
        <div className="container">
          <div
            className={classNames(
              "site-header-inner",
              bottomDivider && "has-bottom-divider"
            )}
          >
            {/*<Logo />*/}
            {!hideNav && (
              <React.Fragment>
                <button
                  ref={this.hamburger}
                  className="header-nav-toggle"
                  onClick={this.state.isActive ? this.closeMenu : this.openMenu}
                >
                  <span className="screen-reader">Menu</span>
                  <span className="hamburger">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
                <nav
                  ref={this.nav}
                  className={classNames(
                    "header-nav",
                    this.state.isActive && "is-active"
                  )}
                >
                  <div className="header-nav-inner">
                    <ul
                      className={classNames(
                        "list-reset text-xxs",
                        navPosition && `header-nav-${navPosition}`
                      )}
                    >
                      <li>
                        <Link
                          className={
                            currentPath === "" || currentPath === "home"
                              ? "button"
                              : "offbutton"
                          }
                          to="/"
                          onClick={this.closeMenu}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            currentPath === "call-for-paper"
                              ? "button"
                              : "offbutton"
                          }
                          to="/call-for-paper"
                          onClick={this.closeMenu}
                        >
                          Call for paper
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            currentPath === "chairs-committees"
                              ? "button"
                              : "offbutton"
                          }
                          to="/chairs-committees"
                          onClick={this.closeMenu}
                        >
                          COMMITTEES
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            currentPath === "programme" ? "button" : "offbutton"
                          }
                          to="/programme"
                          onClick={this.closeMenu}
                        >
                          Program
                        </Link>
                      </li>
                      {/*<li>*/}
                      {/*  <Link to="/workshops" onClick={this.closeMenu}>Workshops</Link>*/}
                      {/*</li>*/}
                      {/*<li>*/}
                      {/*  <Link to="/poster" onClick={this.closeMenu}>Call for poster</Link>*/}
                      {/*</li>*/}
                      <li>
                        <Link
                          className={
                            currentPath === "plenary-speakers"
                              ? "button"
                              : "offbutton"
                          }
                          to="/plenary-speakers"
                          onClick={this.closeMenu}
                        >
                          Plenary Speakers
                        </Link>
                      </li>
                      {/*<li>*/}
                      {/*  <Link to="/travel-award" onClick={this.closeMenu}>Travel Award</Link>*/}
                      {/*</li>*/}
                      {/*<li>*/}
                      {/*  <Link to="/doctoral-symposium" onClick={this.closeMenu}>DOCTORAL SYMPOSIUM</Link>*/}
                      {/*</li>*/}
                      <li>
                        <Link
                          className={
                            currentPath === "venue" ? "button" : "offbutton"
                          }
                          to="/venue"
                          onClick={this.closeMenu}
                        >
                          Venue & Hotel
                        </Link>
                      </li>
                      <li>
                        <a
                          className={"offbutton"}
                          href="#"
                          onClick={(event) =>
                            this.openMenuSub("previousc", event.currentTarget)
                          }
                        >
                          Previous
                        </a>
                        <Menu
                          id="basic-menu"
                          anchorEl={this.state.previousc}
                          open={this.state.previousc}
                          onClose={() => this.closeMenuSub("previousc")}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                            dense: true,
                          }}
                        >
                          <MenuItem
                            onClick={() => this.closeMenuSub("previousc")}
                            target="_blank"
                            href="https://phys.hcmus.edu.vn/ICEBA2023"
                            component="a"
                          >
                            2023
                          </MenuItem>
                        </Menu>
                      </li>
                    </ul>
                    {!hideSignin && (
                      <ul
                        className="list-reset header-nav-center"
                        style={{ display: "flex" }}
                      >
                        <li>
                          {/*<Link to="/signup/" className="button button-primary button-wide-mobile button-sm" onClick={this.closeMenu}>Registration</Link>*/}
                          {/*<a target="_blank" href="https://shop.le.ac.uk/conferences-and-events/leicester-conferences/uccbdcat/14th-ieeeacm-international-conference-ucc-2021-8th-ieeeacm-international-conference-bdcat-2021" className="button button-primary button-wide-mobile button-sm" onClick={this.closeMenu}>Registration</a>*/}
                          <Link
                            to="/registration"
                            onClick={this.closeMenu}
                            className="button button-secondary button-wide-mobile button-sm"
                          >
                            Registration
                          </Link>
                          {/*<a target="_blank" href="https://cvent.me/q3vlYw" className="button button-primary button-wide-mobile button-sm">Registration</a>*/}
                        </li>
                      </ul>
                    )}
                  </div>
                </nav>
              </React.Fragment>
            )}
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default withRouter(Header);
