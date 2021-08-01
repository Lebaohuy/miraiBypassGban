const fs = require("fs");
module.exports.config = {
name: "Rulebot",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "BaoHuy",
	description: "Rulebot",
	commandCategory: "Không cần dấu lệnh",
	usages: "info",
	cooldowns: 5,
};
module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Yêu Bot")==0 || (event.body.indexOf("yêu Bot")==0)) {
		var msg = {
				body: "==============\nLUẬT SỬ DỤNG\n==============\nBot chỉ được tag 1-2 Box nên mọi người chú ý, cuối tuần Admin sẽ lọc box để tiếp tục đón thêm box mới\nP/s: khi số box vượt quá mức thì Ad xin không nhận thêm\nTHANK YOU FOR USING MY ERICK BOT <3 ",
				
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
