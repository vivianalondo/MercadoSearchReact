import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import {App, NASA} from './App'


ReactDOM.render(
	<div>
		<App />
	</div>,
	document.getElementById('root'))

registerServiceWorker()

