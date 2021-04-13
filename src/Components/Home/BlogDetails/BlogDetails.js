import React from 'react';
import './BlogDetails.css';

const BlogDetails = ({blogCard}) => {
    return (
        <>
            <div className="col-md-4 dynamic-card">
                <div className="d-flex justify-content-center align-items-center">
                    <img src={blogCard.image} className="me-4 blog-card-image" alt=""/>
                    <div>
                        <h6>{blogCard.name}</h6>
                        <p>{blogCard.date}</p>
                    </div>
                </div>
                <br/>
                <h5>{blogCard.title}</h5>
                <br/>
                <p>{blogCard.details}</p>
            </div>
        </>
    );
};

export default BlogDetails;