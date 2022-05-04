import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'akuma',
            description: 'Displays info about akuma.',
            category: 'general',
            usage: `${client.config.prefix}savage`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://i.ibb.co/pJxZXMd/899bbe592bb64f5a6469db6c8fbde769.jpg'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `🔥𝗛𝗘𝗟𝗟𝗢!❄️I'm 𝐀𝐊𝐔𝐌𝐀 an ordinary guy who loves watching anime & play games🎮. I'm a BCA Student🤍relationship with 𝐙𝐄𝐑𝐎❤️  
            
🍀𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩;
Wa.me/+917892202052

🍀𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤;
https://facebook.com/groups/600441174428472/
 
🍀𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦;
https://www.instagram.com/akuma__24/?hl=en
⪼𝖲𝖾𝖾 𝗒𝖺𝗁 💟` }
        )
    }
}
