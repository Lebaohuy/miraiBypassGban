const request = require('request');
const fs = require('fs')
module.exports.config = {
  name: "info2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BerVer",
  description: "Kiểm tra thông tin ngơời dùng",
  commandCategory: "general",
  usages: "info",
  cooldowns: 5,
  dependencies: ["request","fs"]
};

module.exports.run = async({ api, event, args, client, Users, __GLOBAL,Currencies}) => {
	if (args.join() == "") {api.sendMessage("Bạn có thể dùng:\n/info user => nó sẽ lấy thông tin của chính bạn.\n/info @[Tag] => nó sẽ lấy thông tin người bạn tag.", event.threadID, event.messageID)} 
	if (args.join() == "user") {
	var mentions = event.senderID
    console.log(mentions)
	let data = await api.getUserInfo(mentions);
    let url = data[mentions].profileUrl;
    let b = data[mentions].isFriend == false ? "Chưa kết bạn với FB Bot😶." : data[mentions].isFriend == true ? "Đã kết bạn với FB Bot😚." : "Đéo";
    let sn = data[mentions].vanity;
    let q = data[mentions].searchTokens;
    let k = (await Currencies.getData(mentions)).money;
    let i = data[mentions].isVerified;
    let name = await data[mentions].name;
    var sex = await data[mentions].gender;
    var gender = sex == 2 ? "Nam" : sex == 1 ? "Nữ" : "Trần Đức Bo";
    var content = args.join(" ");
    var callback = () => api.sendMessage({
      body: `👀 Tên: ${name}\n🐒 UID: ${mentions}\n👤 Link FB: ${url}\n😘 Giới tính: ${gender}\n🐶 Username: ${sn}\n🥺 Tình trạng: ${b}\n🤑 Số tiền: ${k} đô. `,
      attachment: fs.createReadStream(__dirname + "/src/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/src/1.png"));
    return request(encodeURI(`https://api.miraiproject.tk/getavatar?ID=${mentions}`)).pipe(fs.createWriteStream(__dirname+'/src/1.png')).on('close',() => callback());
	}
	else if (args.join().indexOf('@') !== -1) {
	var mentions = Object.keys(event.mentions)
	let data = await api.getUserInfo(mentions);
    let url = data[mentions].profileUrl;
    let b = data[mentions].isFriend == false ? "Chưa kết bạn với FB Bot😶." : data[mentions].isFriend == true ? "Đã kết bạn với FB Bot😚." : "Đéo";
    let sn = data[mentions].vanity;
    let q = data[mentions].searchTokens;
    let k = (await Currencies.getData(mentions)).money;
    let i = data[mentions].isVerified;
    let name = await data[mentions].name;
    var sex = await data[mentions].gender;
    var gender = sex == 2 ? "Nam" : sex == 1 ? "Nữ" : "Trần Đức Bo";
    var content = args.join(" ");
    var callback = () => api.sendMessage({
      body: `👀 Tên: ${name}\n🐒 UID: ${mentions}\n👤 Link FB: ${url}\n😘 Giới tính: ${gender}\n🐶 Username: ${sn}\n🥺 Tình trạng: ${b}\n🤑 Số tiền: ${k} đô. `,
      attachment: fs.createReadStream(__dirname + "/src/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/src/1.png"));
    return request(encodeURI(`https://api.miraiproject.tk/getavatar?ID=${mentions}`)).pipe(fs.createWriteStream(__dirname+'/src/1.png')).on('close',() => callback());
}
}
