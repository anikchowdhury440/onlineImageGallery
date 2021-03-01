import React, { Component } from 'react'
import DatabaseServices from '../../services/database-services';
import ShowImage from '../show_image/index'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: []
        }
    }
    
    componentDidMount = () => {
        DatabaseServices.getImages()
        .then(responce => {
            let images = []
            console.log(responce);
            images.push(responce)
            this.setState({images: images})
        })
        .catch(error => {console.log(error);})
    }

    render() {
        return(
            <div>
                {this.state.images.length == 0 && <ShowImage images = {this.state.images} type = {'Your Images'}/>}
            </div>
        )
    }
}