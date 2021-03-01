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
            reSelectImage : false
        }
    }

    componentDidMount = () => {
        // DatabaseServices.getImages()
        // .then(responce => {
        //     console.log(responce);
        // })
        // .catch(error => {
        //     console.log(error);
        // })
    }

    handleImageSelect = (e) => {
        if(this.state.reSelectImage) {
            fileObj = []
            fileArray = []
        }
        var images = e.target.files
        for(let i = 0; i < images.length; i++) {
            // if(images[i].size > 10485760) {
            //     this.compressImage(images[i])
            //     .then((responce) => {
            //         fileObj.push(responce)
            //     })
            //     .catch(error => {console.log(error)})
            // } else {
                fileObj.push(images[i])
            //}
        }
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
        fileArray = []
        fileObj = []
        const images = this.state.images
        this.state.selectedImages.map(selectedImage => { 
            // DatabaseServices.addImage()
            // .then(responce => {
            //     console.log(responce);
            // })
            // .catch(error => {
            //     console.log(error)
            // })
            images.push(selectedImage) 
        })
        this.setState({
            images : images,
            value : '',
            selectedImages : [],
            reSelectImage : false
        })
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