import React,{Component} from 'react';

class Char extends Component{
    constructor(){
        super()
    }
render(){
   let  style ={
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
 }
    return(
        <div style={style} onClick={this.props.clicks}>
        <h1>{this.props.value}</h1>
        </div>

    )
}

}

export default Char;


