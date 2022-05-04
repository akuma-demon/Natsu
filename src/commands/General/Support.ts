import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support'],
            description: 'Gets the support group links',
            category: 'general',
            usage: `${client.config.prefix}Support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
        `    🔥𝐅𝐀𝐈𝐑𝐘 𝐓𝐀𝐈𝐋🔥
        
       *🔥𝐌𝐲 𝐆𝐮𝐢𝐥𝐝:🔥* *https://chat.whatsapp.com/EAjN9UVOurJ9cjlaVmSCj5:*
        *🔥𝐒𝐮𝐩𝐩𝐨𝐫𝐭 𝐌𝐲 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 🔥:*https://www.instagram.com/akuma__24/?hl=en*`,
           MessageType.text
        ))
        const n = [
            'https://telegra.ph/file/3b819b2cb2be451775dde.mp4'
        ]
        let beckylynch = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url:beckylynch }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `Join my Guild Fairy Tail 🔥 check your DM \n` }
        )

        }
}
