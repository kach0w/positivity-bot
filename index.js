const express = require('express');
const app = express();
const port = 3000;
const readline = require('readline');
const fs = require('fs');
const FILE_PATH = 'data.ndjson';
var requestIp = require('request-ip');
const {spawn} = require('child_process');
// app.get('/', (req, res) => {
//    var dataToSend;
//    // spawn new child process to call the python script
//    const python = spawn('python', ['sendEmail.py']);
//    // collect data from script
//    python.stdout.on('data', function (data) {
//     console.log('Pipe data from python script ...');
//     dataToSend = data.toString();
//    });
//    // in close event we are sure that stream from child process is closed
//    python.on('close', (code) => {
//      console.log(`child process close all stdio with code ${code}`);
//      // send data to browser
//      res.send(dataToSend)
//    });
// })
app.get('/', (req, res) => res.send('Online'));
app.get('/',function(req, res) {
   
    var clientIp = requestIp.getClientIp(req);
    console.log(clientIp);
   
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ================= START BOT CODE ===================
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const activities_list = [
    { type: 'PLAYING',  message: 'Commands list - $commands'  },
    { type: 'WATCHING', message: 'Pie!' },
    { type: 'STREAMING', message: 'Lightning McQueen' }
];

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);

        client.user.setActivity(activities_list[index].message, { type: activities_list[index].type });
    }, 10000);
});

client.on('messageCreate', msg => {
  //app.get("/", function (req, res) { //prints ip
    // let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    // res.send(ip)
  
  //}); 
  // var getIP = require('ipware')().get_ip;
  // var ip = function(req, res){
  // console.log(ip)

  // ip();
  // console.log(getIP)
  if (msg.content === 'ping') {
    msg.reply('pong!');
     permissionOverwrites: [
        {
            id: guild.me.roles.highest,
            allow: ['VIEW_CHANNEL', 'MANAGE_CHANNELS', 'MANAGE_ROLES']
        }
    ]
  }
  if(msg.content.includes("$astronaut") || msg.content.includes("astronaut") || msg.content.includes("astronaut in the ocean")){
    msg.channel.send("https://i.imgur.com/76aiE5h.jpeg");
  }
  if (msg.content == 'karthik' || msg.content == 'Karthik' || msg.content == '$Karthik' || msg.content == '$karthik'){
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth()+1;
    d = n.getDate()-1;
    h = n.getHours()+5;
    min = n.getMinutes();
    s = n.getSeconds();
    day = n.getDay();
    msg.reply('Who dares say the name of the might Karthik!');
    console.log(`${msg.author.tag} dared to use the name of the Great Karthik`);
    console.log("On: " + m + "/" + d + "/" + y + " At time: " + h + ":" + min + ":" + s)
    
  }
  
  if(msg.content == '$yourebad'){
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth()+1;
    d = n.getDate()-1;
    h = n.getHours()+5;
    min = n.getMinutes();
    s = n.getSeconds();
    day = n.getDay();
    for(let i=0; i<4; i++){
      //msg.channel.send('@everyone');
    }
    msg.channel.send('You are bad');
    console.log(`${msg.author.tag} is bad`);
    console.log("On: " + m + "/" + d + "/" + y + " At time: " + h + ":" + min + ":" + s)
  }
  
  if(msg.content == ('$question') || msg.content ==('$rickroll') || msg.content == 'rick' || msg.content == 'rickroll' ){
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth()+1;
    d = n.getDate()-1;
    h = n.getHours()+5;
    min = n.getMinutes();
    s = n.getSeconds();
    day = n.getDay();
    msg.channel.send('https://imgur.com/gallery/Gc9O0Xy');
    console.log(`${msg.author.tag} is getting rickrolled`);
    console.log("On: " + m + "/" + d + "/" + y + " At time: " + h + ":" + min + ":" + s)
  }
  
  if(msg.content == '$commands'){
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth()+1;
    d = n.getDate()-1;
    h = n.getHours()+5;
    min = n.getMinutes();
    s = n.getSeconds();
    day = n.getDay();
    msg.channel.send("https://docs.google.com/document/d/1L2UE-9tP9GCC76iIwYD-OqsPrx3VtcmjzFu3lZRV0co/edit?usp=sharing");
    console.log(`${msg.author.tag} is looking for the commands list`);
    console.log("On: " + m + "/" + d + "/" + y + " At time: " + h + ":" + min + ":" + s)
  }
  
  if(msg.content == '$spammy'){
    for(let i=0; i<10; i++){
      //return "everyone";
      //msg.channel.send("@everyone");   
    }
  }
  
  if(msg.content == 'avocado craft'){
    msg.channel.send('https://www.youtube.com/watch?v=uRiGdl_fD28');
  }
  
  if(msg.content.includes('$dm') & msg.mentions.members.size){
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth()+1;
    d = n.getDate()-1;
    h = n.getHours()+5;
    min = n.getMinutes();
    s = n.getSeconds();
    day = n.getDay();
    const args = msg.content.split(' ')
    const user = msg.mentions.users.first() || msg.guilds.members.cache.get(args[0])?.user;
    const str = args.slice(1).join(" ");
    if(msg.content.includes('anon')){
      //when people change their usernames update here
      if(user.username == 'kachow' || user.username=='bobbob456' || user.username == 'monkey_boi'){
        user.send(`${msg.author.tag} is trying to send you an anonymous message:`)
      }
      user.send(str.replace("anon", "").replace(user, ""));
    }
    else{
      user.send(`${msg.author.tag} says${str.replace(user, "")}`);
    }
    console.log(`${msg.author.tag} is sending a message to ${user.username}`);
    console.log("On: " + m + "/" + d + "/" + y + " At time: " + h + ":" + min + ":" + s)
  }
  
  if(msg.content == '$funnywebsite'){
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth()+1;
    d = n.getDate()-1;
    h = n.getHours()+5;
    min = n.getMinutes();
    s = n.getSeconds();
    day = n.getDay();
    const randomLineIndex = Math.floor(Math.random() * 23);
    //console.log(randomLineIndex);
    const websites = [
    "https://thatsthefinger.com/",
    "https://cant-not-tweet-this.com/",
    "https://cat-bounce.com/",
    "https://www.internetlivestats.com/",
    "http://www.staggeringbeauty.com/",
    "https://isitchristmas.com/",
    "http://ww12.beesbeesbees.com/",
    "http://endless.horse/",
    "http://corndog.io/",
    "https://trypap.com/",
    "http://www.everydayim.com/",
    "https://hackertyper.com/",
    "https://www.trashloop.com/",
    "https://pixelsfighting.com/",
    "http://wowenwilsonquiz.com/",
    "http://papertoilet.com/",
    "https://willrobotstakemyjob.com/",
    "https://zoomquilt.org/",
    "http://make-everything-ok.com/",
    "https://findtheinvisiblecow.com/",
    "https://printer.discord.com/",
    "https://printer.discord.com/",
    "https://www.nyan.cat/"];
    msg.channel.send(websites[randomLineIndex]);
    console.log(`${msg.author.tag} is showing a funny website in ${msg.channel}`);  
    console.log("On: " + m + "/" + d + "/" + y + " At time: " + h + ":" + min + ":" + s)
  }
});




client.login(process.env.TOKEN)
