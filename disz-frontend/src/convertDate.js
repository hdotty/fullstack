import React from "react"

const convertDate = () => {
    const convertDatee = (dateTime) => {
        const offset = dateTime.getTimezoneOffset()
        const dateTimeWithoutOffset = new Date(dateTime.getTime() - offset * 60 * 1000)
        return dateTimeWithoutOffset.toISOString().split('T')[0]
    }
    return {convertDatee}    
}

export default convertDate