import React, { Component } from "react";
import "../styles/navigation.css";
import Navbar from "./Navbar";
export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapseSideBar: true,
    };
  }
  toggleSideNav() {
    let condition = this.state.collapseSideBar ? false : true;
    this.setState({ collapseSideBar: condition });
  }
  render() {
    let collapseSideBar = this.state.collapseSideBar ? "collapsable" : "null";
    return (
      <div className={`wrapper ${collapseSideBar} d-block`}>
        <div className="top_navbar float-right">
          <Navbar />
        </div>

        <div class="sidebar">
          <ul>
            <li>
              <a href="#">
                <span class="icon">
                  <i class="fas fa-book"></i>
                </span>
                <span class="title">Books</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <i class="fas fa-file-video"></i>
                </span>
                <span class="title">Movies</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <i class="fas fa-volleyball-ball"></i>
                </span>
                <span class="title">Sports</span>
              </a>
            </li>
            <li>
              <a href="#" class="active">
                <span class="icon">
                  <i class="fas fa-blog"></i>
                </span>
                <span class="title">Blogs</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <i class="fas fa-leaf"></i>
                </span>
                <span class="title">Nature</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="main_container">
          <div class="item">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            sapiente adipisci nemo atque eligendi reprehenderit minima
            blanditiis eum quae aspernatur!
          </div>
          <div class="item">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            sapiente adipisci nemo atque eligendi reprehenderit minima
            blanditiis eum quae aspernatur!
          </div>
          <div class="item">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            sapiente adipisci nemo atque eligendi reprehenderit minima
            blanditiis eum quae aspernatur!
          </div>
          <div class="item">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            sapiente adipisci nemo atque eligendi reprehenderit minima
            blanditiis eum quae aspernatur!
          </div>
        </div>
      </div>
    );
  }
}
