import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// import contact data
import { contact } from '../data';
// import { social } from '../data';


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pna9z3b', 'template_r2m31m3', form.current, 'cZgU7Xwas7_vdIpqd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };





  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            Contact me
          </h2>
          <p className='subtitle'>
            How can I help? Please feel free to reach out on any platform, email, LinkedIn or Instagram. I'm looking forward to connecting with you and helping you take your idea from zero to one. 
          </p>
        </div>
        <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
          <div
            className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
          >
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-accent font-normal '>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>




          <form ref={form}
            className='space-y-8 w-full max-w-[780px]' onSubmit={sendEmail}
          >
            <div className='flex gap-8'>
              <input className='input' type='text' name='name' placeholder='Your name' />
              <input className='input' type='email' name='email' placeholder='Your email' />
            </div>
            <input className='input' type='text' name='subject' placeholder='Subject' />
            <textarea
              className='textarea'
              placeholder='Your message'
              name='message'
            ></textarea>
            <button className='btn btn-lg bg-accent hover:bg-secondary-hover' type="submit" value="Send">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;