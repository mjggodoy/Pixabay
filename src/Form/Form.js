import React, {useState} from 'react';
import Error from './../Form/Error';

const Form = ({saveSearchApi}) => {
    const [value, saveValue] = useState('');
    const [error, saveError] = useState(false);
    const errorMessage = "You must include a term to look for";

    const searchForImages = e => {
        e.preventDefault();
        if (value.trim() === '') {
            saveError(true);
            return;
        }
        saveError(false);
        saveSearchApi(value);
    }

    const returnError = e => {
        if (error) {
            return <Error errorMessage={e}/>;
        }
    };

    return(
        <form
        onSubmit={searchForImages}
        >
            <div className="form-group row">
                <div className="col-md-8">
                    <input type="text" className="form-control form-control-lg"
                    style = {seachBoxStyle}
                    placeholder="Include a keyword to search images..."
                    onChange={e => saveValue(e.target.value)}/>
                </div>
                <div className="col-md-4">
                    <input type="submit" className="btn btn-lg btn-danger btn-block"
                    style={cardImageStyle} value="Search for an image"/>
                </div>
            </div>
            {returnError(errorMessage)}
        </form>
    );
}

const cardImageStyle =  {
  fontFamily: 'sans-serif'
}

const seachBoxStyle =  {
    marginBottom: '10px'
}

export default Form;