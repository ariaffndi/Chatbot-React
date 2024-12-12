import React from "react";

const ChatMessage = ({ message }) => {
	return (
		<div
			className={`messages ${
				message.role === "user"
					? "user-message flex justify-end mt-4"
					: "bot-message flex justify-start mt-4"
			}`}
		>
			<p
				className={`message-text max-w-3/4 p-2 rounded-2xl ${
					message.role === "user"
						? "bg-green-300 rounded-br-sm"
						: "bg-gray-200 rounded-bl-sm"
				}`}
			>
				{message.content}
			</p>
		</div>
	);
};

export default ChatMessage;
