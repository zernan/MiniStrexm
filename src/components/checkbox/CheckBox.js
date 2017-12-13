import React, { Component} from 'react';

class Checkbox extends Component {
  constructor()
  {
    super()
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.state = { isChecked: true }
  }

  handleCheckboxChange (e) {
    const {toggleCheck, label} = this.props;

    this.setState( ({isChecked})=>( {isChecked: !isChecked} ));

    toggleCheck(label);
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        {label}
          <input type="checkbox" value={label} checked={isChecked} 
            onChange={this.handleCheckboxChange} />
      </div>
    );
  }
}

export default Checkbox;