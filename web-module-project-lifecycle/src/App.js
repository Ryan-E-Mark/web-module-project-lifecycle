import React from 'react';
import './App.css';
import FollowerList from './components/FollowerList';
import axios from 'axios';

class App extends React.Component {

  state = {
    me: [],
    friends: []
  }

  // Getting my github info
  componentDidMount() {
    axios.get('https://api.github.com/users/Ryan-E-Mark')
    .then(resp => {
      console.log(resp);
      this.setState({
        ...this.state,
        me: resp.data
      })
    }).catch(err => console.log(err))
  }

  // Getting my github follower's info
  componentDidMount() {
    axios.get('https://api.github.com/users/Ryan-E-Mark/followers')
  }


  render() {
    return(
      <div>
        <h1>Hi i'm Ryan</h1>
        <div className="my-card">
          <div>
            {this.state.me.name}
          </div>
          <div>
            {this.state.me.location}
          </div>
          <div>
            {this.state.me.html_url}
          </div>
        </div>
        <FollowerList />
      </div>
    )
  }
}

export default App;
