import React from 'react'

export class Clock extends React.Component {
  constructor() {
    super()
    this.state = {
      date: new Date(),
      time: 'stuff'
    }
    this.tick = this.tick.bind(this)

  }

  componentDidMount() {
    this.handle = setInterval(this.tick, 1000)
  }

  tick() {
    this.setState({ date: new Date() })
  }

  printClock() {
    const date = this.state.date;
    const hours = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();
    return `${hours}:${mins}:${secs}`
  }


  render() {
    return (
      
      <div className="clock">
        <h1>THE CURRENT TIME</h1>
        <p> {this.printClock()}  </p>
      </div>
    )

  }
 



}

