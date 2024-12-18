import React from "react";
import { useRef } from "react";

const Chatform = ({ chatHistory, setChatHistory, generateBotResponse }) => {
	const inputRef = useRef();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const userMessage = inputRef.current.value.trim();
		if (!userMessage) return;

		inputRef.current.value = "";

		setChatHistory((prevChatHistory) => [
			...prevChatHistory, 
			{ role: "user", text: userMessage },
		]);

		setTimeout(() => {
			setChatHistory((prevChatHistory) => [
				...prevChatHistory,
				{
					role: "model",
					text: 
						<span className="loading loading-dots loading-md"></span>, loading:true
				},
			]);
			generateBotResponse([
				...chatHistory,
				{ role: "user", text: userMessage },
			]);
		}, 1000);
	};

	return (
		<form
			action="#"
			className="flex items-center space-x-2 w-full"
			onSubmit={handleFormSubmit}
		>
			<input
				ref={inputRef}
				type="text"
				placeholder="Ask me anything..."
				className="input input-bordered input-accent w-full max-w-xs rounded-full"
			/>
			<button className="btn btn-circle bg-green-300 text-white text-xl">
				<i class="fa-solid fa-paper-plane"></i>
			</button>
		</form>
	);
};

export default Chatform;
