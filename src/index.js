import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import './App.css';
import axios from 'axios';



function SocialCard() {
    const [posts, setPosts] = useState([]);

    var data = require('./twitter-info.json');
    console.log(data);

    return (
        <div className="card">
            <img src={data.profile_background_image_url} className="banner" />
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
                <img className="icon" src={require('./images/calendar-icon.png')} />Joined date &nbsp;&nbsp;
            </p>
            <p className="info-description">{data.friends_count} Following {data.followers_count} Followers</p>
        </div>
        /*
        <div className="card">
            <img src={require("./images/twitter-banner.png")} className="banner" />
            <img src={require("./images/twitter-logo-profile.png")} className="pro-pic" />
            <button className="follow-button">Follow</button>
            <h1 className="name">name here</h1>
            <h2 className="screen-name">@handle here</h2>
            <p className="description">description here</p>
            <p className="info-description">
                <img className="icon" src={require('./images/location-icon.svg')} />location
                <img className="icon" src={require('./images/url-icon.png')} />URL
                <img className="icon" src={require('./images/bday-icon.png')} />Born date
                <img className="icon" src={require('./images/calendar-icon.png')} />Joined date
            </p>
            <p className="info-description">1,807 Following 507.9 K Followers</p>
        </div>
        */
    );
}

ReactDOM.render(
    <SocialCard />,
    document.getElementById("root")
);
