import React from "react";
import Card from './Card';

const contactInfoList = [
    {
        'platform': 'github',
        'hyperlink': 'https://github.com/Bilkis2023',
        'content': 'Github'
    },
    {
        'platform': 'linkedin',
        'hyperlink': 'https://www.linkedin.com/feed/',
        'content': 'LinkedIn'
    }
];
const ContactList = () =>{
    const contactInfo = contactInfoList.map((contact, i) => (

        <Card {...contact} key={i} />
    ))

return (
    <footer className="contact-list">
        {contactInfo}
    </footer>);

}

export default ContactList;
