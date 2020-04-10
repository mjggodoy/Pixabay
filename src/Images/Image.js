import React from 'react';

const ListOfImages = ({image}) => {
    const {largeImageURL, tags, likes, favorites, downloads, previewURL} = image;

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top" style={cardImageStyle}></img>
            <div className="card-body">
                <p className="card-text">{likes} <b>Likes</b></p>
                <p className="card-text">{downloads} <b>Downloads</b></p>
                <p className="card-text">{favorites} <b>Favorites</b></p>
            </div> 
            <div className="card-footer">
                <a className="card-text" href={largeImageURL} target="_blank" rel="noopener" style={buttonColor} className="btn btn-primary">Link to the image</a>
            </div>   
            </div> 
        </div>
    );
}

const cardImageStyle =  {
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
}

const buttonColor = {
    backgroundColor: '#f57a00',
    marginLeft: '10px',
    fontFamily: 'sans-serif'
}

export default ListOfImages;