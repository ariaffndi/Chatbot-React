import { useState } from "react";
import React from "react";
import Chatform from "./components/Chatform";
import ChatMessage from "./components/ChatMessage";

const App = () => {
	const [chatHistory, setChatHistory] = useState([]);
	const generateBotResponse = async (history) => {
		// update chat history
		const updatedHistory = (text) => {
			setChatHistory((prev) => [
				...prev.map((msg) => msg.loading ? { role: "model", text } : msg),
			]);
		};

		// format chat history for API request
		history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ contents: history }),
		};

		try {
			// make API request
			const response = await fetch(
				import.meta.env.VITE_API_URL,
				requestOptions
			);
			const data = await response.json();
			if (!response.ok)
				throw new Error(data.error.message || "Something went wrong");

			const botMessage = data.candidates[0].content.parts[0].text
				.replace(/\*\*(.*?)\*\*/g, "$1")
				.trim();
			updatedHistory(botMessage);

		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
			<div className="chatApps border border-gray-500 rounded-lg shadow-lg overflow-hidden p-2 w-96 h-[80vh]  flex flex-col justify-between bg-base-200">
				{/* Header */}
				<div className="chat-header flex items-center justify-center p-2">
					<h2 className="text-xl font-bold">Chatbot</h2>
				</div>

				{/* Body */}
				<div className="chat-body mt-4 flex-grow overflow-y-auto p-4">
					<div className="messages bot-message flex justify-start mt-4">
						<p className="message-text w-3/4 bg-gray-200 rounded-2xl rounded-bl-sm p-2">
							Hey there! <br /> How can I help you today?
						</p>
					</div>

					{chatHistory.map((message, index) => (
						<ChatMessage key={index} message={message} />
					))}
				</div>

				{/* Footer */}
				<div className="chat-footer flex items-center space-x-2 mt-2 p-2">
					<Chatform
						chatHistory={chatHistory}
						setChatHistory={setChatHistory}
						generateBotResponse={generateBotResponse}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
