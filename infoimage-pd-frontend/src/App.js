import React from "react";
import "./App.css";
import { getMember } from "./services/member";
import Member from "./component/Member";

class App extends React.Component {
  constructor() {
    super();
    this.state = { members: [] };
  }

  async componentDidMount() {
    const members = await getMember();
    console.log(members);
    this.setState({ members });
  }

  render() {
    return (
      <div className="App">
        <header>
          <p>InfoImage PD</p>
          <h1>Meet Who Are Behind The Scenes</h1>
          <ul className="circle"></ul>
        </header>

        <section className="team-members">
          <div className="container">
            {this.state.members.map(member => (
              <Member key={member.id} {...member} />
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
