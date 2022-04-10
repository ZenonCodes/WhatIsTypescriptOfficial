import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Word from './components/Word';
import {WordType} from "./types/word.types";

function App() {


    const [word, setWord] = useState([])
    const [error,setError] = useState([])

    useEffect(() =>{
        const form = document.getElementById('defineform') as HTMLFormElement;
        document.body.addEventListener('submit', async function(event){
            const url = ('https://api.dictionaryapi.dev/api/v2/entries/en/');
            const formData = new FormData(form);
            const text = formData.get('defineword') as string;
             fetch(url + text)
                 .then(response => response.json())
                 .then(res => setWord(res))
                // .then(res => setWord(res))
                 .catch(err => console.log(err))
            event.preventDefault();
        });

    }, [])

  return (
    <div className="App">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Look It Up!</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://dictionaryapi.dev">Our API</a>
                        </li>
                    </ul>
                    <form className="d-flex" id="defineform">
                        <input className="form-control me-2" type="search" name="defineword" placeholder="What word?"
                               aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Define</button>
                    </form>
                </div>
            </div>
        </nav>
        <main className="container">
            <div className="bg-light p-5 rounded">
                <h1>Definition</h1>
                <p className="lead">{word.map((word  => word.word))}</p>
                <ul className="list-unstyled">

                    {word.map((word =>
                            <React.Fragment>
                                <li key = {word.phonetic1}> {word.phonetic}</li>
                                <p> </p>
                                <li key = {word.partOfSpeech}><i>{word.meanings[0].partOfSpeech}</i></li>
                                <li key = {word.meanings}><b>Definition : </b>{word.meanings[0].definitions[0].definition}</li>
                                <li key = {word.meanings2}><b>Synonyms : </b>{word.meanings[0].definitions[0].synonyms != 0 ? word.meanings[0].definitions[0].synonyms : "There are none for this word in this dictionary." } </li>
                                <li key = {word.meanings3}><b>Antonyms : </b>{word.meanings[0].definitions[0].antonyms.length != 0 ? word.meanings[0].definitions[0].antonyms : "There are none for this word in this dictionary." }</li>
                                <p> </p>
                                <li key = {word.partOfSpeech2}><i>{word.meanings[1].partOfSpeech}</i></li>
                                <li key = {word.meanings4}><b>Definition : </b>{word.meanings[1].definitions[0].definition}</li>
                                <li key = {word.meanings5}><b>Synonyms : </b>{word.meanings[1].definitions[0].synonyms != 0 ? word.meanings[1].definitions[0].synonyms : "There are none for this word in this dictionary."}</li>
                                <li key = {word.meanings6}><b>Antonyms : </b>{word.meanings[1].definitions[0].antonyms != 0 ? word.meanings[1].definitions[0].antonyms : "There are none for this word in this dictionary."}</li>
                            </React.Fragment>
                    ))}

                    {/*<li>{word.map((word => word.meanings[0].partOfSpeech))}</li>*/}
                    {/*<li>{word.map((word => word.meanings[0].definitions[0].definition))}</li>*/}
                    {/*<li>{word.map((word => word.meanings[0].definitions[0].example))}</li>*/}
                    {/*<li>{word.map((word => word.meanings[0].definitions[0].example))}</li>*/}
                    {/*<li>Nested lists: (maybe synonyms and antonyms?)*/}
                    {/*    <ul>*/}
                    {/*        <li>are unaffected by this style</li>*/}
                    {/*        <li>will still show a bullet</li>*/}
                    {/*        <li>and have appropriate left margin</li>*/}
                    {/*    </ul>*/}
                    {/*</li>*/}
                    {/*<li>This may still come in handy in some situations.</li>*/}
                </ul>
            </div>
        </main>


    </div>
  );
}

export default App;
