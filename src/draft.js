import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import './App.css';
import axios from 'axios';



const myUsernames = ['./username-accenture_us.json', './username-cristiano.json',
                 './username-rihanna.json', './username-twitterdev.json'];

const usernames = [1,2,3,4];

function myApp() {
    return (
        <SocialCard usernames={usernames} />
    );
}

function SocialCard({ usernames }) {

    const listItems = usernames.map((username) => (
        <li>{username}</li>
    ));
    return (
        <ul>{listItems}</ul>
    );

    /*var data = require('./twitter-info.json');
    console.log(data);

    let joined_date = Date.parse(data.created_at);
    let joined_date_object = new Date(joined_date);
    let joined_year = joined_date_object.getFullYear();
    let joined_month = joined_date_object.toLocaleString('default', {month: 'long'});
    let joined_date_string = joined_month + ' ' + joined_year;

    return (
        <div className="card">
            <img src={data.profile_banner_url} className="banner" />
            <img src={data.profile_image_url} className="pro-pic" />
            {data.verified &&
                <img className="verified" src={'https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg'} />
            }
            <button className="follow-button">Follow</button>
            <h1 className="name">{data.name}</h1>
            <h2 className="screen-name">@{data.screen_name}</h2>
            <p className="description">{data.description}</p>
            <p className="info-description">
                <img className="icon" src={require('./images/location-icon.svg')} />{data.location} &nbsp;&nbsp;
                <img className="icon" src={require('./images/url-icon.png')} />{data.url} &nbsp;&nbsp;
                <img className="icon" src={require('./images/bday-icon.png')} />Born date &nbsp;&nbsp;
                <img className="icon" src={require('./images/calendar-icon.png')} />Joined {joined_date_string} &nbsp;&nbsp;
            </p>
            <p className="info-description">{data.friends_count} Following {data.followers_count} Followers</p>
        </div>
    );*/
}

ReactDOM.render(
    <myApp />,
    document.getElementById("root")
);





/*
    const [posts, setPosts] = useState([]);

    React.useEffect(() => {
        axios.get(`https://api.twitter.com/1.1/users/show.json?screen_name=twitterdev`)
            .then(res => {
                console.log(res)
            });
    }, []);
*/
