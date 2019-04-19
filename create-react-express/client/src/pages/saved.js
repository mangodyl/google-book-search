import React, { Component } from 'react';
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import API from '../utils/API';

class Saved extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        API.getSaved()
          .then(res => this.setState({ books: res.data}))
          .catch(err => console.log(err))
    }

    deleteBook = id => {
        API.deleteBook()
          .then(res => this.loadBooks())
          .catch(err => console.log(err))
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