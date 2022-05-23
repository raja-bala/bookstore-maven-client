import { BookContainer } from './book/BookContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Login from './user/Login';
import { SnackbarProvider } from 'notistack';
function App() {
  return (
    <SnackbarProvider maxSnack={1}>
      <Router>
        <Layout>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route exact path='/' element={<BookContainer />}></Route>
          </Routes>
        </Layout>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
