import React,{useState, useEffect, useCallback} from 'react';
import GithubButton from 'react-github-btn';
import './Header.css'
import Toggle from './Toggle';
import {keepTheme} from '../Utils/theme'
function Header() {
  const theme=localStorage.getItem('theme')
  const [togClass, setTogClass]=useState('dark')

  const callback=useCallback((theme)=>{
    setTogClass(theme)
  },[setTogClass])

  useEffect(()=>{
    keepTheme()
      const storedTheme=localStorage.getItem('theme')
      setTogClass(storedTheme)
    },[togClass])

  return (
    <div className="header">
      <h1>
       Emoji Search <span role="img" aria-label="Unicorn Emoji">🦄</span>
      </h1>
      <p>
       A Simple emoji Search tool made with ReactJS.
      </p>
      <p className="github">
       <GithubButton
       href="https://github.com/ranashashank/react-emoji.git"
       data-color-scheme={`no-preference: ${theme}; light: ${theme}; dark: ${theme};`}
       data-icon="octicon-star" data-size="large" data-show-count="true"
       aria-label='Star ranashashank' >Star</GithubButton>
      &nbsp;&nbsp;
      <GithubButton
       href="https://github.com/ranashashank/react-emoji.git"
       data-color-scheme={`no-preference: ${theme}; light: ${theme}; dark: ${theme};`}
       data-icon="octicon-star" data-size="large" data-show-count="true"
       aria-label='Star ranashashank' >Star</GithubButton>
      </p>
      <div className="container">
        <Toggle parentCallback={callback} />
        <p className="theme-info">
          Switch to your preferred theme.
        </p>
      </div>
    </div>
  )
}

export default Header