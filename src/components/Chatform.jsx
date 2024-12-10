import React from "react";

const Chatform = () => {
	return (
		<form action="#" className="flex items-center space-x-2 w-full">
			<input
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
