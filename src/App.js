import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./Components/Header";
import AllCats from "./Pages/AllCats";
import FavoriteCats from "./Pages/FavoriteCats";

function App() {
  return (
    <>
        <Header/>
        <Routes>
            <Route path="/" element={<AllCats/>}/>
            <Route path="/favorites" element={<FavoriteCats/>}/>
        </Routes>
    </>
  );
}

export default App;
