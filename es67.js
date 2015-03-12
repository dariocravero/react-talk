// Try me at https://dariocravero.github.com/react-live

// TODO Add more things?

// Use let instead of var, it scopes better :)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
let el = document.getElementById('el')

// Use import to declare dependencies
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import { Component } from 'react'

// Declare classes and inherit from others. It's still prototypal inheritance
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
// it will just make your code cleaner to read an ensure a proper structure on reusable stuff :)
// http://babeljs.io/docs/learn-es6/#classes
class SomeView extends Component {
  render() {
    return <div>SomeView</div>
  }
}
SomeView.propTypes = {
  val: React.PropTypes.string.isRequired
}

export { SomeView }
// Exports one specific part of your module. It can then be imported through:
// import { SomeView } from 'es67'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export


// Use export default to tell which part of your module gets loaded when someone imports it via
// import Module from 'module'
export default class View extends Component {
  render() {
    // The spread operator is an amazing way of expanding an expresion
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
    return <SomeView {...this.props}>You can dump stuff on #el</SomeView>
  }
}

View.propTypes = {
  val: React.PropTypes.string
}
View.defaultProps = {
  val: 'something'
}

React.render(<View val='something else' />, el)
