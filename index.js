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
  }
})

client.login(process.env.TOKEN)