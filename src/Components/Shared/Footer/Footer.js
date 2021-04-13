import React from 'react';

const Footer = () => {
    const footerStyle={
        color: 'white',
        backgroundColor: '#11d0d9',
        letterSpacing: '7px'
    }
    return (
        <div style={footerStyle} className="text-center py-3 footer">
            <h6>&copy; 2021 || Hasan Rana</h6>
        </div>
    );
};

export default Footer;