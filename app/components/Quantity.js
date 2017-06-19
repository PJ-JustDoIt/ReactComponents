var React = require('react');


class Quantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(function () {
      return {
        value: ++this.state.value     			
      }
    });
  }

  decrement() {
    this.setState(function () {
      return {
        value: --this.state.value    			
      }
    });
  }

render() {
    return (
         <ul id="quantitybox">
           <li onClick={this.decrement}> - </li>
           <li > {this.state.value} </li>
           <li onClick={this.increment}> + </li>
         </ul>
    );
  }
}

module.exports = Quantity;

