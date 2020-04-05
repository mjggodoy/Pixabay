import React from 'react';
import Image from './Image';

const ListOfImages = ({images}) => {

    if (images === undefined) return null;

    return(
        <div className="col-12 p-5 row">
            {images.map((key, value) =>
                 <Image
                    image = {key} key={value}
                 /> 
            )}
        </div>
    );
}

export default ListOfImages;