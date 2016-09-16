class App extends React.Component {

  constructor(){
    super()
    this.state = {
      questions: []
    }
  }

  render(){
    return(
        <div>
          <h1>SushiOverflow</h1>
            <Questions />
        </div>
    )
  }
}
