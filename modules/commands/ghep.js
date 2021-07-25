	module.exports.config = {
  name: "ghép",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Thanh Dz",
  description: "Ghép đôi với 1 đứa trong nhóm",
  commandCategory: "Group",
  usages: "ghép",
  cooldowns: 1,
  dependencies: ["axios", "fs-extra"],
  envConfig: {
       cooldownTime: 5
  }
};

module.exports.run = async ({ api, event, args, Users,__GLOBAL,Currencies }) => {
  const axios = require("axios");
  const fs = require("fs-extra");
  const request = require("request");
 var tl = [
					'21%',
					'67%',
					'19%',
					'37%',
					'17%',
					'96%',
					'50%',
					'52%',
					'62%',
					'76%',
					'54%',
					'70%',
					'20%',
					'43%',
					'56%',
					'98%',
					'10%',
					'30%',
					'1%',
					'49%',
					'83%',
					'100%',
					'99%',
					'0%',
					'48%'
				];
				var tle = tl[Math.floor(Math.random() * tl.length)];
				let dataa = await api.getUserInfo(event.senderID);
				let namee = await dataa[event.senderID].name;
				let loz = await api.getThreadInfo(event.threadID);
				var emoji = loz.participantIDs;
				var id = emoji[Math.floor(Math.random() * emoji.length)];
				let data = await api.getUserInfo(id);
				let name = await data[id].name;
				api.changeNickname(
					`Con vợ của ${name}`,
					event.threadID,
					event.senderID
				);
				api.changeNickname(`Thằng chồng của ${namee}`, event.threadID, id);

				var sex = await data[id].gender;
				var gender = sex == 2 ? 'Nam🧑' : sex == 1 ? 'Nữ👩‍🦰' : 'Trần Đức Bo';

				var callback = () =>
					api.sendMessage(
						{
							body: `${name} đã được hệ thống lựa chọn ghép đôi với bạn.\nGiới tính: ${gender}\n❤️Tỉ lệ hợp đôi: ${tle}`,
							attachment: fs.createReadStream(__dirname + '/cache/67.png')
						},
						event.threadID,
						() => fs.unlinkSync(__dirname + '/cache/67.png')
					);
				return request(
					encodeURI(
						`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`
					)
				)
					.pipe(fs.createWriteStream(__dirname + '/cache/67.png'))
					.on('close', () => callback());
			}
