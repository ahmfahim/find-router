import React from 'react';
import {Link} from 'react-router-dom'

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const styles={
        border:'1px solid purple',
        margin:'20px',
        padding:'20px',
        borderRadius:'10px'
    }

    return (
        <div style={styles}>
            <h1>Name: {name}</h1>
            <h5>Email: {email}</h5>
            <button>
                <Link to={`/FriendDetail/${id}`}>Show Details</Link>
            </button>
        </div>
    );
};

export default Friend;