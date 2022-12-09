import { useEffect, useState } from "react"
import BookControllerApi from "../../api/src/api/BookControllerApi.js"
import BookDto from "../../api/src/model/BookDto.js"

const useAddBook = () => {
    const [isCanceled, setIsCanceled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [posted, setPosted] = useState('')

    const BookController = new BookControllerApi()

    function addbook(author, title) {
        var book = new BookDto()
        book.author = author
        book.title = title

        setIsPending(true)

        try{
            if (book.author=='' || book.title==''){
                setIsCanceled(true)
                setIsPending(false)
                setPosted('')
                throw new Error ('The book needs an author and a title!')
            }

            BookController.addBookUsingPOST(book, function(error, data, response) {
                console.log(error, data, response)
                if (error !== null) {
                    setPosted('Something went wrong!')
                } else {
                    setPosted("You have added a new book!")
                    setIsPending(false);
                    setIsCanceled(true);
                    setError("")
                }
            })
            
        }catch(err){
            if(isCanceled){
                console.log(err)
                setError(err.message)
                setIsPending(false)
            }
            
        }

    }
    useEffect(() => {
        return () => setIsCanceled(true)
    }, [])

    return {error, isPending, addbook, posted}

}
export {useAddBook}