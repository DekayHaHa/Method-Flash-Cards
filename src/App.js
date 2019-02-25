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
    const newScore = this.state.correct;
    newScore.push(question);
    this.setState({ correct: newScore}, () => {
      localStorage.setItem('correct', JSON.stringify(newScore));
    })
  }
  componentWillMount() {
    let score = JSON.parse(localStorage.getItem('correct')) || [];
    if(score.length){
      this.setState({correct: score, questions: this.filterStorage(score)})
    } else {
      this.setState({questions: methodCards})
    }
  }
  filterStorage = (score) => {
    return methodCards.filter(val => {
      return score.every(cQ => cQ.uid !== val.uid)
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

