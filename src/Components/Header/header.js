import React, { Component } from 'react';
import cats from '../Cat/cats';
import './header.css';



class Header extends Component {

    generateBreedButtons() {
        return cats.map(cat => (
            <button className="button" key={cat.id} onClick={() => this.props.breedByNameHandler(cat.id)}>
                {cat.name}
            </button>

        ));
    }
    
    render() {
        return (
            <div>
                {this.generateBreedButtons()}
            </div>
        );
    }
}

export default Header;
