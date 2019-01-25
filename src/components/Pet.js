import React from 'react';
import {connect} from 'react-redux';
import './pet.css';

export class Pet extends React.Component {

    butonclicked(){
        console.log('button clicked');
    }
  render() {
    return(
        <div>
      <header>
        <h2>Animal Name</h2>
        <img src='' alt='animal'></img>
      </header>
      <main>
        <dl>
         <dt>Sex:</dt>
         <dt>Age:</dt>
         <dt>Breed:</dt>
         <dt>Story:</dt>
         <button onClick={() =>this.props.butonclicked()}>Adopt Me!</button>
       </dl>
     </main>
     </div>
 
 )
}
}

export default Pet;