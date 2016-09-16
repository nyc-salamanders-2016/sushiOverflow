class Answer extends React.Component {

  render(){
      let answer = this.props.data
      return(
        <li>{answer.body} <i>{answer.user.username}</i></li>
        )
  }
}
