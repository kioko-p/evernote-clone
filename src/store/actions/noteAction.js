export const addNote = (note)=> {
  return (dispatch,getState,{getFirestore}) =>{
      const firestore = getFirestore()
      firestore.collection('notes')
      .add({
          ...note,
          favorite: false,
          createdAt: new Date()
      }).then(()=>{
          console.log('add note successfully')
      }).catch((err)=>{
          console.log("whooops error:",err)
      })

  }
}
export const deleteNote = (note)=>{
    return (dispatch,getState,{getFirestore}) =>{
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).delete()
      
        .then(()=>{
            console.log('delete note successfully')
        }).catch((err)=>{
            console.log("whooops error:",err)
        })
  
    }  
}
export const togglefavorite = (note)=>{
    return (dispatch,getState,{getFirestore}) =>{
        const favstatus = !note.favorite
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).update({
          favorite: favstatus
        })
      
        .then(()=>{
            console.log('toggle favorite successfully')
        }).catch((err)=>{
            console.log("whooops error:",err)
        })
  
    }  
}
export const updatenote = (note)=>{
    return (dispatch,getState,{getFirestore}) =>{
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).update({
         title: note.title,
         content:note.content
        })
      
        .then(()=>{
            console.log('form update successfully')
        }).catch((err)=>{
            console.log("whooops error:",err)
        })
  
    }  
}