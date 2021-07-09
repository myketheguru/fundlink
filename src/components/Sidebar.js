import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
// Icons
import Icons from './icons';
// Custom
import ContactCircle from './ContactCircle'

// Api for contact images
// https://randomuser.me/api/?inc=picture&results=3

const Sidebar = () => {
    const [links] = useState([
        {name: "Dashboard", url: function () {return `/${this.name.toLowerCase()}`}, Icon: 'CompassIcon'},
        {name: "Recent", url: function () {return `/${this.name.toLowerCase()}`}, Icon: 'StarIcon'},
        {name: "Chat", url: function () {return `/${this.name.toLowerCase()}`}, Icon: 'ChatBubbleIcon', new: {}},
        {name: "Activity", url: function () {return `/${this.name.toLowerCase()}`}, Icon: 'ArrowIcon'},
        {name: "Transaction", url: function () {return `/${this.name.toLowerCase()}`}, Icon: 'BoltIcon', new: {}},
    ]);
    const [active, setActive] = useState(0);

    const [contacts, setContacts] = useState([]);

    const clickHandler = (a, e) => {
        setActive(a);
        let indicator = document.querySelector('.indicator');
        indicator.style.top = `${50 * a}px`;
    }

    useEffect(() => {
        axios.get(`https://randomuser.me/api/?inc=picture&results=3`)
            .then(res => {
                const persons = res.data;
                setContacts(persons.results);
            })
    }, [])
   
    return (
        <aside className="sidebar">
            <Link to="/">
                <div id="logo">
                    <Icons.LinkIcon />
                </div>
            </Link>
            <div className="links">
                <ul>
                    {
                        links.map((link, index) => {
                            let Icon = Icons[link.Icon];
                            return (
                                <div key={index}>
                                    <li onClick={(e) => clickHandler(index, e)}><Link className={`${active === index && 'active'} ${link.new && 'new'}`} to={link.url()}><Icon /></Link></li>
                                    <Link to={link.url()} onClick={(e) => clickHandler(index, e)}><span>{link.name}</span></Link>
                                </div>
                                )
                        })
                    }
                </ul>
                <div className="indicator"></div>
            </div>
            <div className="contacts">
                <div className="list">
                    {contacts.map((person, index) => <ContactCircle image={person.picture.thumbnail} key={index} />)}
                </div>
                <button id="add-btn">
                    <Icons.UserPlusIcon />
                </button>
            </div>
        </aside>
    )
}

export default Sidebar
