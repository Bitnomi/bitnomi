import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import "./NavMenu.css";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { Button, Menu, Icon, Dropdown } from "antd";
//const SubMenu = Menu.SubMenu;
//const MenuItemGroup = Menu.ItemGroup;

export class NavMenu extends Component {
  //   render() {
  //   return (
  //   <Navbar fixedTop fluid collapseOnSelect>
  //     <Navbar.Header>
  //       <Navbar.Brand>
  //         <Link to={'/'}>devscore</Link>
  //       </Navbar.Brand>
  //       <Navbar.Toggle />
  //     </Navbar.Header>
  //     <Navbar.Collapse>
  //       <Nav>
  //         <LinkContainer to={'/'} exact>
  //           <NavItem>
  //             <Glyphicon glyph='home' /> Home
  //           </NavItem>
  //         </LinkContainer>
  //         <LinkContainer to={'/counter'}>
  //           <NavItem>
  //             <Glyphicon glyph='education' /> Counter
  //           </NavItem>
  //         </LinkContainer>
  //         <LinkContainer to={'/fetchdata'}>
  //           <NavItem>
  //             <Glyphicon glyph='th-list' /> Fetch data
  //           </NavItem>
  //         </LinkContainer>
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Navbar>
  //    )
  //   }
  // }
  state = {
    current: "home"
  };

  handleClick = e => {
    console.log("click", e);
    this.setState({
      current: e.key
    });
    return <LinkContainer to={`/${this.state.current}`} />;
  };

  handleMenuClick = e => {
    console.log("click", e);
  };

  displayName = NavMenu.name;

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-primary Navbarstyle">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/">Bitonami</Link>
          </li>

          <li className="nav-item">
            <Link to="/counter">Market</Link>
          </li>

          <li className="nav-item">
            <Link to="/post-trade">Create an ad</Link>
          </li>
        </ul>
        <ul className="nav ml-auto">
          <li>
            <div className="nav-item dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Chinese
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <a class="dropdown-item" href="#!">
                  English
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="nav-item">
              <Link to="/userprofile">
                <button className="btn btn-primary">Login</button>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}
