// Try me at https://dariocravero.github.com/react-live

let el = document.getElementById('el')
let rendered = 0

let View = React.createClass({
  props: {
    val: React.PropTypes.string.isRequired
  },

  render: function() {
    return <div>{this.props.val}</div>
  }
})

React.render(<View />, el)
