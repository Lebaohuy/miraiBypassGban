module.exports = function({ api, __GLOBAL, client }) {
	//will do something in here ¯\_(ツ)_/¯ 

	function throwError(command, threadID, messageID) {
		let threadSetting = client.threadSetting.get(parseInt(threadID)) || {};
		return api.sendMessage(`( \_/)\n( •_•)\n// >🧠\n nè lắp vào mà dùng cho bớt óc chó rồi hãy sài bot nha con đũy 😏. Mày dùng: ${(threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : __GLOBAL.settings.PREFIX}help ${command}` threadID, messageID);
	}

	return {
		throwError
	};
}
