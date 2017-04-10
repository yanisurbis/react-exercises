import React from 'react'

class CurrentTime extends React.Component {

  state = { date: new Date() }

  componentDidMount() {
    setInterval(this.updateState, 1000)
  }

  updateState = () => {
    this.setState({date: new Date()})
  }

  render() { 
    return (
      <div>
        Current Time is {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}

export default CurrentTime