module.exports.config = {
    name: "calladmin",
    version: "1.1.0",
    hasPermssion: 0,
    credits: "Thọ & fix by banledangyeuu",
    description: "gửi tin nhắn tới admin của bot",
    commandCategory: "group",
    usages: "calladmin [lời nhắn]",
    cooldowns: 3

};
module.exports.handleReply = function({ api, event, args, handleReply, client, global, Threads, Users }) {
  return api.sendMessage({body :`🔔Phản hồi từ admin: ${event.senderID}: ${event.body}`}, handleReply.threadID, handleReply.replyID);    
};

module.exports.run = async function({ api, event, args, Currencies, utils, Users, Threads, global,client }) {
    const moment = require("moment-timezone");
    let { senderID, messageID, threadID } = event;
    if (!args[0]) return api.sendMessage("Bạn chưa nhập tin nhắn !", threadID,messageID);
    let data = (await Users.getData(senderID));
    let thread = (await Threads.getData(threadID));
    var time = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss || DD/MM/YYYY');
    for (var id of global.config.ADMINBOT) {
        api.sendMessage(`====BÁO CÁO===\n\n⏰ TIME: ${time}\n👤 Name: ${data.name}\n❗ UID: ${senderID}\n👻 Nhóm: ${thread.name}\n😺 ThreadID: ${event.threadID}\n\n✅ Tin Nhắn : ${args.join(" ")}`,id, async (err, messageInfo) => {
                client.handleReply.push({ 
                    name: this.config.name,
                    messageID: messageInfo.messageID,
                    replyID: event.messageID, 
                    threadID,
                    type: "reply"
                })
    await new Promise(resolve => setTimeout(resolve, 1000))
    })      
    return api.sendMessage(`Thông tin của bạn đã được gửi tới các admin ✅\nTime: ${time}`,event.threadID)
    }
}
