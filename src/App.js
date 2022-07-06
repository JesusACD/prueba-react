import logo from './logo.svg';
import './App.css';
import translate from 'translate-google-api';
import { useState } from 'react';

function App() {
	const [textoTraducido, setTexto] = useState('');
	const handleTraductor = async (e) => {
		const result = await translate(`I'm fine.`, {
			tld: 'cn',
			to: 'vi',
			proxy: {
				host: '127.0.0.1',
				port: 9000,
				auth: {
					username: 'mikeymike',
					password: 'rapunz3l'
				}
			}
		});
		console.log('result', result);
		setTexto(result);
		return result;
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
				<a href='!#' onClick={() => handleTraductor()}>
					TRADUCIR
				</a>
				<div>{textoTraducido || `No hay nada`}</div>
			</header>
		</div>
	);
}

export default App;
