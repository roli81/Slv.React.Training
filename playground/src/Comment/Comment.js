import React from 'react';
import UserInfo from '../UserInfo/UserInfo';

export default function Comment(props) {

    return (
        <div className="Comment">
            <div className="UserInfo">
                <UserInfo user={props.author} />
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {props.date}
            </div>
        </div>
    );
}