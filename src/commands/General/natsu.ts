/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "natsu",
			aliases:['nat'],
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}chitoge`,
                        modsOnly:true,
			baseXp: 200,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://telegra.ph/file/48ddfd98f98872756ee3f.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `🔥 *𝐍𝐀𝐓𝐒𝐔* 🔥\n\n🔥 *Description: 𝐈 𝐖𝐈𝐋𝐋 𝐀𝐋𝐖𝐀𝐘𝐒 𝐁𝐄 𝐓𝐇𝐄𝐑𝐄 𝐅𝐎𝐑 𝐘𝐎𝐔💙 𝐸𝓇𝓏𝒶 𝒮𝒸𝒶𝓇𝓁𝑒𝓉💖💖.*\n\n🐲 *insta : https://www.instagram.com/akuma__24/?hl=en* \n`,
			}
		);
	};
}
