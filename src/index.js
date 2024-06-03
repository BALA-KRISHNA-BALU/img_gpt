import React from 'react';
import ReactDOM from 'react-dom/client';
import { useRef, useState } from 'react';

const Bot = () => {
  const data = useRef()
  const [name, setName] = useState("")
  const [img, setImg] = useState("https://loremflickr.com/1600/800/")
  const first = "https://loremflickr.com/1600/800/"

  function image() {
    setName(data.current.value)
    setImg(first + data.current.value)
  }


  return <div className='bot-container'>
    <div className='left-container'>
      <div className='left-container-content'>
        <h1>IMAGE GPT</h1>
        <button className='left-btn'>+ NEW CHAT</button>
      </div>
    </div>
    <div className='right-container'>
      <div className='right-container-content'>
        <div className="alert alert-warning alert-dismissible fade show bot-alert" role="alert">
          <strong>DON"T SEARCH!</strong> Any Abusing and Pornography Content.
          <button type="button" className="btn-close btn-x" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

        <div className='solution'>
          <h1>{name}</h1>
          <img src={img}></img>
        </div>
        <div className='chat-container'>
          <input type='text' placeholder='ex:pig,donkey,flowers,birds............etc' ref={data}></input>
          <button onClick={image}>Search</button>
        </div>
      </div>
    </div>

  </div>

}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Bot />);

