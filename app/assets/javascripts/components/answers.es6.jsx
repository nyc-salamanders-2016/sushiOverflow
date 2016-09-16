class Answers extends React.Component {

  render(){
          // console.log(this.state.answers)  // why does this print twice?
        // debugger
    return(

        <div>
          <h3>Answers</h3>
          <ul>
            {
              this.props.data.map((answer, index) => {
                return (<Answer key={index} data={answer} />)
              })
            }
          </ul>
        </div>
    )
  }
}
