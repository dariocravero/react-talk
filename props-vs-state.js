// Try me at https://dariocravero.github.com/react-live

let el = document.getElementById('el')
let rendered = 0

let View = React.createClass({
  props: {
    val: React.PropTypes.string.isRequired
  },

  getInitialState: function() {
    return {
      val: `before rendered ${rendered} times`
    }
  },

  updateState: function() {
    this.setState({
      val: `before rendered ${rendered} times`
    })
  },

  render: function() {
    return (
      <div>
        <div>Rendered: {++rendered}</div>
        <div>val: {this.props.val}</div>
        <div>val: {this.state.val}</div>
        <button onClick={this.updateState}>Update state</button>
      </div>
    )
  }
})

React.render(<View val='something' />, el)
