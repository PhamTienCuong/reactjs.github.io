import React from "react";

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    console.log("User Page");
    console.log(this.props.match.params.number);
  }

  render() {
    return (
      <div>
        <h2>User: </h2>
      </div>
    );
  }
}

export default UserPage;