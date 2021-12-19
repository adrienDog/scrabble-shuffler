import React from 'react';
import './UpdateLettersForm.css';

class UpdateLettersForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: props.text};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newValue = event.target.value;
    this.setState({value: newValue});
    this.props.onChange(newValue);
  }

  render() {
    return (
      <form id="UpdateLettersForm" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </form>
    );
  }
}

export default UpdateLettersForm;