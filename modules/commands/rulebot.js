const fs = require("fs");
module.exports.config = {
	name: "rulebot",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "thọ", 
	description: "no prefix",
	commandCategory: "System",
	usages: "info",
    cooldowns: 10, 
};

module.exports.event = async ({ event, api, Currencies,Users, args, utils }) => {
if (event.body.indexOf("Rulebot")==0 || (event.body.indexOf("rulebot")==0)) {
		return api.sendMessage(`==============\nLUẬT SỬ DỤNG\n==============\nBot chỉ được tag 1-2 Box nên mọi người chú ý, cuối tuần Admin sẽ lọc box để tiếp tục đón thêm box mới\nP/s: khi số box vượt quá mức thì Ad xin không nhận thêm\nTHANK YOU FOR USING MY ERICK BOT <3` , event.threadID, event.messageID)
};


module.exports.run = async ({ event, api, Currencies, args, utils }) => {






	}
