import React, { useState } from 'react'
import {Card, CardContent, Button} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './styles.scss'

const UploadImage = () => {
    let fileObj = [];
    let fileArray = [];
    const [selectedImages, setSelectedImages] = useState([])
    const [value, setValue] = useState('')

    const handleImageUpload = (e) => {
        fileObj.push(e.target.files)
        for (let i = 0; i < fileObj[0].length; i++) {
            fileArray.push(URL.createObjectURL(fileObj[0][i]))
        }
        setSelectedImages(fileArray)
    }

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
                            onChange = {handleImageUpload}
                            multiple 
                            value = {value}
                            accept = "image/*"/>
                    </CardContent>
                    <div className = 'upload-button-view'>
                        <Button
                            variant="contained"
                            color = 'primary'
                            className= 'upload-button'
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default UploadImage