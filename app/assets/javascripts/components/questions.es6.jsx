class Questions extends React.Component {
  
  constructor(){
    super()
    this.state = {
      questions: []
    }
  }


  componentDidMount(){
    $.ajax({
      url: '/questions/list',
      method: 'get'
    })
    .done((response) => {
      this.setState({questions: response})
    })
  }

  render(){
    return(
        <div>
          <section>
          <h2>Questions</h2>
          <ul>
            {
              this.state.questions.map((question, index) => {
                return (<Question key={index} data={question} user={question}/>)
              })
            }
          </ul>
          </section>
        </div>
    )
  }
}
