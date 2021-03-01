import React, { useState } from 'react'
import './styles.scss'
import DatabaseServices from '../../services/database-services';
import ShowImage from '../show_image';

const SearchImages = (props) => {
    const [value, setValue] = useState('')
    const [imagesAfterSearch, setImages] = useState([])
    const [imageName, setImageName] = useState([])
    
    const searchImage = (imageName) => {
        setValue(imageName)
        DatabaseServices.searchImages(imageName)
        .then(responce => {
            var imagesAfterSearch = []
            var imageName = []
            if(responce.data.length != 0) {
                responce.data.map(image => {
                    imagesAfterSearch.push(`http://192.168.1.29:8000${image.image}`)
                    imageName.push(image.name)
                })
                setImages(imagesAfterSearch)
                setImageName(imageName)
                console.log(imageName)
            } else {
                setImages([])
                setImageName([])
            }
        })
        .catch(error => {
            console.log(error);
        })
        
    }
    return(
        <div className = 'search_image'>
            <div className = 'center'>
                <input 
                    id ="search_bar"
                    placeholder = {'Search'} 
                    value = {value} 
                    onChange  = {(e) => {searchImage(e.target.value)}}
                />
            </div>
            <div>
                {imagesAfterSearch.length != 0 && <ShowImage images = {imagesAfterSearch} name = {imageName} type = {'Searched Images'}/>}
            </div>
        </div>
    )
}

export default SearchImages