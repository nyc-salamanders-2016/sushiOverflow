class Answer extends React.Component {

  render(){
    // debugger
    // debugger;
      let answer = this.props.data
      return(
        <li>{answer.body}</li>
        )
  }
}
