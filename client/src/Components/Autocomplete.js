import React, { Component } from 'react';

export class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeAutofill: 0,
      filteredAutofills: [],
      showAutofills: false,
      userInput: ""
    };
  }

  onChange = input => {
    const { autofillers } = this.props;
    const userInput = input.currentTarget.value;
  
    const filteredAutofills = autofillers.filter(
      autofiller =>
        autofiller.indexOf(userInput) > -1
    );
  
    this.setState({
      activeAutofill: 0,
      filteredAutofills,
      showAutofills: true,
      userInput: input.currentTarget.value
    });
  };

  onClick = input => {
    this.setState({
      activeAutofill: 0,
      filteredAutofills: [],
      showAutofills: false,
      userInput: input.currentTarget.innerText
    });
  };

  onKeyDown = input => {
    const { activeAutofill, filteredAutofills } = this.state;
  
    if (input.keyCode === 13) {
      this.setState({
        activeAutofill: 0,
        showAutofills: false,
        userInput: filteredAutofills[activeAutofill]
      });
    } else if (input.keyCode === 38) {
      if (activeAutofill === 0) {
        return;
      }
      this.setState({ activeAutofill: activeAutofill - 1 });
    }

    else if (input.keyCode === 40) {
      if (activeAutofill - 1 === filteredAutofills.length) {
        return;
      }
      this.setState({ activeAutofill: activeAutofill + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeAutofill,
        filteredAutofills,
        showAutofills,
        userInput
      }
    } = this;
  
    let autofillersListComponent;

    if (showAutofills && userInput) {
      if (filteredAutofills.length) {
        autofillersListComponent = (
          <ul class="autofillers">
            {filteredAutofills.map((autofiller, index) => {
              let className;
    
              if (index === activeAutofill) {
                className = "autofiller-active";
              }
              return (
                <li className={className} key={autofiller} onClick={onClick}>
                  {autofiller}
                </li>
              );
            })}
          </ul>
        );
      } else {
        autofillersListComponent = (
          <div class="no-autofillers">
            <em>No suggestions available.</em>
          </div>
        );
      }
    }

    return (
      <React.Fragment>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        {autofillersListComponent}
      </React.Fragment>
    );
  }

}

export default Autocomplete;