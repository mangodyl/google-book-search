import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";

class Saved extends Component {
    state = {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                    <Jumbotron>
                        <h1>Google Book Search</h1>
                        <h3>Saved books.</h3>
                    </Jumbotron>
                </Container>
            </div>
            
        )
    }
}

export default Saved;