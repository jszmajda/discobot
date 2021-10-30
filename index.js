// sets up process.env.<KEYS>
require('dotenv').config()
const { Client, Intents } = require('discord.js')
require('discord-reply')

const intents = new Intents()
intents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES)

const client = new Client({ intents: intents })
client.once('ready', () => {
  console.log('READY, ' + client.user.tag)
})

client.on('message', async message => {
  // console.log('message', message)
  if (message.content.startsWith('!reply')) {
    // https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=reply
    message.reply('Heya')
    message.react('👍🏻')
  } else if (message.content.match('how you doin')) {
    message.channel.send("eh, I'm doing ok, thank")
  } else if (message.content.match('have a good evening')) {
    message.channel.send("ok, cool")
    setTimeout(() => {
      message.channel.send('seeya')
      setTimeout(() => {
        message.channel.send('I guess')
      }, 10000)
    }, 5000)

  }
})

client.login(process.env.TOKEN)