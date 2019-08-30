import React from 'react';
import './App.css';

class InputText extends React.Component {
  returnHtmlMarkup(type){
    let markup= '';
    switch (type) {
      case 'text':
          markup = <input type = "text"/>
        break;
      case 'radio':
          markup = <span><input type="radio" name="Gender" value="male"></input><label>Male</label>
          <input type="radio" name="Gender" value="male"></input><label>Female</label>
          </span>
          break;
      case 'select':
          markup = <span><input type="radio" name="Gender" value="male"></input><label>Male</label>
          <input type="radio" name="Gender" value="male"></input><label>Female</label>
          </span>
          break;
      default:
    }
    return markup;
  }
  render() {
    return (
      <span>
        <span>{this.returnHtmlMarkup(this.props.type)}</span>
      </span>
    );
  }
}

export default InputText;
