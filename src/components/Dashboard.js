import React from 'react';
import {connect} from 'react-redux';
import './dashboard.css';
import Pet from './Pet'

export class Dashboard extends React.Component {

    render() {
        return (
            <div>
              <section className='catToAdopt'>
                <Pet />
              </section>
              <section className='dogToAdopt'>
                <Pet />
              </section>
            </div>

        )
}
}