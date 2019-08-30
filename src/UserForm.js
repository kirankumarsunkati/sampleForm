import React from 'react';
import './App.css';
import InputText from './InputText';
import 'bootstrap/dist/css/bootstrap.css';
class UserForm extends React.Component {

  render() {
    this.props = [{'labelName':'firstName','labelType':'text'},
    {'labelName':'lastName','labelType':'text'},
    {'labelName':'gender','labelType':'radio'}];

    return (
        <div className="formWrapper">

                  {this.props.map((label,index) =>(
                    <p key={index}>
                    <label>{label.labelName}:</label>
                    <InputText type={label.labelType}/>
                    </p>
                ))}
        </div>
    );
  }
}

export default UserForm;
