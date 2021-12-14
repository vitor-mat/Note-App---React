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

  let [activeBurger1, setActiveBurger1] = useState("")
  let [activeBurger2, setActiveBurger2] = useState("")
  let [activeBurger3, setActiveBurger3] = useState("")

  let [showAsideMobile, setShowAsideMobile] = useState("")

  let [charactersTitleMax, setCharactersTitleMax] = useState(8);

  useEffect(() => {
    getAllNotes()
  }, [])

  function activeBurgerFunction(){
    if(!activeBurger1){
      setActiveBurger1(activeBurger1 = "active-burger-1")
      setActiveBurger2(activeBurger2 = "active-burger-2")
      setActiveBurger3(activeBurger3 = "active-burger-3")

      setShowAsideMobile(showAsideMobile = "show-aside-mobile")
    }else{
      setActiveBurger1(activeBurger1 = "")
      setActiveBurger2(activeBurger2 = "")
      setActiveBurger3(activeBurger3 = "")

      setShowAsideMobile(showAsideMobile = "")
    }
  }

  function getAllNotes() {
    setNotesStorage(notesStorage = JSON.parse(localStorage.getItem("notes-app-storage") || '[]'))

    setCardNotesArray(cardNotesArray = notesStorage)

    setTitleNotesList(titleNotesList = cardNotesArray.map((value, index) => {
      return (<li key={value.id}> <span id={value.id} onClick={(e) => {
        selectNote(e)
        activeBurgerFunction()
      }}>{value.title}</span> <span className="icon-lixeira-span-list-aside"><img onClick={(e) => {
        removeNotePermanently(e)
      }} id={value.id} className="lixeira-icon" src={lixeiraIconImg} alt="plus button" /></span></li>)
    }).reverse())

    return notesStorage.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1
    })
  }

  const selectNote = (e) => {
    const noteSelected = cardNotesArray.find((value, index) => value.id == e.target.id)
    setTitleNoteSelected(titleNoteSelected = noteSelected.title)
    setCharactersTitleMax(charactersTitleMax = noteSelected.title.length)
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
    setTitleNoteSelected(titleNoteSelected = notesStorage[notesStorage.length - 1].title)
    setCharactersTitleMax(charactersTitleMax = notesStorage[notesStorage.length - 1].title.length)
    setBodyNoteSelected(bodyNoteSelected = notesStorage[notesStorage.length - 1].body)
    setIdNoteSelected(idNoteSelected = notesStorage[notesStorage.length - 1].id)
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

      setCharactersTitleMax(charactersTitleMax = e.target.value.length)

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
        return false
      }
      return true
    })

    localStorage.setItem("notes-app-storage", JSON.stringify(notesFilted))

    getAllNotes()

    setTitleNoteSelected(titleNoteSelected = "Notes App")
    setIdNoteSelected(idNoteSelected = "")
    setBodyNoteSelected(bodyNoteSelected = "Selecione uma Nota para utilizar o app...")

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
        <div className={`burger ${activeBurger1}`} onClick={() => activeBurgerFunction()}></div>
        <div className={`burger ${activeBurger2}`} onClick={() => activeBurgerFunction()}></div>
        <div className={`burger ${activeBurger3}`} onClick={() => activeBurgerFunction()}></div>
      </div>
      <div id="characters-title-max-div">
        <span>{charactersTitleMax}/29</span>
      </div>
      <aside className={showAsideMobile}>
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
