import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GPTanswer from "./GPTanswer";
import send from '../../assets/icons8-send-button-96.png'
//import send from '../../assets/icons8-send-96.png'
import send1 from '../../assets/icons8-sent-961.png'




import "./AskGPT.css";
import { askGPT } from "../../api/GPTask";

const AskGPT = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [Switch, setSwitch]=useState(false)
  const [icon,setIcon]=useState(false)

  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (User) {
      if (questionTitle) {
        setSwitch(true)
        dispatch(
          askGPT(
            {
              questionTitle,
              userPosted: User.result.name,
            },
            navigate
          )
        );
      } else alert("Question field should not be empty");
    } else alert("Login to ask question");
  };

  return (
    <div className="ask-question1">
        <h2>Ask Your Question From OPENAI GPT</h2>
        <form onSubmit={handleSubmit}>
            <p>Be specific in entering your promt!</p>
            <div class="input-container">
            <textarea
                type="text"
                class="input-field"
                placeholder="Enter Your Question"
                onChange={(e) => {
                    console.log(e);
                  if(e.target.value===""){
                    setIcon(false)
                  }
                  else{
                    setIcon(true)
                  }
                  setQuestionTitle(e.target.value);
                }}
                cols="30"
                rows="4"
              ></textarea>
                {/* <button type="submit" class="send-button" onClick={() => setSwitch(!Switch)}>Ask</button> */}
                <div className="enter">
                    <>
                    {icon?
                        <img src={send1} alt="send" width="25" align="right"  className='send' 
                            onClick={handleSubmit}/>
                        :<img src={send} alt="send" width="25" align="right"  className='send' />
                    }
                    </>

                </div>
            </div> 
        </form>
        <>
            {Switch && <GPTanswer />}
        </>
    </div>

    /*<div className="ask-question1">
      <div className="ask-ques-container1">
        <h1>Ask Your Question From GPT</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container1">
            <label htmlFor="ask-ques-title1">
              <p>Be specific in entering your promt</p>
              <input
                type="text"
                id="ask-ques-title1"
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                placeholder="Enter Your Question"
              />
              <img src={send} alt="send" width="25"  className='send'/>
            </label>
            
          </div>
        </form>
      </div>
    </div>*/
  );
};

export default AskGPT;
