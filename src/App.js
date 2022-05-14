import axios from 'axios';
import baseUrl from './config/index';

 

function App() {
  axios.get(`${baseUrl}/api/v1/books`).then(books=> {
    console.log(books);
  })
  return <div className='App'>My First Component-modified</div>;
}

export default App;
