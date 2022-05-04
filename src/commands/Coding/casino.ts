import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'casino',
            aliases: ['support,casino'],
            description: 'Gets the group links',
            category: 'extras',
            usage: `${client.config.prefix}casino`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
                `*🔥Casino Group🔥*\n\n
                 *𝐍𝐀𝐓𝐒𝐔🔥: Fun Group:https://chat.whatsapp.com/EeIT4nf7PBUD8Kwbm4FgJC\n\n
                 *𝐍𝐀𝐓𝐒𝐔🔥 Gambling: 𝗖𝗮𝘀𝗶𝗻𝗼 *:https://chat.whatsapp.com/EAjN9UVOurJ9cjlaVmSCj5/n `,
           MessageType.text
        ))
        const n = [
            'https://c.tenor.com/h7hb0Jty-UgAAAPo/fairy-tail-cool.mp4'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `Send you the support group links in Personal Message\n` }
        )

        }
}
