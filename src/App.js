import React, { Component } from 'react';
import methodCards from './method-cards'
import Header from './Header';
import Container from './Container';

export default class App extends Component {
  constructor() {
    super ();
    this.state = {
      correct: [],
      questions: []
    }
  }
  keepScore = (question) => {
    const newScore = this.state.correct
    newScore.push(question)
    this.setState({ correct: newScore}, () => {
      const scoreCard = {
        correct: this.state.correct
      }
      localStorage.setItem("scoreCard", JSON.stringify(scoreCard));
    })
  }
  componentWillMount() {
    let scoreCard = JSON.parse(localStorage.getItem('scoreCard')) || {correct: []};
    if(scoreCard.correct.length){
      this.setState({questions: this.filterStorage(scoreCard)})
    } else {
      this.setState({questions: methodCards})
    }
  }
  filterStorage = (scoreCard) => {
    return methodCards.filter(val => {
      return scoreCard.correct.every(cQ => cQ.uid !== val.uid)
    })
  }
  render() {
    return (
      <section>
        <Header/>
        <Container cards={this.state.questions}
          keepScore={this.keepScore}/>
      </section>
    );
  }
}

