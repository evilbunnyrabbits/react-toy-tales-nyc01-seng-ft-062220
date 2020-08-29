import React, { Component } from 'react';

let url = "http://localhost:3000/toys/"

class ToyForm extends Component {

  state = {
    name: '',
    image: '',
    likes: 0
  }

  onChangeHandler = (e) => {
    if (e.target.name === "name") {
      this.setState({
        name: e.target.value
      })
    } else if (e.target.name === "image") {
      this.setState({
        image: e.target.value
      })
    }
  }

  onSubmitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState({
      name: '',
      image: '',
    })
  }


  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.onSubmitHandler}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" onChange={this.onChangeHandler} value={this.state.name}  placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input type="text" name="image" onChange={this.onChangeHandler} value={this.state.image} placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
