const express = require('express');
const app = express();
const port = 3000;
const readline = require('readline');
const fs = require('fs');
const fetch = require('node-fetch');

app.get('/', (req, res) => res.send('Online'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ================= START BOT CODE ===================
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const activities_list = [
    { type: 'PLAYING',  message: 'Kindly!'},
    { type: 'WATCHING', message: 'Positivity!'}
];

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index].message, { type: activities_list[index].type });
    }, 10000);
});
//data
var myDelayedData = '';

client.on('messageCreate', msg => {
  
  async function checkIfNegative(msg){
    const message = msg.content;
    const encodedParams = new URLSearchParams();
    encodedParams.set('text', message);
    
    const url = 'https://text-sentiment.p.rapidapi.com/analyze';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '0a110d7d80msh1aee9c56803a5d5p1401c3jsn90f55ffc86dd',
        'X-RapidAPI-Host': 'text-sentiment.p.rapidapi.com'
      },
      body: encodedParams
    };
    try {
    	const response = await fetch(url, options);
    	const result = await response.text();
      let json = JSON.parse(result);
      console.log(json)
      if(json.neg_percent === "0%"){
        return await 0;
      }
      let neg = json.neg_percent.substring(0, json.neg_percent.length - 1)
      // console.log(neg)
      if(Number(neg) > 50){
        return await Number(neg);
      } else {
        return await 0;
      }
    } catch (error) {
    	console.error(error);
    }
  }
  // async function getUserMessages(guildID, userID){
  //   let average = 0
  //   const arr = []
  //   let ch = msg.guild.channels.cache.find(channel => channel.name === 'general');
  //   ch.messages.fetch({
  //       limit: 5
  //   }).then(messages => {
  //       const msgs = messages.filter(m => m.author.id === userID)
  //       msgs.forEach(m => {
  //           arr.push(checkIfNegative(m))
  //       })
  //       let sum = 0;
  //       let avg = 0;
          
         
        
  //       // const values = getArr()
  //       // const total = values.reduce((p, c) => p + c);
  //       // return total / 5;
  
  //   })
     
  //     Promise.all(arr).then((results) => {
  //       const total = results.reduce((p, c) => p + c);
  //       return total/5;
  //     });
      
  //   }
  if(msg.content.includes('$check') & msg.mentions.members.size) {
    const user = msg.mentions.users.first() || msg.guilds.members.cache.get(args[0])?.user;
    const userId = user.id;
    const guildId = "992101058375581716";
    
    async function getUserMessages(guildID, userID){
      let average = 0
      const arr = []
      let ch = msg.guild.channels.cache.find(channel => channel.name === 'general');
      ch.messages.fetch({
          limit: 50
      }).then(messages => {
          const msgs = messages.filter(m => m.author.id === userID)
          msgs.forEach(m => {
              arr.push(checkIfNegative(m))
          })
          let sum = 0;
          let avg = 0;
          Promise.all(arr).then((results) => {
            const total = results.reduce((p, c) => p + c);
            const avg = total/5
            console.log(avg)
            if(avg > 50){
              msg.reply("This user needs to be more positive.")
            } else {
              msg.reply("This user seems to be quiet positive!")
            }
          });
    
      })
    }
    getUserMessages(guildId, userId)

  }
  
  
  if(msg.content.includes('$comfort') & msg.mentions.members.size){
    const args = msg.content.split(' ')
    const user = msg.mentions.users.first() || msg.guilds.members.cache.get(args[0])?.user;
    // const str = args.slice(1).join(" ");
    const str = "Here are some tips to stay more positive: \n \n Practice gratitude: Make a habit of focusing on the things you're thankful for. Start each day by listing a few things you're grateful for and regularly reflect on the blessings in your life. \n \n Surround yourself with positive people: Spend time with people who uplift you and encourage you to be your best self. Avoid negative people who bring you down. \n  Find activities that make you happy: Engage in activities that bring you joy and fulfillment. It could be anything from reading to dancing, cooking to playing sports.\n \n Focus on the present moment: Instead of dwelling on the past or worrying about the future, focus on the present moment and enjoy it fully. \n \n Practice positive self-talk: Replace negative self-talk with positive affirmations. Speak kindly to yourself and focus on your strengths."
    user.send(`${msg.author.tag} says ${str.replace(user, "")}`);
  }
  
});




client.login(process.env.TOKEN)
