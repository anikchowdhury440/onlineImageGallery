import React, { Component } from 'react'
import DatabaseServices from '../../services/database-services';

export default class Home extends Component {
    constructor() {
        this.state = {
            images: []
        }
    }
    
    getImages = () => {
        DatabaseServices.getImages()
        .then(responce => {
            let images = []
            images.push(responce)
            this.setState({images: images})
        })
        .catch(error => {console.log(error);})
    }
}