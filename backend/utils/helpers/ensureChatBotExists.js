import User from "../../models/userModel.js";
import bcrypt from "bcryptjs";

const ensureChatBotExists = async () => {
	const existing = await User.findOne({ username: "chatbot" });
	if (existing) return;

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash("chatbot", salt);

	await User.create({
		name: "Chatbot",
		username: "chatbot",
		email: "chatbot@ai.com",
		password: hashedPassword,
		profilePic: "/chatbot-avatar.png",
	});
};

export default ensureChatBotExists;
