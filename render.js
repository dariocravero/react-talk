// Try me at https://dariocravero.github.com/react-live

let el = document.getElementById('el')

let View = React.createClass({
  render: function() {
    return <div>You can dump stuff on #el</div>
  }
})

React.render(<View />, el)
