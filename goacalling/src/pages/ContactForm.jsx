import React from 'react';
import { useForm } from 'react-hook-form';
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  

  const sendEmail = (data) => {
    emailjs.send('service_0c94lul', 'template_o0snr0f', data, 'xui9AoEqDjpUH6ZXY')
      .then(() => {
          console.log('SUCCESS!');
      }, (error) => {
          console.log('FAILED...', error.text);
      });
  };

  return (
    <>
      <Header />
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 text-center mb-4'>
            <h2>Contact Us</h2>
            <div className='d-flex justify-content-center my-3'>
              <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='mx-3'>
                <FaInstagram size={32} />
              </a>
              <a href='https://wa.me/1234567890' target='_blank' rel='noopener noreferrer' className='mx-3'>
                <FaWhatsapp size={32} />
              </a>
              <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='mx-3'>
                <FaFacebook size={32} />
              </a>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <form id='contact-form' onSubmit={sendEmail} noValidate>
              <div className='mb-3'>
                <label htmlFor='name' className='form-label'>Name</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  {...register('name', {
                    required: 'Please enter your name',
                    maxLength: {
                      value: 30,
                      message: 'Please use 30 characters or less'
                    }
                  })}
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  placeholder='Name'
                />
                {errors.name && <div className='invalid-feedback'>{errors.name.message}</div>}
              </div>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>Email address</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  {...register('email', {
                    required: 'Please enter your email address',
                    pattern: {
                      value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder='Email address'
                />
                {errors.email && <div className='invalid-feedback'>{errors.email.message}</div>}
              </div>
              <div className='mb-3'>
                <label htmlFor='subject' className='form-label'>Subject</label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  {...register('subject', {
                    required: 'Please enter a subject',
                    maxLength: {
                      value: 75,
                      message: 'Subject cannot exceed 75 characters'
                    }
                  })}
                  className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                  placeholder='Subject'
                />
                {errors.subject && <div className='invalid-feedback'>{errors.subject.message}</div>}
              </div>
              <div className='mb-3'>
                <label htmlFor='message' className='form-label'>Message</label>
                <textarea
                  id='message'
                  rows='3'
                  name='message'
                  {...register('message', {
                    required: 'Please enter a message'
                  })}
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  placeholder='Message'
                />
                {errors.message && <div className='invalid-feedback'>{errors.message.message}</div>}
              </div>
              <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;