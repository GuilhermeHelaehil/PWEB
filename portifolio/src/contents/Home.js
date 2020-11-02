import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/me.png';
import Social from '../components/Social';
class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic"></img>
                <br></br>
                <ReactTypingEffect className="typingeffect" text={['I am Guilherme helaehil','I am a developer','I am a hobbyist']} speed={100} eraseDelay={700}/>
                <Social />
            </div>
        )
    }
}
export default Home