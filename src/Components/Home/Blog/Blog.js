import React from 'react';
import caudi from '../../../images/Ellipse 1.png';
import john from '../../../images/Ellipse 2.png';
import BlogDetails from '../BlogDetails/BlogDetails';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Blog.css';

const blogData = [
    {
        name:  'Dr.Caudi',
        date: '23 April 2019',
        image: caudi,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, reiciendis!',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus ullam harum eligendi velit nam repudiandae repellat suscipit dolorum sed.'
    },
    {
        name:  'Dr. John Mitchell',
        date: '23 April 2019',
        image: john,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, reiciendis!',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus ullam harum eligendi velit nam repudiandae repellat suscipit dolorum sed.'
    },
]

const Blog = () => {
    return (
        <section>
            <div className="blog-title text-center my-5">
                <h6 style={{color: '#11d0d9', margin: '15px 0'}}>OUR BLOG</h6>
                <h2>From Our Blog News</h2>
            </div>
            <div className="row justify-content-center py-5">
                <div className="col-md-4 fixed-card">
                    <h6>Rashed Kabir</h6>
                    <p>22 Aug 2018</p>
                    <br/>
                    <h5>Check at least a doctor in a <br/> year for your teeth</h5>
                    <br/><br/>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
                {
                    blogData.map(blogCard => <BlogDetails blogCard={blogCard}></BlogDetails>)
                }
            </div>
        </section>
    );
};

export default Blog;