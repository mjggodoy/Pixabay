import React, {useState} from 'react';
import Error from './../Form/Error'

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
                    placeholder="Search for an image..."
                    onChange={e => saveValue(e.target.value)}/>
                </div>
                <div className="col-md-4">
                    <input type="submit" className="btn btn-lg btn-danger btn-block"
                    value="Search for an image"/>
                </div>
            </div>
            {returnError(errorMessage)}
        </form>
    );
}

export default Form;