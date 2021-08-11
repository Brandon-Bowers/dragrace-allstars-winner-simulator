import { reset } from "nodemon";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fetchedQueens: false,
      dragQueens: [],
    };
  }

  componentDidMount() {
    fetch("/api")
      .then((res) => res.json())
      .then((dragQueens) => {
        console.log("component did mount drag queens", dragQueens);
        if (!Array.isArray(dragQueens)) dragQueens = [];
        return this.setState({
          fetchedQueens: true,
          dragQueens,
        });
      })
      .catch((err) =>
        console.log("Error in the drag queens component did mount", err)
      );
  }

  render() {
    return (
      <div>
        <h5>It is working!</h5>
      </div>
    );
  }
}

export default App;
