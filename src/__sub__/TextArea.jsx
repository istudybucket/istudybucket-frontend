import React from 'react'

// change to resizable when text reaches a specific length
const TextArea = ({...props}) => {
    return ( 
        <textarea {...props} className="outline-none resize-none block rounded mt-3" name="textfield" id="" cols="40" rows="2">

        </textarea>
    )
}

export default TextArea
