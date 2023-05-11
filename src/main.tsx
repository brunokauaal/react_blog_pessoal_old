import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './paginas/home/Home' //./ e o caminho relativo ele vai começar olhar apartir do lugar que ele esta

ReactDOM.render(

    <React.StrictMode>

       <Home />
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement

);