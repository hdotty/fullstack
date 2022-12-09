import React, {useState} from "react";
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/primereact.min.css';
import useAddBorrow from './useAddBorrow'
import { Calendar } from 'primereact/calendar';
import { Button } from "primereact/button";
import convertDate from "../../convertDate";
import useGetLoggedInUser from "../getLoggedInUser";
import Header from "../header";
 

const AddBorrow = (props) => {
    const book = props.book
    const {convertDatee} = convertDate()
    const {getAllPersons, persons, handleSubmit, success} = useAddBorrow()
    const [person, setPerson] = useState()
    const [date, setDate] = useState()

    const {getLoggedInUser, user} = useGetLoggedInUser()
    getLoggedInUser()

    getAllPersons();
    return(
        <div>
            {success ? 
                <div>{person.firstName} {person.lastName} has borrowed this book.</div> :
                <div>
                    <label className="block text-900 font-medium mb-2">Email</label>
                        <Dropdown
                        optionLabel="email"
                        value={person} 
                        options={persons} 
                        onChange={(e) => setPerson(e.value)} 
                        placeholder="Who will borrow it..?"/><br/><br/>

                    <label className="block text-900 font-medium mb-2">From</label>
                    <Calendar value={date} onChange={(e) => setDate(convertDatee(e.value))}></Calendar><br/><br/>

                    <Button type="button" className="w-full" label="Borrow" onClick={(e)=>handleSubmit(e, person, book, date)} />
                </div>
            }
        </div>
    )
}
export default AddBorrow