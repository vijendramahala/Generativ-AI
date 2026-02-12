import OpenAI from 'openai'
import dotenv from 'dotenv'
dotenv.config()

const generativ = new OpenAI({apiKey:process.env.OPENAI_KEY})

// const response = await generativ.responses.create({
//     instructions: "give result in 10 word",
//     input: "Tell m one best color.",
//     model: "gpt-4o-mini"
// })

// with roles

const response = await generativ.responses.create({

    instructions: " give result in 10 liens ",
    input: [
        { role: 'system', content: 'give me response in hindi.' },
        { role: 'developer', content: ' give a basic example in node.js ' },
        { role: 'user', content: 'what is Node.js' }
    ],
    model: 'gpt-4o-mini'
})
console.log(response.output_text);

/*
Open ai roles

system => always on top
user 
assistant
developer
tool
*/
