import React from 'react'
import { deleteNote, togglefavorite } from '../../store/actions/noteAction'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Note = ({note}) => {
   const dispatch = useDispatch()
   const deletehandler = ()=>{
       dispatch(deleteNote(note))
   }
   const togglefavoritehandler = ()=>{
    dispatch(togglefavorite(note))
}
const editnotehandler = ()=>{
    dispatch({type:'EDIT_NOTE',payload: note})
}
const heartmarkup = note.favorite ? 'favorite' : 'favorite_border'
    return (
        <div className="note white">
           <div className="right-align">
               <i className="material-icons red-text" style={{cursor:'pointer'}}onClick={togglefavoritehandler}>{heartmarkup}</i>
               <i className="material-icons" style={{cursor:'pointer'}} onClick={deletehandler}>delete</i>
           </div>
           <Link to={"/note/" + note.id}>
           <h5 className="black-text">{note.title}</h5>
           </Link>
           <p className="truncate">{note.content}</p>
           <p className="grey-text">{moment(note.createdAt.toDate()).fromNow()}   </p>
           <div className="right-align">
               <Link to ={`/editform/${note.id}`}>
               <i className="material-icons black-text" onClick={editnotehandler}>edit</i>
               </Link>
               </div>
        </div>
    )
}

export default Note
