import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: "0",
          name: "Laptop Computers",
          image: "💻",
          madeIn: "China",
          color: "Blue, Red, Black, White",
          price: "30",
          rent: false,
          description: "This is a laptop pc what can I do?",
        },
        {
          id: "1",
          name: "Mini Printers",
          image: "📰",
          madeIn: "Vietnam",
          color: "Blue, White, Gray",
          price: "50",
          rent: false,
          description:
            "Well this is a printer and I'm hoping I don't have to write  a lot.",
        },
        {
          id: "2",
          name: "Set of Underwears",
          image: "👙",
          madeIn: "Korea",
          color: "Blue, Red, Black, White, pink",
          price: "5",
          rent: false,
          description:
            "Underpants, I'm selling them while my relationship is going down, what kind a pig I'm I, and why can't you believe me? I said I'd change and trust me I'll.",
        },
        {
          id: "3",
          name: "Japanese Dolls",
          image: "🎎",
          madeIn: "Japan",
          color: "Blue, Red",
          price: "2",
          rent: true,
          description:
            "Well here are some dolls straight from japan. I'm your boyfriend not your enemy, you're the person whom I love the most, if I can't change this bahri for you then what is love's power? I'm lost. I can't even cry while my parents are home. It's just sad.",
        },
        {
          id: "4",
          name: "Halloween Costumes",
          image: "🎃",
          madeIn: "USA",
          color: "Most kinds of colors",
          price: "10",
          rent: true,
          description:
            "Halloween costumes are a variety of clothes that you can choose from. You'd have to come to the store to choose and rent them in person.",
        },
        {
          id: "5",
          name: "Diving Googles",
          image: "🥽",
          madeIn: "Japan",
          color: "Black, Blue",
          price: "3",
          rent: false,
          description:
            "Diving googles, they're cool but only worn at swimming places.",
        },
        {
          id: "6",
          name: "Oculus Gears",
          image: "😎",
          madeIn: "Japan",
          color: "Black, Blue",
          price: "3",
          rent: false,
          description:
            "Diving googles, they're cool but only worn at swimming places.",
        },
        {
          id: "7",
          name: "Sandisk flash drive",
          image: "💾",
          madeIn: "Japan",
          color: "Black, Blue",
          price: "3",
          rent: false,
          description:
            "Diving googles, they're cool but only worn at swimming places.",
        },
        {
          id: "8",
          name: "Samsung smart watchs",
          image: "⌚",
          madeIn: "Japan",
          color: "Black, Blue",
          price: "3",
          rent: false,
          description:
            "Diving googles, they're cool but only worn at swimming places.",
        },
        {
          id: "9",
          name: "Samsung Wireless Chargers",
          image: "🔋",
          madeIn: "Japan",
          color: "Black, Blue",
          price: "3",
          rent: false,
          description:
            "Diving googles, they're cool but only worn at swimming places.",
        },
      ],
      searchField: "",
    };
  }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ monster: users }));
  // }

  render() {
    // const { monsters, searchField } = this.state;
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;

    return (
      <div className="App">
        <input
          className="search-bar"
          type="search"
          placeholder="Search for a monster"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
