import React, { useState, useEffect } from 'react';
import BookControllerApi from '../../api/src/api/BookControllerApi';
import BorrowControllerApi from '../../api/src/api/BorrowControllerApi';

const useBooks = () => {
    const BookController = new BookControllerApi()
    const BorrowController = new BorrowControllerApi()

    const [books, setBooks] = useState([]);
    const [editBookId, setEditBookId] = useState(0)
    const [view, setView] = useState(false)

    const [reRenderBooks, setReRenderBooks] = useState(true)
    
    
    const displayBooks = () => {
        if(reRenderBooks){
            BookController.getBooksUsingGET(function(error, data){
                if(error !== null){
                    console.log(error)
                }else{
                    setBooks(data)
                    setReRenderBooks(false)
                }  
            })
        }
    }
    
    const handleEditClick = (e, book) => {
        e.preventDefault()
        setEditBookId(book.bookId)
    }    

    const handleSaveClick = (e, book, editAuthor, editTitle) => {
        e.preventDefault()
        var edit = {'author': editAuthor, 'title': editTitle}
        BookController.updateBookUsingPUT(book, edit, function(error, data, response){
            if(error !== null){
                console.log(response)
                console.log("something went wrong")
            }else{
                setEditBookId(null)
                setReRenderBooks(true)
                displayBooks()
            }
        })
        setEditBookId(null)
    }

    const handleCancelClick = (e) => {
        e.preventDefault()
        setEditBookId(null)
    }

    const handleDeleteClick = (e, book) => {
        e.preventDefault()
        if(book.borrows !== null){
            BorrowController.deleteAllByBookUsingDELETE(book.bookId, function(error){
                if(error!==null){
                    console.log(error)
                }else{
                    BookController.deleteBookUsingDELETE(book.bookId, function(error){
                        if(error === null){
                            setReRenderBooks(true)
                            displayBooks()
                        }else{
                            console.log(error)
                        }
                    })
                }
            })
        }else{
            BookController.deleteBookUsingDELETE(book.bookId, function(error){
                if(error === null){
                    setReRenderBooks(true)
                    displayBooks()
                }else{
                    console.log(error)
                }
            })
        }
        
    }

    const handleViewClick = (e, book) => {
        e.preventDefault()
        setEditBookId(book.bookId)
        setView(true)
    }
    return {books, editBookId, displayBooks, handleEditClick, handleSaveClick, handleCancelClick, handleDeleteClick, handleViewClick, view}
}
export {useBooks}
