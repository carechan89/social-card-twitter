import React from 'react';
import ReactDOM from "react-dom";
import './App.css';


const myUsernames = ['username-accenture_us.json', 'username-cristiano.json',
                     'username-rihanna.json', 'username-twitterdev.json'];

function MyApp() {
    let arr = [];

    for (let i=0; i < myUsernames.length; ++i) {
        let path = myUsernames[i];
        let data = require("./" + path);

        let joined_date = Date.parse(data.created_at);
        let joined_date_object = new Date(joined_date);
        let joined_year = joined_date_object.getFullYear();
        let joined_month = joined_date_object.toLocaleString('default', {month: 'long'});
        let joined_date_string = joined_month + ' ' + joined_year;

        let obj = {
            date: joined_date_string,
            info: data
        };
        arr.push(obj);
    }
    return (
        <SocialCard props={arr} />
    );
}

function SocialCard({ props }) {
    return props.map(prop => (
        <div className="card">
            <img src={prop.info.profile_banner_url} className="banner" />
            <img src={prop.info.profile_image_url} className="pro-pic" />
            {prop.info.verified &&
                <img className="verified" src={'https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg'} />
            }
            <button className="follow-button">Follow</button>
            <h1 className="name">{prop.info.name}</h1>
            <h2 className="screen-name">@{prop.info.screen_name}</h2>
            <p className="description">{prop.info.description}</p>
            <p className="info-description">
                <img className="icon" src={require('./images/location-icon.svg')} />{prop.info.location} &nbsp;&nbsp;
                <img className="icon" src={require('./images/url-icon.png')} />{prop.info.url} &nbsp;&nbsp;
                <img className="icon" src={require('./images/bday-icon.png')} />Born date &nbsp;&nbsp;
                <img className="icon" src={require('./images/calendar-icon.png')} />Joined {prop.date} &nbsp;&nbsp;
            </p>
            <p className="info-description">{prop.info.friends_count} Following {prop.info.followers_count} Followers</p>
        </div>
    ));
}

ReactDOM.render(
    <MyApp />,
    document.getElementById('root')
);
