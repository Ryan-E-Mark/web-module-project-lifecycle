import React from 'react';
import './App.css';
import FollowerList from './components/FollowerList';
import axios from 'axios';

class App extends React.Component {

  state = {
    me: []
  }

  // Getting my github info & Followers
  componentDidMount() {
    axios.get('https://api.github.com/users/Ryan-E-Mark')
    .then(resp => {
      this.setState({
        ...this.state,
        me: resp.data
      })
    }).catch(err => console.log(err))
  }



  render() {
    return(
      <div>
        <h1>Hi i'm Ryan</h1>
        <div className="my-card">
          <div className="my-av">
            <img src={this.state.me.avatar_url} alt="my github avatar" />
          </div>
          <div className="my-info">
            <h3>{this.state.me.name}</h3>
            <p>Location: {this.state.me.location}</p>
            <a href={this.state.me.html_url}>Click here to check out my GitHub!</a>
          </div>
        </div>
        <FollowerList />
      </div>
    )
  }
}

export default App;
