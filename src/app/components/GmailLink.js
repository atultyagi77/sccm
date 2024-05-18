// components/GmailLink.js
// import Link from 'next/link';
import React from 'react'


const GmailLink = () => {
    const recipient = 'sandeeptyagi82@gmail.com'; //  email address
    const subject = 'Inquiry About Coaching Services at Sanvith Coaching Centre'; // email subject
    const body = `Hello, I'm interested in learning more about your coaching services. Please provide details. Thank you!`; // email body

    return (
        <a href={`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}  target="_blank" rel="noopener noreferrer">
            <img src="/assets/gmail.png" alt="Gmail" className="h-11 cursor-pointer" /> {/* Replace with your Gmail icon */}
        </a>
    );
};

export default GmailLink;
