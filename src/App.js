import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { products } from "./JSONs/products";
// import { users } from "./JSONs/users";
// import { unicons } from "./JSONs/unicons";

import { SearchBox } from "./components/search-box/search-box.component";
import { Selector } from "./components/search-type/search-type.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: products,
      searchField: "",
      searchParameters: "name",
      optionAttributes: [
        {
          key: "0",
          value: "name",
          name: "Name",
        },
        {
          key: "1",
          value: "madeIn",
          name: "Made In",
        },
        {
          key: "2",
          value: "price",
          name: "Price",
        },
        {
          key: "3",
          value: "desc",
          name: "Desc",
        },
      ],
    };
  }

  // code to fetch data from the internet but I use this offline so I chose to create my own json file and read from that.

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ monsters: users }));
  // }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonstersByName = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    const filteredMonstersByMadeIn = monsters.filter((monster) =>
      monster.madeIn.toLowerCase().includes(searchField.toLowerCase())
    );
    const filteredMonstersByPrice = monsters.filter((monster) =>
      monster.price.toLowerCase().startsWith(searchField.toLowerCase())
    );
    const filteredMonstersByDesc = monsters.filter((monster) =>
      monster.description.toLowerCase().includes(searchField.toLowerCase())
    );

    // This code was mine to create the option component but chatGPT suggested I use mapping to bind the elements instead of this way so shamefully I did that.
    // const Optionor = (props) => (
    //   <option key={props.key} value={props.value}>
    //     {props.name}
    //   </option>
    // );

    return (
      <div className="App">
        <h1 className="header-name"> Random Products </h1>
        <div className="searching-components">
          <SearchBox
            placeholder="Search for a monster"
            handleChange={this.handleChange}
          />
          <Selector
            optionAttributes={this.state.optionAttributes}
            searchParameters={this.state.searchParameters}
            selectorchangeHandeler={(e) =>
              this.setState({ searchParameters: e.target.value })
            }
          />
        </div>
        {this.state.searchParameters === "name" ? (
          <CardList monsters={filteredMonstersByName} />
        ) : this.state.searchParameters === "madeIn" ? (
          <CardList monsters={filteredMonstersByMadeIn} />
        ) : this.state.searchParameters === "price" ? (
          <CardList monsters={filteredMonstersByPrice} />
        ) : this.state.searchParameters === "desc" ? (
          <CardList monsters={filteredMonstersByDesc} />
        ) : (
          <CardList monsters={monsters} />
        )}
      </div>
    );
  }
}

export default App;
