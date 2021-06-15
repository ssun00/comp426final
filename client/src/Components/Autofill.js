import React from 'react';

// Used DigitalOcean tutorial "How To Build an Autocomplete Component in React" to help understand how to implement Autofill function in Registration form

export class AutoFill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indexOfSelected: 0,
      filteredAutofills: [],
      showAutofills: false,
      userInput: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(input) {
    const { autofillers } = this.props;
    const userInput = input.currentTarget.value;

    const filtered = autofillers.filter(
      autofiller => autofiller.indexOf(userInput) > -1
    );

    this.setState({
      indexOfSelected: 0,
      filteredAutofills: filtered,
      showAutofills: true,
      userInput: input.currentTarget.value
    });
  };

  onClick(input) {
    this.setState({
      indexOfSelected: 0,
      filteredAutofills: [],
      showAutofills: false,
      userInput: input.currentTarget.innerText
    });
  };

  render() {
    const {
      onChange,
      onClick,
      state: {
        indexOfSelected,
        filteredAutofills,
        showAutofills,
        userInput
      }
    } = this;
  
    let autofillersList;

    if (showAutofills && userInput) {
      if (filteredAutofills.length) {
        autofillersList = (
          <ul class="autofillers">
            {filteredAutofills.map((autofiller, index) => {
              let className;
    
              if (index === indexOfSelected) {
                className = "has-autofill";
              }
              return (
                <li key={autofiller} className={className} onClick={onClick}>
                  {autofiller}
                </li>
              );
            })}
          </ul>
        );
      } else {
        autofillersList = (
          <div class="has-no-autofill">
            <em>Graduation Year Not Available.</em>
          </div>
        );
      }
    }

    return (
      <React.Fragment>
        <input
          type="text"
          onChange={onChange}
          value={userInput}
        />
        {autofillersList}
      </React.Fragment>
    );
  }

}

export default AutoFill;