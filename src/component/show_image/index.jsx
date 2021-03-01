import React from 'react'
import {GridList, GridListTile} from '@material-ui/core'
import './style.scss'

const ShowImage = ({...props}) => {
    return (
        <div>
            <div className = 'heading'>
                <text>{props.type}</text>
            </div>        
            <GridList cellHeight={160} className='class-gridlist'>
                {props.images.length != 0 && 
                    props.images.map((image, index) => (
                        <React.Fragment key = {index}>
                            <img className = 'images' src={image}/>
                        </React.Fragment>
                    ))
                }
            </GridList>
        </div>
        // <div>
        //     { props.images.length != 0 && 
        //         props.images.map((image, index) => (
        //             <React.Fragment key = {index}>
        //                 <h1>Hello</h1>
        //             </React.Fragment>
        //         ))}
        // </div>
    )
}

export default ShowImage;