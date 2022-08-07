import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m09bdx8', 'template_nfewhx9', form.current, 'm9SGMYZiHfRzaz9Re')

    e.target.reset()
    
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>coreyolson616@gmail.com</h5>
            <a href="mailto:coreyolson616@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>CoreyOlson</h5>
            <a href="https://m.me/corey.olson.5" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+13204200418</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+13204200418"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="7"></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
