import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function Ruteo(){
    return(
        <Router>
            <Routes>
                <Route path='/'element={<Home/>}/>
                <Route path='/characters'element={<Characters/>}/>
                <Route path='/contact'element={<Contact/>}/>
            </Routes>
        </Router>
    )
}