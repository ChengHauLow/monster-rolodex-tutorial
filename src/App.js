import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/CardList';
import Search from './components/search/Search';


export class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  async componentDidMount (){
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/');
      const users = await res.json();
      this.setState({ monsters: users });
    } catch (err) {
      console.log(err.header, err.message);      
    }
  }

  handleChange = e =>{
    this.setState({searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster=>(
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    ))
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Search handleChange={this.handleChange} placeholder="Search monster" />
        <CardList monsters={filteredMonsters}/>
        {/* <header className="App-header">
          <img src={logo} alt="logo" className="App-logo" />
          <p>{isTrue ? 'Hey, Tzuyu':'Hey, My Chou Tzuyu!'}</p>
          <button onClick={()=> this.setState({ isTrue: !isTrue })}>Change Text</button>
        </header> */}
      </div>
    )
  }
}

export default App
