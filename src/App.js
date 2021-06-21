// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { connect } from 'react-redux'
class App extends Component {
  render() {
  return (
    <div className="App">
      <h3>Recipes Library</h3>
    
      <hr/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}
}
const mapStateToProps = (state) => {
  return {
    recipes: state.manageRecipe.recipes,
    load_recipe: state.manageRecipe.load_recipe
  }
} 
export default connect(mapStateToProps)(App);
