import React , {Component} from 'react'


class Message extends Component{

  constructor(){
    super();
    this.state = {
      message : 'Welcome zakaria'
    }
  }

   changeMessage(){
     this.setState({
       message : "hey again"
     })
    
   }

    render(){
      return (<div><h1>{this.state.message} </h1>
      <button onClick ={this.changeMessage.bind(this)}> click me</button>
      </div>
      )
    }
}

export default Message