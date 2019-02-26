import React, { Component } from 'react';
import methodCards from './method-cards'
import Container from './Container';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      roundReset: false
    }
  }
  componentDidMount = () => {
    fetch('http://memoize-datasets.herokuapp.com/api/v1/dkData')
      .then(response => response.json())
      .then(questions => {
        this.setState({
          questions: questions.dkData
        })
      })
      .catch(error => {
        throw new Error(error)
      })
  }
  reset = (check) => {
    const original = this.state.questions
    if (check) { localStorage.clear() }
    this.setState({ questions: original, roundReset: true })
  }
  setToggle = () => {
    this.setState({ roundReset: false })
  }
  checkStorage() {
    let score = JSON.parse(localStorage.getItem('correct')) || [];
    return score.length ? this.filterStorage(score) : this.state.questions;
  }
  filterStorage(score) {
    return methodCards.filter(val => score.every(elem => elem.uid !== val.uid))
  }
  render() {
    let questions = this.checkStorage(this.state.questions)
    return (
      <section>
        <Container cards={questions} resetToggle={this.setToggle} resetCheck={this.state.roundReset} reset={this.reset} />
      </section>
    );
  }
}

