import React from 'react';
import axios from 'axios';
import Follower from './Follower';

class FollowerList extends React.Component {

    state = {
        friends: []
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/Ryan-E-Mark/followers')
        .then(resp => {
        // console.log(resp);
        this.setState({
            ...this.state,
            friends: resp.data
        })
        }).catch(err => console.log(err))
    }
    

    render() {
        return(
            <div>
                <h2>My Friends!</h2>
                {this.state.friends.map(friend => {
                    return <Follower follower={friend} key={friend.id}/>
                })}
                
            </div>
        )
    }
}

export default FollowerList;