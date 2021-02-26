import React from 'react'
import {GridList, GridListTile} from '@material-ui/core'

const ShowImage = ({...props}) => {
    return (
        <GridList cellHeight={160} className='class-gridlist' cols={3}>
            { props.images.length != 0 && 
                props.images.map((image, index) => (
                    <React.Fragment key = {index}>
                        <img src={image} />
                    </React.Fragment>
                ))}
        </GridList>
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