// typically a folder
// any data transformation should go in services, modify info here to return to the frontend
// ajax requests in here (any service calls - http calls)
// error handling is dependent on where you want to do it (catch-all could go in here if any service fails,
// but more likely to have a mixture of both - generic error handlers here, but more detailed error handling elsewhere depending on the case)

// TODO: wrap data in promise and return the promise instead of the data itself so the app logic doesn't need to change when
//       authentication happens
//       eventually can write a build script to handle data depending on how it comes in

const myUsernames = ['username-accenture_us.json', 'username-cristiano.json',
                     'username-rihanna.json', 'username-twitterdev.json'];

export function getData() {
    let arr = [];

    for (let i=0; i < myUsernames.length; ++i) {
        let path = myUsernames[i];
        let data = require("./" + path);

        let joined_date = Date.parse(data.created_at);
        let joined_date_object = new Date(joined_date);
        let joined_year = joined_date_object.getFullYear();
        let joined_month = joined_date_object.toLocaleString('default', {month: 'long'});
        let joined_date_string = joined_month + ' ' + joined_year;

        let num_following = NumberFormatter(data.friends_count);
        let num_followers = NumberFormatter(data.followers_count);

        let obj = {
            ...data,
            date: joined_date_string,
            following: num_following,
            followers: num_followers
        };
        arr.push(obj);
    }

    return arr;
}

function NumberFormatter(num) {
    if (num > 999 && num < 1000000) {
        return (num/1000).toFixed(1) + 'K';
    } else if (num > 1000000) {
        return (num/1000000).toFixed(1) + 'M';
    }
    return num;
}
