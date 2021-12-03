import { useEffect, useState } from "react";

import "./style.scss"

import plusButtonImg from "./assets/plus_button.svg";
import lixeiraIconImg from "./assets/lixeira_icon.svg";
function App() {

  let [cardNotesArray, setCardNotesArray] = useState([])
  let [titleNotesList, setTitleNotesList] = useState([])
  let [notesStorage, setNotesStorage] = useState([])

  let [titleNoteSelected, setTitleNoteSelected] = useState("Notes App")
  let [idNoteSelected, setIdNoteSelected] = useState("")
  let [bodyNoteSelected, setBodyNoteSelected] = useState("Selecione uma Nota para utilizar o app...")

  let [blockEnterFunctionValue, setBlockEnterFunctionValue] = useState(true)

  useEffect(() => {
    getAllNotes()
  }, [])


  function getAllNotes() {
    setNotesStorage(notesStorage = JSON.parse(localStorage.getItem("notes-app-storage") || '[]'))

    setCardNotesArray(cardNotesArray = notesStorage)

    setTitleNotesList(titleNotesList = cardNotesArray.map((value, index) => {
      return (<li key={value.id}> <span onClick={selectNote} id={value.id} >{value.title}</span> <span className="icon-lixeira-span-list-aside"><img onClick={removeNotePermanently} id={value.id} className="lixeira-icon" src={lixeiraIconImg} alt="plus button" /></span></li>)
    }).reverse())

    return notesStorage.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1
    })
  }

  const selectNote = (e) => {
    const noteSelected = cardNotesArray.find((value, index) => value.id == e.target.id)
    setTitleNoteSelected(titleNoteSelected = noteSelected.title)
    setBodyNoteSelected(bodyNoteSelected = noteSelected.body)
    setIdNoteSelected(idNoteSelected = e.target.id)
  }

  async function saveNotes() {

    notesStorage.push({
      id: Math.floor(Math.random() * 1000000),
      title: "new title",
      body: "",
      update: new Date()
    })

    localStorage.setItem("notes-app-storage", JSON.stringify(notesStorage))
    getAllNotes()
  }

  async function updateNotes(e) {

    if (blockEnterFunctionValue) {

      if (titleNoteSelected === "Notes App") {
        alert("Selecione uma nota para poder editar")
        return;
      }

      if(e.target.value.length > 29){
        alert("Número máximo de caracteres atingido!")
        return;
      }

      setTitleNoteSelected(titleNoteSelected = e.target.value)

      const notesFiltedForUpdate = await removeNoteUpdate(idNoteSelected)

      notesFiltedForUpdate.push({
        id: idNoteSelected,
        title: titleNoteSelected,
        body: bodyNoteSelected,
        update: new Date()
      })

      localStorage.setItem("notes-app-storage", JSON.stringify(notesFiltedForUpdate))
      getAllNotes()

    }
  }

  async function updateNotesBody(e) {

    if (titleNoteSelected === "Notes App") {
      alert("Selecione uma nota para poder editar")
      return;
    }
    setBodyNoteSelected(bodyNoteSelected = e.target.value)

    const notesFiltedForUpdate = await removeNoteUpdate(idNoteSelected)

    notesFiltedForUpdate.push({
      id: idNoteSelected,
      title: titleNoteSelected,
      body: bodyNoteSelected,
      update: new Date()
    })

    localStorage.setItem("notes-app-storage", JSON.stringify(notesFiltedForUpdate))
    getAllNotes()

  }

  const removeNoteUpdate = (idNoteSelected) => {

    const notesFilted = cardNotesArray.filter(value => {
      if (Number(value.id) == Number(idNoteSelected)) {
        return false
      }
      return true
    })

    return notesFilted
  }

  const removeNotePermanently = (e) => {
    setIdNoteSelected(idNoteSelected = e.target.id)

    const notesFilted = cardNotesArray.filter(value => {
      if (Number(value.id) == Number(idNoteSelected)) {
        console.log(value)
        return false
      }
      return true
    })

    localStorage.setItem("notes-app-storage", JSON.stringify(notesFilted))

    getAllNotes()
  }

  async function blockEnterFunction(e) {

    if (e.key == "Enter") {
      await setBlockEnterFunctionValue(blockEnterFunctionValue = false)
      return;
    }

    await setBlockEnterFunctionValue(blockEnterFunctionValue = true)
    return;
  }

  return (
    <div className="container">
      <div id="menu-hamburge">
        <div className="burger"></div>
        <div className="burger"></div>
        <div className="burger"></div>
      </div>
      <aside>
        <div id="cabecalho-aside-div">
          <h1>Notes</h1>
          <img onClick={saveNotes} src={plusButtonImg} alt="plus button" />
        </div>
        <div id="notes-list-div-aside">
          <ul>
            {titleNotesList}
          </ul>
        </div>
      </aside>
      <main>
        <div id="title-note-div">
          <textarea onKeyPress={blockEnterFunction} onChange={updateNotes} value={titleNoteSelected} />
        </div>
        <textarea onChange={updateNotesBody} value={bodyNoteSelected} />
      </main>
      <footer>
        <span> Make By Vitor M. </span>
      </footer>
    </div>
  );
}

export default App;
