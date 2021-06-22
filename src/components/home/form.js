import React from 'react'
import useInput from '../../customhook/useInput'
import { addNote } from '../../store/actions/noteAction'
import { useDispatch } from 'react-redux'

const Form = () => {
    const [title,bindTitle,resetTitle]= useInput()
    const [content,bindContent,resetContent]= useInput()
    const dispatch = useDispatch()
    const handlesubmit = (e)=>{
       alert('note submitted')
       console.log({title,content})
      dispatch(addNote({title,content}))
       resetTitle()
       resetContent()
    }
    return (
        <div className="section">
            <form onSubmit={handlesubmit} className="white">
              <h5 className= 'grey-text text-darken-3'>New Note</h5>
              
    <div className="input-field ">
      <input id="note-title" type="text" className="validate" {...bindTitle} />
      <label className="active" htmlFor="note-title">Note Title</label>
    </div>
    <div className="input-field">
          <textarea id="note-content" className="materialize-textarea" {...bindContent}></textarea>
          <label htmlFor="note-content">Note Content</label>
          </div>
            </form>
            <button className="btn green" onClick={handlesubmit}>Add</button>
        </div>
    )
}

export default Form
