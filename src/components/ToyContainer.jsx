import React from 'react';
import ToyCard from './ToyCard'



class ToyContainer extends React.Component {

  renderToys = () => {
    return this.props.toys.map(toy => <ToyCard key={toy.id} toy={toy} deleteHandler={this.props.deleteHandler}/>)
  }

  render () {
    return(
        <div id="toy-collection">
          {this.renderToys()}
        </div>
    );
  }

}

export default ToyContainer;
