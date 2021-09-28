import React from 'react';

const Follower = (props) => {
    const { follower } = props;

    return(
        <div className="follwer-card"> 
            <img src={follower.avatar_url} alt="follower avatar" />
            <div>
                {follower.login}
            </div>
            <div>
                {follower.html_url}
            </div>
        </div>
    )
}

export default Follower;