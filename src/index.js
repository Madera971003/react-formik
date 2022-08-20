import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App/App';

ReactDOM.render(
	<React.StrictMode>
		<div className="contenedor">
			<App />
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);