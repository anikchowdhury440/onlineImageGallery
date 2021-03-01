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
        let images = []
        DatabaseServices.getImages()
        .then(responce => {
            if(responce.data.length != 0) {
                responce.data.map(image => {
                    images.push(`http://192.168.1.29:8000${image.image}`)
                })
                this.setState({ images : images })
            }
        })
        .catch(error => {console.log(error);})
    }

    render() {
        return(
            <div>
                {this.state.images.length != 0 && <ShowImage images = {this.state.images} type = {'Your Images'}/>}
            </div>
        )
    }
}