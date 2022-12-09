import { Button } from "primereact/button";
import React from "react";
import { Fragment } from "react";
import useDisplayBorrows from "./useDisplayBorrows";


const AllBorrows = (props) => {
    console.log(props)
    const {handleEdit, handleDelete} = useDisplayBorrows()
    const borrows = props.borrows 

   

}

export default AllBorrows