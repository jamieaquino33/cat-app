import React, { Component } from 'react';
import axios from 'axios';
import CatList from '../CatList/CatList';
import Header from '../Header/header';
import './breedSearcher.css';

class BreedSearcher extends Component {

    constructor(props){
        super(props);
        this.state = { breedInfo: [] }
    }

    componentDidMount() {
        this.getRandomBreed();
    }
    
    getRandomBreed = () => {
        const _this = this;
    
        axios({
            mehod: 'GET',
            url: 'https://api.thecatapi.com/v1/images/search?breed_id=beng',
        })
        .then(function (response) {
            _this.setState({ breedInfo: response.data || []})
        })
        .catch(function (error) {
            console.log(error);
        })
        
    }
    
    getBreedByName = (cat) => {

        const _this = this;

        axios({
            method: 'GET',
            url: 'https://api.thecatapi.com/v1/images/search',
            params: {
                breed_id: cat
            }
        })
        .then(function (response) {
            _this.setState({ breedInfo: response.data || [] })
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {

        return (
            <div>
                 <Header 

                    breedByNameHandler={this.getBreedByName} 
                /> 
                <CatList breeds={this.state.breedInfo} />
                
            </div>
        );
    }
    
}

export default BreedSearcher;