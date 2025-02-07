import "./App.css";
import Groups from "./pages/Groups";
import Grpindividual from "./pages/Grpindividual";
import Friends from './pages/Friends'
import Addexpense from "./pages/Addexpense";
import Test from "./pages/Test";
import { Routes, Route } from "react-router-dom";


function App() {
    return (

        <Routes>
            <Route path="/friends" element={<Friends />} />
            <Route path='/' element={<Groups/>}/>
            <Route path='/test' element={<Test/>}/>
            <Route path='/grpindividual' element={<Grpindividual/>}/>
            <Route path='/addexpense' element={<Addexpense/>}/>
        </Routes>

    );
}

export default App;
