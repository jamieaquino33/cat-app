import React, { Component } from 'react';
import './catlist.css';

class CatList extends Component {

    getListItems() {
        return this.props.breeds.map((cat) =>
            <li key={cat.breeds[0].id}>
                <h1>{cat.breeds[0].name}</h1>
                <img className="picture" src={cat.url} alt={cat.breeds[0].name} />
                <p>Lifespan: {cat.breeds[0].life_span}</p>
                <p>Fun facts: {cat.breeds[0].temperament}</p>
            </li>
        );
    } 

    render() {
        if (this.props.breeds.length > 0) {
            return (
                <ul className='list'>{this.getListItems()}</ul>
            );
        } else {
            return (
                <h1>No cat breeds were found. Please try a different keyword.</h1>
            );
        }
    }
} 

export default CatList; 
