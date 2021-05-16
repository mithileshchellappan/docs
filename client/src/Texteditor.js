import React,{useEffect} from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

export default function Texteditor() {
    useEffect(() => {
        new Quill('#container',{theme:'snow'})
    }, [])
    return (
        <div id="container">
            
        </div>
    )
}
