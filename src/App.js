
import './App.css';
import { Component } from 'react';


class App extends Component { 
constructor(){
  super();
  this.state={
    input:'hello'
  }
  console.log('consrtuctor')
}
componentDidMount(){
  console.log('componentdidmount')
  }
static getDerivedStateFromProps(props,state){
  console.log("getderived")
  console.log('updating-getderivedsataes')
  return ''
}
shouldComponentUpdate(state,props ){
console.log('should');
return state.input!==this.state.input

}
//getSnapshotBeforeUpdate()


buttonclick=()=>{
  this.setState({
    input:'bye'
  })
}
  render(){ 
    console.log('render')
  return (
    <div className="App">
      <h1>{this.state.input}</h1>
      <button type='button' className='button-transparent' onClick={this.buttonclick}>click</button>
      
    </div>
  );
}
}
export default App;
