import React from 'react';
import {connect} from 'react-redux';
import './dashboard.css';
import Pet from './Pet'
import {fetchCat, fetchDog} from '../actions/index'

 class Dashboard extends React.Component {
    componentDidMount() {
        console.log(this.props.userId)
        this.props.dispatch(fetchCat())
        this.props.dispatch(fetchDog())
    } 

    render() {
        return (
            <div>
              <section className='catToAdopt'>
                <Pet dogToAdopt={this.props.dogToAdopt}/>
              </section>
              <section className='dogToAdopt'>
                <Pet catToAdopt={this.props.catToAdopt}/>
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
