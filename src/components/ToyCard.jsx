import React, { Component } from 'react';

class ToyCard extends Component {

    onClickDelete = () => {
        let id = this.props.toy.id
        this.props.deleteHandler(id)
    }


    render() {
        return (
            <div className="card">
                <h2>{this.props.toy.name}</h2>
                <img src={this.props.toy.image} className="toy-avatar" />
                <p>{this.props.toy.likes} Likes </p>
                <button className="like-btn">Like {'<3'}</button>
                <button className="del-btn" onClick={this.onClickDelete}>Donate to GoodWill</button>
            </div>
        );
    }
}

export default ToyCard;
