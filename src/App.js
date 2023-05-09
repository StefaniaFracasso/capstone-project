import './App.css';
import CustomNavbar from './components/CustomNavbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllArticlesPreview from './components/Blog/AllArticlesPreview';
import SingleArticle from './components/Blog/SingleArticle';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <CustomNavbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/blog' element={<AllArticlesPreview/>}/>
        <Route path='/blog/:id' element={<SingleArticle/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
