import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import MainPage from './Page/MainPage/MainPanel/MainPage';
import LoginPage from './Page/LoginPage/LoginPage';
import RegisterPage from './Page/RegisterPage/RegisterPage';
import UploadMusic from './Page/UploadMusic/UploadMusic';
import GenreMusic from './Page/GenreMusic';
import SideBar from './components/SideBar';
import Download from './Page/Download';
import Delete from './Page/Delete';
import AlbumInfo from './Page/AlbumInfo';
function App() {
  return (
    <div style={{display: 'flex'}}>
     <div><SideBar/></div>
    <div style = {{padding:'2rem 2rem 0 2rem', overflow:'hidden', justifyContent:"center"}}>
    <Router >
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/upload" element={<UploadMusic />} />
        <Route path="/genre" element={<GenreMusic />} />
        <Route path="/download" element={<Download />} />
        <Route path="/delete" element={<Delete/>}/>
        <Route path="/albuminfo" element={<AlbumInfo/>}/>
      </Routes>
    </Router></div></div>

    

    
  );
}

export default App;