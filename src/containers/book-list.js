import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class Booklist extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return(
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }
    render () {
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

//to take application state as an argument
function mapStateToProps(state) {
    //whatever is returned will show up as props inside of Booklist
    //every time state container changes, it will rerender with a new list of books
    return {
        books: state.books
    }
}

//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    //whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}


//wheneve the application state changes the object in the state function will be
//assigned as props to the component 
//Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook.
//Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);