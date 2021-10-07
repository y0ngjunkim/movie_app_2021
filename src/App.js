import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    console.log('hello');
    }
  
  state = {
    count: 0,
  };

  add = () => {
    console.log('add');
  };
  minus = () => {
    console.log('minus');
  };

  componentDidMount(){
    console.log('component rendered');
  }

  render(){
    console.log("I'm rendering");
    return( 
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button>Add</button>
        <button>Minus</button>
      </div>
    );
  }
}

export default App;