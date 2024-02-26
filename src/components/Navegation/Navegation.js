import './Navegation.css';
import {Link} from 'react-router-dom';
export default function Navegation({hoja}){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className='text-decoration-none'>
                    <h1 className="navbar-brand tit-rick">Rick & Morty</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span></button>
                
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav nav-boton">
                        <li className={hoja === "Characters" ? "nav-link active":"nav-link"} aria-current="page">
                           <Link to="/characters" className="btn btn-nav text-decoration-none">Characters</Link>
                        </li>
                        <li className={hoja === "Contact" ? "nav-link active":"nav-link"} >
                            <Link to="/contact" className="btn btn-nav text-decoration-none">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    )
};