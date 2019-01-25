import React from 'react';
import {connect} from 'react-redux';
import './dashboard.css';
import Pet from './Pet'
import {fetchCat, fetchDog} from '../actions/index'
import { deleteCat, deleteDog } from '../actions';


 class Dashboard extends React.Component {
    componentDidMount() {
      this.props.dispatch(fetchCat())
      console.log(this.props)
        this.props.dispatch(fetchDog())
    } 

    render() {
console.log('>>',this.props)
      return (this.props.dogToAdopt.data === null || this.props.catToAdopt.data === null) 
      ? <span>loading</span>
      : (
            <div>
              <section className='catToAdopt'>
                <Pet pet={this.props.dogToAdopt} adopt={() => this.props.dispatch(deleteDog())}/>
              </section>
              <section className='catToAdopt'>
                <Pet pet={this.props.catToAdopt} adopt={() => this.props.dispatch(deleteCat())}/>
              </section>
            </div>

        )
    }
}

const mapStateToProps = state => { 
    return {
        dogToAdopt: state.dog,
        catToAdopt: state.cat
    }
}
 export default connect(mapStateToProps)(Dashboard)
