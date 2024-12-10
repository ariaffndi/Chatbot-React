import React from "react";
import Chatform from "./components/Chatform";

const App = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
			<div className="chatApps border border-gray-500 rounded-lg shadow-lg overflow-hidden p-4 w-96 h-[80vh]  flex flex-col justify-between bg-base-200">
				{/* Header */}
				<div className="chat-header flex items-center justify-center p-2">
					<h2 className="text-xl font-bold">Chatbot</h2>
				</div>

				{/* Body */}
				<div className="chat-body mt-8 flex-grow">
					<div className="messages bot-message flex justify-start mt-4">
						<p className="message-text w-3/4 bg-gray-200 rounded-2xl rounded-bl-sm p-2">
							Hey there! <br /> How can I help you today?
						</p>
					</div>
					<div className="messages user-message flex justify-end mt-4">
						<p className="message-text w-3/4  bg-green-300 rounded-2xl rounded-br-sm p-2">
							Lorem ipsum dolor sit amet consectetur adipisicing.
						</p>
					</div>
				</div>

				{/* Footer */}
				<div className="chat-footer flex items-center space-x-2">
					<Chatform />
				</div>
			</div>
		</div>
	);
};

export default App;
