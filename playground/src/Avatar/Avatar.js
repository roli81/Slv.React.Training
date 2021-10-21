import React from 'react';


export default function Avatar(props) {
    return (
        <img 
        className="avatar"
        src={props.user.src}
        alt={props.user.alt} 
        />
    );
}