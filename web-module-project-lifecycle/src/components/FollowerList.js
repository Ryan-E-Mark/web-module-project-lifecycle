import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {
    render() {
        return(
            <div>
                <h3>Followers in here</h3>
                <Follower />
            </div>
        )
    }
}

export default FollowerList;