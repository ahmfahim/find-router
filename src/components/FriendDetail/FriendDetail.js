import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = (props) => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});

    useEffect(() => {
        const url = `http://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    const {name, email, website} = friend;
    return (
        <div>
            <h2>Details</h2>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{website}</p>
        </div>
    );
};

export default FriendDetail;