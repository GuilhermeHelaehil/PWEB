import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Analysis and system development technologist" where="Fatec Sorocaba" from="July 2018" to="Present"/>
                <Widecard title="Mechatronics technician" where="Etec Rubens de Faria e Souza" from="2015" to="2016"/>
                <Widecard title="High School" where="Etec Fernando Prestes" from="2014" to="2016"/>
            </div>
        )
    }
}export default Education