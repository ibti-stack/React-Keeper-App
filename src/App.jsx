import React from "react"; // so that we can write JSX
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "./notes.js";

function entryNotes(notesTerm) {
     return  <Note
          id = {notesTerm.key}
          title = {notesTerm.title}
          content ={notesTerm.content}
        />
}


function App() {
    return (
      <div>
        <Header></Header>
        {notes.map(entryNotes)}
        <Footer></Footer>
      </div>
    );
  }
  
  export default App;
  