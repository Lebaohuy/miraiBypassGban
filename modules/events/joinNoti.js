module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.4",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event, Users }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Bot chạy bởi Lê Bảo Huy <3" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`𝙆𝙚̂́𝙩 𝙣𝙤̂́𝙞 𝙩𝙝𝙖̀𝙣𝙝 𝙘𝙤̂𝙣𝙜!!!\n====================\ 𝘽𝙤𝙩 đ𝙪̛𝙤̛̣𝙘 𝙫𝙖̣̂𝙣 𝙝𝙖̀𝙣𝙝 𝙗𝙤̛̉𝙞 𝙇𝙚̂ 𝘽𝙖̉𝙤 𝙃𝙪𝙮\n===================\n𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴: .help Đ𝐞̂̉ 𝐱𝐞𝐦 𝐭𝐨𝐚̀𝐧 𝐛𝐨̣̂ 𝐥𝐞̣̂𝐧𝐡 𝐡𝐢𝐞̣̂𝐧 𝐜𝐨́ 𝐜𝐮̉𝐚 𝐛𝐨𝐭 ❤`, threadID);
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);

				if (!global.data.allUserID.includes(id)) {
					await Users.createData(id, { name: userName, data: {} });
					global.data.userName.set(id, userName);
					global.data.allUserID.push(id);
				}
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "Welcome tu đờ{threadName} {name}.\n{type} là thành viên thứ {soThanhVien} của nhóm đóq đũy🥳" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}
