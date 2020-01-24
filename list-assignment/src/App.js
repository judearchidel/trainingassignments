import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/ValidationComponent';
import Char from "./CharComponent/CharComponent"

class App extends Component {
  
constructor(){
  super();
  this.state={
    value: "",
    length: 0,
    char:[]
  };
}
  
changeHandler = (event)=>{
  let values= event.target.value;
  this.setState({
    value: values,
    length: values.length,
    char: [...values]
  });

}
RemoveHAndler = (index)=>{
  let chars = [...this.state.char];
  chars.splice(index,1);
  let val= chars.join("");
  console.log(val);
  this.setState({
    value: val,
    length: val.length,
    char: chars
  })
  
  
  console.log(chars);
}
  render(){
    let charector = (<div>
      {
        this.state.char.map((p,index)=>{
        return  <Char value={p} key={index} clicks={this.RemoveHAndler.bind(this,index)}/>
       })
      }
       </div>);
  
    return (
    <div className="App">
    <input type="text" onChange={this.changeHandler} value={this.state.value}/>
    <p>{this.state.length}</p>
    <Validation length={this.state.length} />
    {charector}
    </div>
  );
}
}

export default App;
