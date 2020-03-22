import React, {useState, useEffect} from 'react';
import Form from './Form/Form';
import axios from 'axios';


function App() {
  const [seachApi, saveSearchApi] = useState('');

  useEffect(() => {
    const apiRequest = async() => {
      if (seachApi === '' || seachApi === undefined || Array.isArray(seachApi)) {
        return;
      }
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const numberOfImagesPerPage = 5;
      const apiKey = '';
      const url = `https://pixabay.com/api/?key=${apiKey}&q=${seachApi}&per_page=${numberOfImagesPerPage}`;
      const response = await axios.get(proxyurl+url).
        then((response) => {
        saveSearchApi(response.data.hits);
      })
      .catch((error) => {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log('error, request', error.request);

        } else {
            console.log('Error', error.message);
        }
        console.error(error.config);
      });
    }
    apiRequest();

  }, [seachApi]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Images searcher</p>
        <Form
          saveSearchApi = {saveSearchApi}
        />
      </div>
    </div>
  );
}

export default App;
