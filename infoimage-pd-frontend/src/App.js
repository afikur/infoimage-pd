import React from "react";
import "./App.css";
import { getMember } from "./services/member";
import Member from "./component/Member";
import Header from "./component/Header";

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
        <Header circleLength={this.state.members.length} />
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
