import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


let url = "http://localhost:3000/toys/"


class App extends React.Component{

  state = {
      display: false,
      toys: []
  }

  componentDidMount() {
      fetch(url)
          .then(res => res.json())
          .then(toys => this.setState({toys: toys}))
  }

  handleClick = () => {
      let newBoolean = !this.state.display
      this.setState({
          display: newBoolean
      })
  }

  likeHandler = (obj) => {
      let likes = obj.likes += 1
      let data = {
          likes: likes
      }
      let packet = {
          method: "PATCH",
          headers: {
              "content-type": "application/json",
              "accept": "application/json"
          },
          body: JSON.stringify(data)
      }

      let newArray = [...this.state.toys]
      let updatedObject = newArray.find(toy => toy.id === obj.id)
      updatedObject.likes = likes

      this.setState({
          toys: newArray
      })

      fetch(url + obj.id, packet)
          .then(res=> res.json())
  }

  submitHandler = (obj) => {
      console.log("Created", obj)
      let packet = {
          method: "POST",
          headers: {
              "content-type" : "application/json",
              "accept": "application/json"
          },
          body: JSON.stringify(obj)
      }

      fetch(url, packet)
          .then(res => res.json())

      fetch(url)
          .then(res => res.json())
          .then(toys => this.setState({toys: toys}))
      //the only way to get the ID number of the object we just created
      // (which we need to delete the object) is to do a new fetch
      //after the item is created to pull a fresh list.  This seems inefficent...
  }

  deleteHandler = (id) => {
      console.log(id)
      let packet = {
          method: "DELETE",
          headers: {
              "content-type": "application/json",
              "accept": "application/json"
          },
      }
      fetch(url + id, packet)
          .then(res => res.json())

      let newArray = this.state.toys.filter(toy => toy.id !== id)

      this.setState({
          toys: newArray
      })
  }


  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm submitHandler={this.submitHandler}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} deleteHandler={this.deleteHandler} likeHandler={this.likeHandler}/>
      </>
    );
  }

}

export default App;
