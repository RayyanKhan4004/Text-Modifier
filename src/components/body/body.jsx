import React from 'react'
import {useState} from 'react'
import './body.css'
export default function body(props) {
  // to change text to upper case start... \\
  const [text , changedText] = useState('type here')
  const  onchangeText = (e)=>{ changedText(e.target.value)}
 const toUpperCase = ()=>{ changedText(text.toUpperCase())}
 // upper case end.....\\
 //to lower case \\
 const TOlowerCase = ()=>{ changedText(text.toLowerCase())}
 // to lower case end \\
 // clear \\
 const clear = ()=>{changedText('')}
 // clear end\\
 // remove unwanted space\\
const  removeUnwantedSpace  = () =>{changedText(text.split(' ').filter(i => i !== '').join(' '))}
 // remmove all spaces
 const  removeAllSpace = ()=>{ changedText(text.replace(/\s+/g, ' '))}
// copy text 
const copyText = ()=>{text.select
navigator.clipboard.writeText(text)
document.querySelector('.hidden').style.display = `inline` 
setTimeout(() => {
  document.querySelector('.hidden').style.display = `none` 
}, 3000);
}
//////////////////////////
// first latter captal
const  istcap = ()=> changedText(text.split(' ').map(e=> e.charAt(0).toUpperCase() + e.slice(1) ).join(' '))
/////////////////////////////////////////
  return (
    <div>
      <textarea name="textarea" className='textArea' onChange={onchangeText} value= {text} cols="30" rows="10"></textarea>
      <div>
      <button onClick={toUpperCase}>TOupprCase</button>
      <button onClick={TOlowerCase}>TOlowerCase</button>
      <button onClick={clear}>clear</button>
      <button onClick={removeAllSpace }>Remove All space</button>
      <button onClick={removeUnwantedSpace }>Remove unwanted space</button>
      <button className="Btn" onClick={copyText}>
  <span className="text">Copy</span>
  <span className="svgIcon">
    <svg fill="white" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path></svg>
  </span> <span className='hidden'>✅</span>
</button>
      <button onClick={istcap}>captal</button>
      {/* <button onClick={toUpperCase}>others</button>
      <button onClick={toUpperCase}>others</button>
      <button onClick={toUpperCase}>others</button> */}
      <br />
    <br />
      <hr />
    </div>
    </div>
  )
}
