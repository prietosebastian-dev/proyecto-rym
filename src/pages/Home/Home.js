import "./Home.css"
import BotonInicio from '../../components/BotonInicio/BotonInicio.js';
export default function Home(){

    return(
        <div className="d-flex justify-content-center aling-items-center vh-100">
            <div className="bg-home">
                <h1 className="text-center">Project Rick & Morty</h1>
                <h2 className="text-center">Welcome to Rick & Morty Project!</h2>
                <p className="text-center">This proyect was made for practising React and to made a functional website</p>
                <p className="text-center">In this website you can know information of the characters of this animated series.</p>
                <p className="text-center">Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>
                <h2 className="text-center">Lets go!</h2>
                {/*<nav className="nav-home d-flex justify-content-center">
                    <button className="bg-button btn ">Characters</button>
                    <button className="bg-button btn ">Contact</button></nav>*/}
                <div className="d-flex justify-content-center botones">
                <BotonInicio nombreBoton="Characters" pasaje="/characters"/>
                <BotonInicio nombreBoton="Contact" pasaje="/contact"/>
                </div>
            </div>
        </div>
    );
};