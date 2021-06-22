// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { connect } from 'react-redux'
import {getRecipes} from './actions/recipeActions'
class App extends Component {

  componentDidMount() {
    // console.log(this.props)
    this.props.goGetRecipes()
  }
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
  debugger
  console.log("inside app.js", state)
  return {
    recipes: state.recipes,
    loading: state.loading
  }
} 
const mapDispatchToProps = (dispatch) => {
  return {
    goGetRecipes: () => dispatch(getRecipes())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
