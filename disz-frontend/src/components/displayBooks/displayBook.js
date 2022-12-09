import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Fragment } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useBooks } from "./useDisplayBooks";
import BookPage from "../bookPage/bookPage";
import useGetLoggedInUser from "../getLoggedInUser";
import Header from "../header";

const Book = () => {

    const {getLoggedInUser, user} = useGetLoggedInUser()

    const [editAuthor, setEditAuthor] = useState('')
    const [editTitle, setEditTitle] = useState('')
    const {books, editBookId, displayBooks, handleEditClick, handleSaveClick, handleCancelClick, handleDeleteClick, handleViewClick, view} = useBooks()

    getLoggedInUser()
    displayBooks()
    
    return (
        <div>
            <Header user={user} /><br/>
        <div className="flex align-items-center justify-content-center">
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6 ">
            {view ? 
                <BookPage editBookId={editBookId}/> :
                <table className="table table-striped" >
                <thead>
                    <tr>
                        <th scope="col" >Author</th>
                        <th scope="col">title</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, id)=>(
                        <Fragment key={id}>
                            {user!==undefined && user.admin && (editBookId === book.bookId) ? 
                            (<tr>
                                <td><InputText onChange={(e)=>setEditAuthor(e.target.value)} id="author" value={editAuthor} type="text" placeholder={book.author}/></td>
                                <td><InputText onChange={(e)=>setEditTitle(e.target.value)} id="title" value={editTitle} type="text" placeholder={book.title}/></td>
                                <td><Button type="button"  onClick={(e)=>{handleSaveClick(e, book, editAuthor, editTitle)}}>Save</Button></td>
                                <td><Button type="button" onClick={(e)=>handleCancelClick(e)} >Cancel</Button></td>
                                <td></td>
                                
                            </tr>) : 
                            (<tr>
                                <td>{book.author}</td>
                                <td>{book.title}</td>
                                {user!==undefined && user.admin && <td><Button type="button" onClick={(e)=>handleEditClick(e, book)}>Edit</Button></td>}
                                {user!==undefined && user.admin && <td><Button type="button" onClick={(e)=>{handleDeleteClick(e, book); displayBooks();}}>Delete</Button></td>}
                                <td><Button type="button" onClick={(e)=>handleViewClick(e,book)} >View</Button></td>
                            </tr>
                            )}
                        </Fragment>
                    ))}
                </tbody>
            </table>
            }
            </div>
        </div>
        </div>

    )
}

export default Book