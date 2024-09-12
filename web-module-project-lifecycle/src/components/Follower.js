import React from 'react';
import './Follower.css';

const Follower = (props) => {
    const { follower } = props;

    return(
        <div className="follower-card"> 
            <div className="follower-av">
                <img src={follower.avatar_url} alt="follower avatar" />
            </div>
            <div className="follower-info">
                <h3>{follower.login}</h3>
                <a href={follower.html_url}>Click here to check out my GitHub!</a>
            </div>
        </div>
    )
}

export default Follower;