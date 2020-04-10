import React, {useState, useEffect} from 'react';
import Form from './Form/Form';
import axios from 'axios';
import ListOfImages from './Images/ListOfImages';

function App() {
  const [seachApi, saveSearchApi] = useState('');
  const [images, saveImages] = useState();
  const [actualPage, saveActualPage] = useState(1);
  const [totalPages, saveTotalPages] = useState(1);

  useEffect(() => {
    const apiRequest = async() => {
      if (seachApi === '' || seachApi === undefined || Array.isArray(seachApi)) {
        return;
      }
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const numberOfImagesPerPage = 50;
      const apiKey = '';
      const url = `https://pixabay.com/api/?key=${apiKey}&q=${seachApi}&per_page=${numberOfImagesPerPage}&page=${actualPage}`;
      const response = await axios.get(proxyurl+url).
        then((response) => {
        const totalImagesPagesFromApi = response.data.totalHits;
        saveImages(response.data.hits);
        calculateTotalPages(totalImagesPagesFromApi, numberOfImagesPerPage);
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

  }, [seachApi, actualPage]);

  const calculateTotalPages = (totalImagesPagesFromApi, numberOfImagesPerPage)  => {
    const totalPages = Math.floor(totalImagesPagesFromApi/numberOfImagesPerPage);
    console.log(totalImagesPagesFromApi, numberOfImagesPerPage, totalPages);

    saveTotalPages(totalPages);
  }

  const goBackPage = () => {
    const backPage = actualPage - 1;
    if (backPage < 1) return;
    saveActualPage(backPage);
    scrollUp();
  }

  const goNextPage = () => {
    const nextPage = actualPage + 1;
    if (nextPage > totalPages) return;
    saveActualPage(nextPage);
    scrollUp();
  }

  const scrollUp = () => {
    const jumbotron = document.querySelector('.jumbotron');
    jumbotron.scrollIntoView({top:'100', behavior: 'smooth'});
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Images searcher</p>
        <Form
          saveSearchApi = {saveSearchApi}
        />
      </div>
      <div className="row justify-content-center">
        <ListOfImages
          images= {images}
        />
        {(actualPage === 1) ? null :
         (<button
         type = "button"
         className="bbtn btn-info mr-1" onClick={goBackPage} 
         style={{backgroundColor: '#f57a00', 
         borderColor: 'transparent' }}>&laquo; Back</button>)
        }
        {(actualPage === totalPages) ? null :
         ( <button
          type="button"
          className="bbtn btn-info mr-1" onClick={goNextPage} 
          style={{backgroundColor: '#f57a00', 
          borderColor: 'transparent', marginLeft: '10px'}}>Next &raquo;</button>)
        }
      </div>
    </div>
  );
}

export default App;
