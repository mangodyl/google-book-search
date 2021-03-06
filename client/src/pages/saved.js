import React, { Component } from 'react';
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SavedDiv from "../components/savedDiv";
import Nav from "../components/Nav";
import API from '../utils/API';

let resultStyle = {
    textAlign: 'left'
}

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

    handleUnsave = id => {
        API.deleteSaved(id)
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

                    <Jumbotron>
                        <div style={resultStyle}>
                            <div>
                                {this.state.books.length ? (
                                    this.state.books.map(book => {
                                        return(
                                            <SavedDiv
                                                key={book._id}
                                                title={book.title}
                                                authors={book.author}
                                                description={book.description}
                                                image={book.image}
                                                link={book.link}
                                                _id={book._id}
                                                handleUnsave={this.handleUnsave}
                                            />
                                        )
                                    })
                                ) : (
                                    <h3 className="text-center no-book-font">No saved books yet. Head to the search page to save some.</h3>
                                )}
                            </div>
                        </div>
                    </Jumbotron>
                </Container>
            </div>
            
        )
    }
}

export default Saved;