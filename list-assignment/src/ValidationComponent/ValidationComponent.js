import React,{Component} from 'react';

class Validation extends Component{
    constructor(props){
        super()
    }

    render(){
        console.log(this.props.length);
        
        let display = null;

        if(this.props.length <=5){
            display= <p>the text is too short</p>
        }else{
            display=<p>the text is long enough</p>
        }
        return(
            <div>
            {display}
            </div>
        );
    }

}

export default Validation;