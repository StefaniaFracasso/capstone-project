import './App.css';
import CustomNavbar from './components/CustomNavbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllArticlesPreview from './components/Blog/AllArticlesPreview';
import SingleArticle from './components/Blog/SingleArticle';
import LearningPage from './components/Learning/LearningPage';
import SearchResults from './components/Search/SearchResults';
import KanjiDetails from './components/Learning/KanjiDetails';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <CustomNavbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/blog' element={<AllArticlesPreview/>}/>
        <Route path='/blog/:id' element={<SingleArticle/>}/>
        <Route path='/learnjapanese' element={<LearningPage/>}/>
        <Route path='/results/:query' element={<SearchResults/>}/>
        <Route path='/kanji/:kanjiChar' element={<KanjiDetails/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
