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
        'hyperlink': 'https://www.linkedin.com/in/bilkis-naher-670099268/',
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
