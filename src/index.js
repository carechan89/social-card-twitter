import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import {getData} from './services';


/*
services - components vs services
            used for business logic aspects including fetching/getting data from outside sources to decouple
            UI logic from APIs (so any API change does not affect your component structure)

            myApp initialization - get twitter data function
*/

// TODO: see prop types library to define data structure for the data pulled in from API

function MyApp() {
    let arr = getData();
    return (
        <Deck twitterCards={arr} />
    );
}


function Deck({ twitterCards }) {
    /*original was an implicit return*/

    return twitterCards.map(twitterCard /*parentheses with multiple*/ => {
        // transform data prior to component: twitterCard.info.name = "Bob";
        // optionally show things w/ filters
        // ex: verified deck that only shows verified cards
        // TODO: pass in specifics, more than just data
        return (<SocialCard data={twitterCard} />);
    });

    // /* alternative - return the map array as JSX to react
    //
    // let socialCards = props.map(prop => {
    //     let obj = {
    //
    //     }
    //     return <SocialCard props={prop}>
    // });
    //
    // return socialCards;
    // */
}


/* prop types/typescript
 avoid verbose names with API data - if the data ever changes you would need to change the variable name, decouple from API so you can reuse components*/

function SocialCard({data}) {
    let spanStyle = {
        color: 'black',
        fontWeight: 'bold'
    }
    /*shouldn't have a mapping in the social card, should put mapping in the deck level and pass it as props to the social card*/
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
                <img className="icon" src={require('./images/url-icon.png')} /><a href={data.url}>{data.url}</a>&nbsp;&nbsp;
                <img className="icon" src={require('./images/bday-icon.png')} />Born date &nbsp;&nbsp;
                <img className="icon" src={require('./images/calendar-icon.png')} />Joined {data.date} &nbsp;&nbsp;
            </p>
            <p className="info-description"><span style={ spanStyle }>{data.following}</span> Following <span style={ spanStyle }>{data.followers}</span> Followers</p>
        </div>
    );
}



ReactDOM.render(
    <MyApp />,
    document.getElementById('root')
);
