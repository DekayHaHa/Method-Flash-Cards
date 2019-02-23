import React, { Component } from 'react';
import methodCards from './method-cards'
import Header from './Header';
import Container from './Container';

export default class App extends Component {
  constructor() {
    super ();
    this.state = {
      cards: []
    }
  }
  componentWillMount() {
    this.setState({cards: methodCards})
  }
  render() {

    return (
      <section>
        <Header/>
        <Container cards={this.state.cards}/>
      </section>
    );
  }
}

