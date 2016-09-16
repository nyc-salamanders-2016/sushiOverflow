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

  showDetails(){
    let details = this.state.details
    if(this.toggleDetails) {
      return details
    }
    return null;
  }

  render(){
    // debugger
      let question = this.props.data
      return(
        <li onClick={this.toggleDetails} >
          <h2>{question.title}</h2>
          <p>Asked by {question.user.username}</p>
          <p>Question: {question.body}</p>

          {this.state.details !== null ?
            <Answers data={this.showDetails()}/>
          :
            null
          }


        </li>
        )
  }
}
