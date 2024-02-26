import './BotonInicio.css';
import {Link} from 'react-router-dom';

export default function BotonInicio({nombreBoton,pasaje}){
    return(
        <div>
            <Link className="btn-inicio btn" to={pasaje}>{nombreBoton}</Link>
        </div>
    )
};