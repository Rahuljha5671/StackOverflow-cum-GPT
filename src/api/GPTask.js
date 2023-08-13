
const { Configuration, OpenAIApi } = require("openai");
//require("dotenv").config();

const configuration = new Configuration({
    // apiKey: process.env.OPEN_AI_KEY,
    apiKey: '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',
});

const openai = new OpenAIApi(configuration);

export const askGPT=(questionData)=>async(dispatch)=>{

    const question=questionData.questionTitle;
    //console.log(question);
    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{"role": "system", "content": "You are a helpful assistant."}, 
                {role: "user", content: question}],
        });
        const ans=completion.data.choices[0].message.content;
        console.log(ans);
        dispatch({type:"FETCH_CURRENT_ANSWER",payload:ans});
       
        
    } catch (error) {
       console.log(error);
    }
}

