import React from "react";
import { Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card";

export default class Content extends React.Component {

    state = {
        data: [],
        input: '',
        filter: []
  }

  
  getData = async () => {
      const response = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=e171d2c395404c9cb49af54c89283081')
      const {articles} = await response.json()
      this.setState({ data: articles, filter: articles });
    }                                                                                                                                                                                                                                             

    componentDidMount() {
        this.getData()
    }

    Search = async (input) => {
      const data = this.state.data
      const inputText = input.toLowerCase()
      const filteredCard = data.filter(item => {
        return item.title.toLowerCase().includes(inputText)
      })  
      this.setState({filter: filteredCard})
    }

    render() {
        return (
            <Container>
              <input type="text" placeholder="Search..." className="w-100 my-5 p-3" onChange={e => this.setState({input: e.target.value}, () => this.Search(this.state.input))}  />
              <div className="row justify-content-around">
                <Card data={this.state.filter}/>
              </div>
            </Container>
        )
    }
}


