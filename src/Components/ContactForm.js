
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from "react";
function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setmsg] = useState('');
    const [rgpd, setRgpd] = useState(false);
    
    const [submit, setSubmit] = useState(false);
    
    const nameValid = name.length > 5;
    const emailValid = /\S+@\S+\.\S+/.test(email);
    const msgValid = msg.length > 30;
    const rgpdValid = rgpd;
    
    const formSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        if(nameValid && emailValid && msgValid && rgpdValid) {
            alert("Message sent");
        }
    }
    
    return(
        <>
            <section className="text-center w-75 m-auto my-3">
                <h1>Nous contacter</h1>
                <form action="" onSubmit={formSubmit}>
                    <div className="name">
                        <label className="my-2" htmlFor="name">Nom</label>
                        <input className={`w-100 form-control ${
                            submit ? (nameValid ? 'is-valid' : 'is-invalid') : ''
                        }`}
                               value={name}
                               type="text"
                               id="name"
                               onChange={(e) => setName(e.target.value)}
                        />
                        <div className="invalid-feedback">
                            le nom doit contenir au moins 5 lettres
                        </div>
                    </div>
                    <div className="email">
                        <label className="my-2" htmlFor="email">Email</label>
                        <input className={`w-100 form-control ${
                            submit ? ( emailValid ? 'is-valid' : 'is-invalid') : ''
                        }`}
                               value={email}
                               type="text"
                               id="email"
                               onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="invalid-feedback">
                            l'email doit être valid
                        </div>
                    </div>
                    <div className="msg">
                        <label className="my-2" htmlFor="message">Message</label>
                        <textarea className={`w-100 form-control ${
                            submit ? (msgValid ? 'is-valid' : 'is-invalid') : ''
                        }`}
                                  name="message"
                                  id="message"
                                  cols="40"
                                  rows="10"
                                  value={msg}
                                  onChange={(e) => setmsg(e.target.value)}
                        ></textarea>
                        <div className="invalid-feedback">
                            veuillez entrez plus ou moins 30 lettres
                        </div>
                    </div>
                    <div className="rgpd ">
                        <input type="checkbox" id="checkbox" className={`${
                            submit ? (rgpdValid ? 'is-valid' : 'is-invalid') : ''
                        }`}
                        onChange={(e) => setRgpd(e.target.checked)}
                        />
                        <label className="my-2 form-check-label" htmlFor="checkbox" >J'acceptes les conditions RGPD</label>
                        <div className="invalid-feedback">
                            Veuillez cocher cette case
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-primary my-3" type="submit">Envoyer</button>
                    </div>
                </form>
            </section>
        </>
    )
}
export default ContactForm;