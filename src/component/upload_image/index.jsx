import React, { Component } from 'react'
import {Card, CardContent, Button} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './styles.scss'
import ShowImage from '../show_image';

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

    handleImageSelect = (e) => {
        if(this.state.reSelectImage) {
            fileObj = []
            fileArray = []
        }
        fileObj.push(e.target.files)
        for (let i = 0; i < fileObj[0].length; i++) {
            fileArray.push(URL.createObjectURL(fileObj[0][i]))
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
        const image = this.state.images
        this.state.selectedImages.map(selectedImage => { image.push(selectedImage) })
        this.setState({
            images : image,
            value : '',
            selectedImages : [],
            reSelectImage : false
        })
    }

    render() {
        return(
            <div>
                <div className = 'header-text-view'>
                    <h1 className = 'header-text'>Add Image</h1>
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
                    <ShowImage images = {this.state.images}/>
                </div>
            </div>
        )
    }
}

export default UploadImage