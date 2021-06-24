import React from 'react';
import { useState, useEffect } from 'react';
import Friend from '../Friend/Friend';



const Home = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        const url = 'http://jsonplaceholder.typicode.com/users'
        fetch(url)
            .then(response => response.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <div>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    );
};

export default Home;