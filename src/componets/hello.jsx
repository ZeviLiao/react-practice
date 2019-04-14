import React, { Component } from 'react'

class Hello extends Component {
  state = {
    count: 0,
    // tags: ['tag1', 'tag2', 'tag3'],
    tags: [],
  }

  renderTag() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && 'please create a new tag!'}
        {this.renderTag()}
      </div>
    )
  }
}

export default Hello
