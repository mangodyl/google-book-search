import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";

let searchStyle = {
    textAlign: 'left'
}

class Search extends Component {
    state = {
        books: []
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
                        <h3>Find books. Save books. Cook books.</h3>
                        <h5>I don't judge...</h5>
                    </Jumbotron>

                    <Jumbotron >
                        <div style={searchStyle}>
                            <h3>Search results:</h3>
                            <div>

                            </div>
                        </div>
                        
                    </Jumbotron>
                </Container>
            </div>
            
        )
    }
}

export default Search;