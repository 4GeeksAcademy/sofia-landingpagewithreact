import React from "react";


export function Card() {
    return (
        <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src="https://cdn.pixabay.com/photo/2021/03/12/08/51/shorturl-6089108_1280.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
    
}