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

const getArticleIdFromGuid = (guid) => {
  const startIndex = guid.lastIndexOf("=") + 1;
  return guid.substring(startIndex);
};

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <CustomNavbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/blog' element={<AllArticlesPreview getArticleId={getArticleIdFromGuid}/>}/>
        <Route path='/blog/:articleId' element={<SingleArticle getArticleId={getArticleIdFromGuid}/>}/>
        <Route path='/learnjapanese/:grade' element={<LearningPage/>}/>
        <Route path='/results/:query' element={<SearchResults/>}/>
        <Route path='/kanji/:kanjiChar' element={<KanjiDetails/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
