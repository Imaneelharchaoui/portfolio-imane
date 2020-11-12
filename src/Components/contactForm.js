
import emailjs from "emailjs-com";
import React from 'react';
import SweetAlert from "react-bootstrap-sweetalert";

export default function ContactUs() {


    function sendEmail(e) {
        e.preventDefault();


        emailjs.sendForm('user_EBTQ1hPMr42VFvQl0GW', 'template_r8ehycr', e.target, `user_EBTQ1hPMr42VFvQl0GWwh`)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return(

        <section  id="Contactme">
        <div>
            <div className="container"  >
                {/*<h className='title'>Come say hi !</h> <span> elharchaouiimane98<i className="fas fa-at"></i>gmail.com</span>*/}
                <div className="box-c">
                    <a href="#" className="custom-underline" >lets get in Touch ! |</a>
                </div>
                <form onSubmit={sendEmail}  action="?" method="POST" data-aos="fade-right"  >
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"  required/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"  required/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"  required/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"  required></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">


                                <br/>
                                <input type="submit"  className="button" value="Send Message"   required></input>



                        </div>
                    </div>
                </form>
            </div>
        </div>
        </section>
    )
}
