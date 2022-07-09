const bot = new aoijs.Bot({
  token: "DISCORD-BOT-TOKEN",
  prefix: "DISCORD-BOT-PREFIX",
  intents: ["GUILDS", "GUILD_MESSAGES"]
})

bot.onMessage()


bot.command({
  name: "ping",
  code: `
  Pong! $pingms 🏓
  `
});


bot.command({
  name:"api",
  code:`$title[1;TITLE GOES HERE] 
$description[1;DESCRIPTION GOES HERE IF NEEDED]
$image[1;https://aurfintr.sirv.com/ukraine.png?text.0.text=You'r%20text%20goes%20HERE!&text.0.position.gravity=center&text.0.position.y=5%25&text.0.size=26&text.0.color=000000]`
})