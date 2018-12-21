import React, { Component } from 'react';
import './App.css';
import { rword } from 'rword';
import alphabet from 'alphabet';
import cx from 'classnames';
import Canvas from './components/Canvas';

class App extends Component {
  state = {
    word: [],
    letter: '',
    step: 0
  };

  componentWillMount() {
    const result = [];
    const word = rword.generate();
    console.log(word);
    word.split('').map(l => {
      const element = {};
      element['letter'] = l;
      element['show'] = false;
      result.push(element);
    });
    this.setState({
      word: result
    });
  }
  inWord = e => {
    const letter = e.target.textContent;
    const word = [...this.state.word];
    let wholeWord = '';
    for (let el of word) {
      console.log(el.letter, letter, this.state.step, wholeWord);
      wholeWord = wholeWord + el.letter;
      if (el.letter === letter) {
        el.show = true;
        this.setState({
          word
        });
      }
    }
    if (!wholeWord.includes(letter)) {
      this.setState({
        step: this.state.step + 1
      });
    }
  };

  render() {
    console.log(typeof this.state.step);
    return (
      <div className="App">
        <Canvas step={this.state.step} />
        {this.state.word.map((l, index) => {
          return (
            <div className="tile" key={index}>
              <span className={cx({ active: l.show })}>{l.letter}</span>
            </div>
          );
        })}
        <hr />
        {alphabet.lower.map((l, index) => {
          return (
            <div className="letter" key={index} onClick={this.inWord}>
              {l}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
