import Navegation from "../../components/Navegation/Navegation";
import './Contact.css';

export default function Contact(){
    return(
        <div>
            <nav><Navegation hoja="Contact"/></nav>
            <main className="formContact d-flex flex-column justify-content-center align-items-center m-auto mt-5 w-75 h-75">
                <h1 className="row">Contact</h1>
                <p className="row">Leave us your information so we can contact you</p>
                <form action="" className="row g-3 p-4">
                        <div className="col-md-6">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control"  aria-label="First name" id="name"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control"  aria-label="Last name" id="email"/>
                        </div>
                    <div className="mb-3 col-12">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control p-4" id="message" rows="3"></textarea>
                    </div>
                    <input className="btn btn-success btn-form" type="submit" value="Send"/>
                </form>
            </main>
        </div>
    );
};