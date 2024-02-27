import React from "react";
import Card from './Card';

const contactInfoList = [
    {
        'platform': 'github',
        'hyperlink': 'github',
        'content': 'Github'
    },
    {
        'platform': 'linkedin',
        'hyperlink': 'linkedin',
        'content': 'LinkedIn'
    }
];
const ContactList = (){
    const contactInfo = contactInfoList.map((contact, i) => (

        <Card {...contact} key={i} />
    ))
}
return (
    <footer className="contact-list">
        {contactInfo}
    </footer>;

);

export default ContactList;
