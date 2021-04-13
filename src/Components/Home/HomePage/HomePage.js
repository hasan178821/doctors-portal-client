import React from 'react';
import AppoinmentSection from '../AppoinmentSection/AppoinmentSection';
import BannerSection from '../BannerSection/BannerSection';
import Blog from '../Blog/Blog';
import ContactForm from '../ContactForm/ContactForm';
import Doctors from '../Doctors/Doctors';
import ExceptionalDental from '../ExceptionalDental/ExceptionalDental';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="banner-container">
            <Header></Header>
            <BannerSection></BannerSection>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>
            <AppoinmentSection></AppoinmentSection>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctors></Doctors>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;