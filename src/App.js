import React, {Component} from 'react';
import './App.css';
import Button from './button';
import {Input} from "./input";
import {Title} from "./title";
import {WhiteRectangle} from "./whiteRectangle";
import { Transition } from 'react-transition-group';


class App extends Component {

  state = {
    searchQuery: "",
    title: "Example",
    isOpen: true
  };

  updateInput = (e) => {
    const field = e.target.name;
    let newState = {};
    newState[field] = e.target.value;
    this.setState(newState)
  };

  alertChange = (e) => {
    alert(e.target.name + " changed to: " + e.target.value)
  };

  toggleContainer = () => {
     this.setState({isOpen: !this.state.isOpen})
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button title="click" handleOnClick={this.toggleContainer}/>
          <Transition>
            <WhiteRectangle>
              {this.state.searchQuery}
              <Title title={this.state.title} />
              <Input name="searchQuery" value={this.state.searchQuery} onChange={this.alertChange}/>
              <Input name="title" value={this.state.title}  onChange={this.updateInput }/>
            </WhiteRectangle>
          </Transition>
        </header>
      </div>
    );
  }
}

export default App;
