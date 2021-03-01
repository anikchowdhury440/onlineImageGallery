import React from 'react'
import {GridList, GridListTile} from '@material-ui/core'
import './style.scss'

const ShowImage = ({...props}) => {
    return (
        <div>
            <div className = 'heading'>
                <h2>{props.type}</h2>
            </div>        
            <div>
                {props.images.length != 0 && 
                    props.images.map((image, index) => (
                        <React.Fragment key = {index}>
                            <img className = {props.name != undefined ? 'images-search': 'images'} src={image} key = {index}/>
                            {props.name != undefined && <h5 className = 'image-name'>{props.name[index]}</h5>}
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    )
}

export default ShowImage;