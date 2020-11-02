import React, { Component } from 'react';
import Social from '../components/Social';
class Contact extends Component {
    render() {
        return (
        <div className="condiv">
            <h1 className="subtopic">Get in touch with me</h1>
            <h3>Email           :   guilherme.helaehil@gmail.com</h3>
            <h3>instagram       :   @guilhermehelaehil</h3>
            <h3>instagram hobby :   @the_mini_hobbyist</h3>
            <Social />
        </div>
        )
    }
}export default Contact