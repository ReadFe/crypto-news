import React from "react";
import { Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(data) {
  let card = ''
  data.forEach(function(data) {
      card += 
      `<div class="card mb-5" style="width: 30%;">
      <img src="${data.urlToImage}" class="card-img-top" style="height: 250px" alt="...">
          <div class="card-body">
              <h5 class="card-title">${data.title}</h5>
              <p class="card-text"><small class="text-muted">${data.author} - ${data.publishedAt} </small></p>
              <p class="card-text">${data.description}</p>
              <a href="${data.url}" class="btn btn-primary">Read More</a>
          </div>
      </div>`
  })
  return card;
}

const getData = async () => {
  const response = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=e171d2c395404c9cb49af54c89283081')
  const {articles} = await response.json()

  document.getElementById('content').innerHTML = Card(articles)
  return articles;

} 
getData()

export default class Content extends React.Component {

  state = {
    input: ''
  }

  Search = async (input) => {
    const data = await getData()
    const filteredCard = data.filter(item => {
      return item.title.includes(input)
    })  
    if(filteredCard.length === 0) {
      document.getElementById('content').innerHTML = 'Konten tidak ditemukan'
    } else {
      document.getElementById('content').innerHTML = Card(filteredCard)
    }
  }

    render() {
        return (
            <Container>
              <input type="text" placeholder="Search..." className="w-100 my-5 p-3" onChange={e => this.setState({input: e.target.value}, () => this.Search(this.state.input))}  />
              <div className="row justify-content-around" id="content"></div>
            </Container>
        )
    }
}