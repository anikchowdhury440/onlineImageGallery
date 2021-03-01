import React, { useState } from 'react'
import './styles.scss'
import DatabaseServices from '../../services/database-services';
import ShowImage from '../show_image';

const SearchImages = (props) => {
    const [value, setValue] = useState('')
    const [imagesAfterSearch, setImages] = useState([])
    
    const searchImage = (imageName) => {
        setValue(imageName)
        DatabaseServices.searchImages(imageName)
        .then(responce => {
            console.log(responce);
            var imagesAfterSearch = []
            imagesAfterSearch.push(responce)
        }, () => {setImages(imagesAfterSearch)})
        .catch(error => {
            console.log(error);
        })
        
    }
    return(
        <div className = 'search_image center'>
            <input 
                id ="search_bar"
                placeholder = {'Search'} 
                value = {value} 
                onChange  = {(e) => {searchImage(e.target.value)}}
            />
            <div>
                {imagesAfterSearch.length != 0 && <ShowImage images = {imagesAfterSearch} type = {'Searched Images'}/>}
            </div>
        </div>
    )
}

export default SearchImages