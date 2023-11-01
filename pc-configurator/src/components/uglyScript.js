import React, { Component } from 'react'

class ParentThatFetches extends React.Component {
    constructor () {
      this.state = {};
    }
  
    UNSAFE_componentDidMount () {
      fetch('/some/async/data')
        .then(resp => resp.json())
        .then(data => this.setState({data}));
    }
  
    render () {
      {this.state.data && (
        <Child data={this.state.data} />
      )}
    }
  }
  
  const Child = ({data}) => (
    <tr>
      {data.map((x, i) => (<td key={i}>{x}</td>))}
    </tr>
  );