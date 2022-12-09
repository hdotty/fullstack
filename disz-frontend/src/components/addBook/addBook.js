import {InputText} from "primereact/inputtext"
import {Button} from "primereact/button"
import { useState } from "react";
import { Link } from "react-router-dom";
import {useAddBook} from "./useAddBook.js"
import Header from "../header.js";
import useGetLoggedInUser from "../getLoggedInUser.js";

const AddBook = () => {
    const [author, setAuthor] = useState ('')
    const [title, setTitle] = useState('')  
    const {addbook, isPending, error, posted} = useAddBook()

    const {getLoggedInUser, user} = useGetLoggedInUser()
    getLoggedInUser()

    const handleSubmit = (e) => {
        addbook(author, title)
        e.preventDefault()
        setAuthor('')
        setTitle('')
    }

    return(
        <div>
            <Header user={user} />
        <div className="flex align-items-center justify-content-center">
            <form onSubmit={(e)=>handleSubmit(e)} className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                <div className="text-center mb-5">
                    <img src="/disz_logo.jpg" alt="hyper" height={300} className="mb-3" />
                    <div className="text-900 text-3xl font-medium mb-3">Add a book!</div>
                    <span className="text-600 font-medium line-height-3">You need to add the author and the title of the book!</span>
                </div>

                <div>
                    <label htmlFor="author" className="block text-900 font-medium mb-2">Author</label>
                    <InputText onChange={(e)=>setAuthor(e.target.value)} id="author" value={author} type="text" className="w-full mb-3" />

                    <label htmlFor="title" className="block text-900 font-medium mb-2">Title</label>
                    <InputText onChange={(e)=>setTitle(e.target.value)} id="title" value={title} type="text" className="w-full mb-3" />

                    {error && <div className="text-600 font-medium line-height-3">{error}</div>}
                    <div className="text-600 font-medium line-height-3">{posted}</div>
                    <br/>

                    {!isPending && <Button type="submit" label="Add" icon="pi pi-user" className="w-full" /> }
                    {isPending && <Button label="loading" icon="pi pi-user" className="w-full" />}
                    <br></br> <br></br>
                    <Link className='nav-link' to="/"><Button icon="pi pi-user" className="w-full" label="Back to Home" /></Link>
                </div>
            </form>
        </div>
        </div>
    )
}

export default AddBook
