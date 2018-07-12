import React, { Component } from 'react';
import { connect } from 'react-redux';



class Booklist extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return(
                <li key="book.title" className="list-group-item">{book.title}</li>
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
function mapStateToProps(state){
    //whatever is returned will show up as props inside of Booklist
    return{
        books: state.books
    }
}

//
export default connect(mapStateToProps)(Booklist);