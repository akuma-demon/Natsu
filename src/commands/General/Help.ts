import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'


export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            aliases: ['h','menu']
        })
    }

     run = async (M: ISimplifiedMessage, parsedArgs: IParsedArgs): Promise<void> => {
           const n = [
           'https://telegra.ph/file/5eaa30bafead90b0b07b3.mp4'
        ]
        let chitoge = n[Math.floor(Math.random() * n.length)]
        if (!parsedArgs.joined) {
            const commands = this.handler.commands.keys()
            const categories: { [key: string]: ICommand[] } = {}
            for (const command of commands) {
                const info = this.handler.commands.get(command)
                if (!command) continue
                if (!info?.config?.category || info.config.category === 'general') continue
                if (Object.keys(categories).includes(info.config.category)) categories[info.config.category].push(info)
                else {
                    categories[info.config.category] = []
                    categories[info.config.category].push(info)
                }
            }
            let text = `*🔥𝗛𝗘𝗟𝗟𝗢*🔥! *${M.sender.username}*\n\n•╚『🅳🆁🅰🅶🅽🅴🅴🅻』╝\n•*𝐈'𝐦 𑁍𝐍𝐀𝐓𝐒𝐔𑁍 𝐀 𝐛𝐨𝐭 𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐚𝐤𝐮𝐦𝐚 𝐭𝐨 𝐦𝐚𝐤𝐞 𝐲𝐨𝐮𝐫 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐞𝐧𝐣𝐨𝐲𝐚𝐛𝐥𝐞*\n\n━━❰•ᕲᖇᗩᘜᘉᘿᘿᒪ･❱━━\n\n╚『𝐑𝐞𝐚𝐝 𝐭𝐡𝐞 𝐑𝐮𝐥𝐞𝐬』╝\n𝐌𝐲 𝐧𝐚𝐦𝐞 𝐢𝐬 𝐍𝐀𝐓𝐒𝐔🐉🔥\n\n🅼🆈 🅿🆁🅴🅵🅸🆇 🅸🆂 /\n\n1 | *Don't Call* Bots to avoid Blocking.\n\n2 | *Don't Spam* in Groups to avoid Blocking\n\n`
            const keys = Object.keys(categories)
            for (const key of keys)
                text += `╚━❰🔥𝐁𝐎𝐓 ${this.emojis[keys.indexOf(key)]} ${this.client.util.capitalize(key)}•𖣘❱━╝\n• \`\`\`${categories[
                    key
                ]
                    .map((command) => command.config?.command)
                     .join(', ')}\`\`\`\n\n`
            return void this.client.sendMessage(M.from, { url: chitoge }, MessageType.video, {quoted: M.WAMessage,

          mimetype: Mimetype.gif,


            caption: `${text}
 ──❅┈[ *🔥𖣔🅽🅰🆃🆂🆄🔥𖣔* ]┈❅───
┌────────────┈𑁍𖣘
│   🔥 *𝗛𝗘𝗟𝗟𝗢*
  𝐅𝐎𝐋𝐋𝐎𝐖 𝐌𝐄 𝐎𝐍 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌
  https://www.instagram.com/akuma__24/?hl=en
│    🔥*𝐅𝐚𝐢𝐫𝐲 𝐓𝐚𝐢𝐥* 🔥
└────────────┈𖣘
❅┈[𝐇𝐚𝐯𝐞 𝐆𝐫𝐞𝐚𝐭 𝐃𝐚𝐲]┈❅
📝 *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*` }
            )
        }
        const key = parsedArgs.joined.toLowerCase()
        const command = this.handler.commands.get(key) || this.handler.aliases.get(key)
        if (!command) return void M.reply(`No Command of Alias Found | "${key}"`)
        const state = await this.client.DB.disabledcommands.findOne({ command: command.config.command })
        M.reply(
            `🚀 *Command:* ${this.client.util.capitalize(command.config?.command)}\n📉 *Status:* ${
                state ? 'Disabled' : 'Available'
            }\n⛩ *Category:* ${this.client.util.capitalize(command.config?.category || '')}${
                command.config.aliases
                    ? `\n♦️ *Aliases:* ${command.config.aliases.map(this.client.util.capitalize).join(', ')}`
                    : ''
            }\n🎐 *Group Only:* ${this.client.util.capitalize(
                JSON.stringify(!command.config.dm ?? true)
            )}\n💎 *Usage:* ${command.config?.usage || ''}\n\n📒 *Description:* ${command.config?.description || ''}`
        )
    }

    emojis = ['', '', '','', '', '', '', '', '', '', '', '']
}
