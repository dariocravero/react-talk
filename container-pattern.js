// Try me at https://dariocravero.github.com/react-live

let el = document.getElementById('el')
let rendered = 0

let View = React.createClass({
  props: {
    val: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div>
        <div>Rendered: {++rendered}</div>
        <div>val: {this.props.val}</div>
      </div>
    )
  }
})

let ViewContainer = React.createClass({
  mixins: [
    React.addons.PureRenderMixin
  ],

  getInitialState: function() {
    return {
      val: 'something'
    }
  },

  updateVal: function(event) {
    event.preventDefault()

    this.setState({
      val: this.refs.val.getDOMNode().value
    })
  },

  render: function() {
    return (
      <div>
        <View val={this.state.val} />
        <form onSubmit={this.updateVal}>
          <input ref='val' defaultValue='something' />
        </form>
      </div>
    )
  }
})

React.render(
  <ViewContainer />,
  el
)
