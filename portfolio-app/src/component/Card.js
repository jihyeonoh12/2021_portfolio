import React from 'react'
import '../styles/card.css';


class Card extends React.Component {
    render() {
  console.log(this.props.image);
        return(
            <div className="card">
                <img src={this.props.image} className="card_image"/>
                <h1>
                    Title goes here
                </h1>
                <p>Description goes here</p>
            </div>
        )
    }
    
}

export default Card