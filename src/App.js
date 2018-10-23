import React, { Component } from 'react';
import Top from './components/Top';
import Pictures from './components/Pictures';
import Wrapper from './components/Wrapper'
import cars from './cars.json';

class App extends Component {

  state = {
    message: "Click any image to start the game, but DO NOT CLICK THE SAME IMAGE TWICE!",
    cars: cars,
    score: 0,
    highscore: 0,
    notPicked: cars   
  }


  imageShuffle = item => {
    for (let x = item.length - 1; x > 0; x--) {
        let y = Math.floor(Math.random() * (x + 1));
        [item[x], item[y]] = [item[y], item[x]];
    }
}

  carPicker = name => {
    const carCheck = this.state.notPicked.find(data => data.name === name);
    if (carCheck === undefined){
      this.setState({
        message: "Wrong!!!!",
        cars: cars,
        score: 0,
        highscore: (this.state.score > this.state.highscore ? this.state.score : this.state.highscore),
        notPicked: cars
      })
    }
    else {
      const correctCar = this.state.notPicked.filter(data => data.name !== name);
      this.setState({
        message: "Correct!!! Superb Memory!!",
        cars: cars,
        score: this.state.score + 1,
        notPicked: correctCar
      });
    }
    this.imageShuffle(cars);
  };





  render() {
    return (
      
      <Wrapper>
      <Top 
      message={this.state.message}
      score={this.state.score}
      highscore={this.state.highscore}
      />

      {this.state.cars.map(data => (
        <Pictures
          carPicker={this.carPicker}
          name={data.name}
          image={data.image}
          alt={data.name}
        />
      ))}
      </Wrapper>
     

    );
  }
}

export default App;
