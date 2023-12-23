import React from 'react'
import logo from '../images/logo2.png'
export const Header = () => {
  return (

    <header>
        <nav className='nav-bar'>
            <div className='imagetext'>
            <img src={logo} className='logo' alt="" />
            <h1>Summarizer</h1>
            </div>

            <button className='button-35' onClick={()=>window.open('https://github.com/himanshusonixd/articlesummarizer.git')}>Github</button>

            </nav>

            <h1>
            Summarize Articles with <span className='specialtext'>OpenAI</span>
            </h1>
        <p>
        Summarize any website with a click of a button <br />
        AI Text Summarizer shortens the text while preserving all the main points that the text contains.
        </p>

    </header>
  )
}
