class Questions extends React.Component {

  constructor(){
    super()
    this.state = {
      questions: []
    }
    // console.log(this.state.questions)
  }


  componentDidMount(){
    // debugger
    // console.log(this.state.questions)
    $.ajax({
      url: '/questions/list',
      method: 'get'
    })
    .done((response) => {
      // debugger
      // console.log(this.state.questions)
      this.setState({questions: response})
    })
  }

  render(){
          // console.log(this.state.questions)  // why does this print twice?
        // debugger
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
