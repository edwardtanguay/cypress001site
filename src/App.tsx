import { useState } from 'react';
import './App.scss';

function App() {
	const [message, setMessage] = useState('');

	return (
		<div className="App">
			<h1>Info Site</h1>
			<p>Welcome to this site.</p>

			<input
				data-cy="input1"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<div className="message">
				You have <span data-cy="chars1">{message.length}</span>{' '}
				characters.
			</div>
		</div>
	);
}

export default App;
