import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './UserForm';
import 'bootstrap/dist/css/bootstrap.css';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this.props = [{'labelName':'First Name','labelType':'text'},
    {'labelName':'Last Name','labelType':'text'},
    {'labelName':'Gender','labelType':'radio'},
  {'labelName':'Age','labelType':'select'}];
  }
  handleSubmit(){
    alert('submit clicked');
  }

  render() {
    return (
      <div>
        <h1> Customer Signup</h1>
        <form onSubmit={this.handleSubmit}>
        <UserForm fields={this.props}></UserForm>
        <input type="submit" value = "login"></input>
        </form>
      </div>
    );
  }
}

export default App;
