import React from "react";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    console.log("Home Page");
  }
  render() {
    return (
      <div>
        <h2>Here's a list of users: </h2>
      </div>
    );
  }
}

export default Home;