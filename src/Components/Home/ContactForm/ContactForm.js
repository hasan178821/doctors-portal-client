import React from 'react';
import { useForm } from 'react-hook-form';
import './ContactForm.css';

const ContactForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="text-center contact-form">
            <h6 style={{color: '#11d0d9', paddingTop: '15px'}}>Contact Us</h6>
            <h2>Always Connected With US</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="email" placeholder="your email" {...register('email')} />
                
                <input name="subject" placeholder="subject" {...register('subject')} />
                
                <input name="message" placeholder="message" {...register('message')} />
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default ContactForm;