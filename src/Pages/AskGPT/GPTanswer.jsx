import React from 'react'
import "./AskGPT.css";

import chat from  '../../assets/chatgptlogo.png'
import { useSelector } from "react-redux";

const GPTanswer = () => {
  //console.log(ans.body);
  const ans = useSelector((state) => state.currentAnswerReducer);
  // console.log(ans)

  return (
    <div className="answer-whole">
        <div className='gptlogo'>
            <img src={chat} alt="chat" width="30"  className='chat'/>
        </div>
        <div className='answer-container'>
          {!ans?<p>Loading...</p> :<p>{ans} </p>}
            
        </div>
        

    </div>
  )
}

export default GPTanswer