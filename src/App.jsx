import React from "react";

export default function App() {
	const counter = 0;

	return (
		<div className="App">
			<h1>
				Counter: <span>{counter}</span>
			</h1>
			<button>Increment</button>
			<button>Decrement</button>
		</div>
	);
}
