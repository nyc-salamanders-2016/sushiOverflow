class Answers extends React.Component {

  render(){

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
