class Question extends React.Component {
  constructor(){
    super();
    this.state = {details: null, toggleDetails: false}
    this.toggleDetails = this.toggleDetails.bind(this);
    this.fetchDetails = this.fetchDetails.bind(this)
    this.showDetails = this.showDetails.bind(this)
  }

  toggleDetails(){
    let shouldToggleDetails = !this.state.toggleDetails;
    this.setState({toggleDetails: shouldToggleDetails})
    if(shouldToggleDetails)
      this.fetchDetails();
  }

  fetchDetails(){
    let questionInfo = this.props.data;
    $.ajax({
      url: '/questions/details/?question=' + questionInfo.id + '',
      method: 'GET'
    })
    // debugger
    .done((response) => {
      // debugger
      this.setState({details: response})
    }.bind(this))
  }

  render(){
    // debugger
      let question = this.props.data
      return(
        <li onClick={this.toggleDetails} >
          <h2>{question.title}</h2>
          <p>Asked by {question.user.username}</p>
          <p>Question: {question.body}</p>
          {this.state.toggleDetails !== false && this.state.details !== null?
            <Answers data={this.state.details}/>
          :
            console.log("in render answers conditional")
          }
        </li>
        )
  }
}
