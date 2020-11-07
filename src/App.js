import React, { PureComponent } from "react";
import { Cardlist } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box";
import './App.css'

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: " ",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="app">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <Cardlist monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
