import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { updatenote } from '../../store/actions/noteAction'
import useInput from '../../customhook/useInput'
import { useHistory } from 'react-router-dom'

const EditForm = (props) => {
    const note = useSelector(state => state.note)
console.log('edit form', note)

const [title,bindTitle,resetTitle]= useInput(note.title)
const [content,bindContent,resetContent]= useInput(note.content)
const id = props.match.params.id
const dispatch = useDispatch()
const history = useHistory()
const handlesubmit = (e)=>{
   alert('note submitted')
   console.log({title,content})
  dispatch(updatenote({id,title,content}))
   resetTitle()
   resetContent()
   history.push('/')
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
      <label className="active" htmlFor="note-content">Note Content</label>
      </div>
        </form>
        <button className="btn green" onClick={handlesubmit}>Update</button>
    </div>
)
}

export default EditForm
