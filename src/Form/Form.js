import React from 'react';

const Form = () => {
    return(
        <form>
            <div className="form-group row">
                <div className="col-md-8">
                    <input type="text" className="form-control form-control-lg"
                    placeholder="Search for an image..."/>
                </div>
                <div className="col-md-4">
                    <input type="submit" className="btn btn-lg btn-danger btn-block"
                    value="Search for an image"/>
                </div>
            </div>
        </form>
    );
}

export default Form;