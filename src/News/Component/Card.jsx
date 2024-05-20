const Card = ({data}) =>  {
    if(data.length === 0) {
        return <p className="w-100 text-center">Data tidak ditemukan</p>
    } else {
        let card = data.map((item, i) => (
            <div className="card mb-5" style={{width: 30 + '%'}} key={i}>
            <img src={item.urlToImage} className="card-img-top" style={{height: 250 + 'px'}} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text"><small className="text-muted">{item.author} - {item.publishedAt} </small></p>
                    <p className="card-text">{item.description}</p>
                    <a href={item.url} className="btn btn-primary">Read More</a>
                </div>
            </div>
        ))
        return card;
    }
  }

export default Card;