import React, { Component } from 'react'
import {Card, CardContent, Button} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './styles.scss'
import ShowImage from '../show_image';
import DatabaseServices from '../../services/database-services';

let fileObj = [];
let fileArray = [];

class UploadImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images : [],
            selectedImages : [],
            value : '',
            reSelectImage : false,
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

    handleImageSelect = (e) => {
        if(this.state.reSelectImage) {
            fileObj = []
            fileArray = []
        }
        var images = e.target.files
        console.log(e.target.value);
        for(let i = 0; i < images.length; i++) {
            fileObj.push(images[i])
        }
        console.log(fileObj)
        for (let i = 0; i < fileObj.length; i++) {
            fileArray.push(URL.createObjectURL(fileObj[i]))
        }
        this.setState({
            selectedImages : fileArray,
            value : e.target.value,
            reSelectImage : true
        })
    }

    handleUploadButton = () => {
        const images = this.state.images
        // console.log(this.state.selectedImages);
        // this.state.selectedImages.map((selectedImage, index) => { 
        //     DatabaseServices.addImage(selectedImage)
        //         .then(responce => {
        //             console.log(selectedImage);
        //             images.push(selectedImage)
        //             console.log(responce);
        //         })
        //         .catch(error => {
        //             console.log(error)
        //         }) 
        //})
        console.log(fileObj)
        fileObj.map((file) => {
            console.log('file', file)
            DatabaseServices.addImage(file)
                    .then(responce => {
                        console.log('responce', responce);
                    })
                    .catch(error => {
                        console.log(error)
                    })
        })
        this.setState({
            images : images,
            value : '',
            selectedImages : [],
            reSelectImage : false
        })
        fileArray = []
        fileObj = []
    }

    compressImage = (image) => {
        console.log(image);
    }

    render() {
        return(
            <div>
                <div className = 'header-text-view'>
                    <h1 className = 'header-text'>Home work</h1>
                </div>
                <div className = 'card-view'>
                    <Card className = 'input-file-card'>
                        <CardContent>
                            <input
                                type = "file" 
                                className = "imageFile"  
                                onChange = {this.handleImageSelect}
                                multiple 
                                value = {this.state.value}
                                accept = "image/*"/>
                        </CardContent>
                        <div className = 'upload-button-view'>
                            <Button
                                variant="contained"
                                color = 'primary'
                                className= 'upload-button'
                                size="small"
                                onClick = {this.handleUploadButton}
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload
                            </Button>
                        </div>
                    </Card>
                </div>
                <div>
                    {this.state.selectedImages.length != 0 && <ShowImage images = {this.state.selectedImages} type = {'Selected Images'}/>}
                </div>
                <div>
                    {this.state.images.length != 0 && <ShowImage images = {this.state.images} type = {'Updated Images'}/>}
                </div>
            </div>
        )
    }
}

export default UploadImage