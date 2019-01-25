import React from 'react';
import {connect} from 'react-redux';
import './pet.css';

// Make your initial state look like a copy of final state. (All data we're using set to '' or null or similar in initial state)
// If no loading inside component. In Dashbaord, only render component if prop in das
export class Pet extends React.Component {

    adoptClicked(e){
        console.log('adopt clicked');
        e.preventDefault()
        this.props.adopt()
        

    }

  render() {
 return (
        <div>
      <header>
        <h2>{this.props.pet.data.name}</h2>
        <img src={this.props.pet.data.imageURL} alt={this.props.pet.data.imageDescription}></img>
      </header>
      <main>
{/* DL is description list.. Good way to display key/vaue pairs. (aka definition list) DD - designated designation (Sex: DD, this.props.data.sex: DT) */}
      <dl>      
         <dt>Sex: </dt>
           <dd>{this.props.pet.data.sex}</dd>
         <dt>Age:</dt>
           <dd>{this.props.pet.data.age}</dd>
         <dt>Breed:</dt>
           <dd>{this.props.pet.data.breed}</dd>
         <dt>Story:</dt>
          <input type="button" value="Adopt Me!" onClick={(e) => this.adoptClicked(e)} />
       </dl>
     </main>
     </div>
 
 )
}
}

export default Pet;