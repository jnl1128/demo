import React, { Component } from 'react';
import "./element.css";
import "./board.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className = "a"></div>
        <div className = "b"></div>
        <div className = "c"></div>
        <div className = "d"></div>
        <div className = "e"></div>
        <div className = "f"></div>
        <div className = "g"></div>
        <div className = "h"></div>
        <div className = "add_post"></div>
        <div className = "consult"></div>

        <div className = "notice_board"></div>
        <div className = "zoom_board"></div>
        <div className = "chat_board"></div>
        <div className = "attending_board"></div>
        <div className = "qanda_board"></div>
        <div className = "memo_board"></div>
      </div>

    )
  }
}

export default App;
