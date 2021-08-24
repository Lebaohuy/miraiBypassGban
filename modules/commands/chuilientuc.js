module.exports.config = {
    name: "chuilientuc",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "HelyT",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "chuilientuc @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn chửi", event.threadID);
    let data = await api.getUserInfo(mention);
    let name = data[parseInt(mention)].name;
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu chửi !");
setTimeout(() => {a({body: "Đ!t con mẹ mày" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "Mày ra đây tao bảo" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "Hiện hồn nhanh con chó" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "Hiện hồn bố mày hỏi tội" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "Mày trốn khi nào mới hiện hồn đây" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "Đ!t cụ mày nữa hiện hồn" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "Hiện hồn nhanh không tao đốt nhà mày giờ" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "Nhanh ra chửi nhau với tao" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "Tao ném trứng thối đổ dầu đổ xăng vào nhà mày giờ" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "Phắn ra đây bạn" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "Đéo ra nữa bố mày đốt nhà mày" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "Mày không ra à???" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "Nhờn lắm" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "Vậy thì xin mời nghe tao gáy nhé" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "Trước khi gáy thật lâu, cho tao xin nghỉ 1p nhé" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "Lời đầu tiên xin phép được gửi lời chào đến" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "Hey hey hey nói trình tao, tao sẽ nói trình tao rap bại trình mày" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "Tao sẽ không nói khoác về tao nhưng mà tao sẽ nói về ngoại hình mày" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "Cái gì đây thằng nhóc này mày bại liệt hay bị tàn tật mà không gáy lên hả ba nhóc trẩu cứ như là đức quốc xã" + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "Tao sẽ dizz mày để mà cho mấy nhóc lửa chùa khen nhìn cái acc Facebook mày mà tao tưởng clone hen" + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a("Nhìn mày mặc đồ mà tao tưởng Duy Mạnh hát Bài Kiếp Đỏ Đen Yeh Yeh Yeh Ohh")} , 90000);
setTimeout(() => {a({body: "Nào ông chủ update lyric thì tao lại dizz tiếp nhé" + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "Fuck you bitch 😘" + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: "Xin chào và hẹn gặp lại bạn ở chương trình lần sau 🎉" + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a("Good bye im Bảo Huy Mike 🤫")} , 110000);


  
  }
