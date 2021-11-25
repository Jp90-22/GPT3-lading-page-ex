import React from 'react'

import './alert.css'

const Alert = () => {
	return (
		<div className="gpt3__alert-container" id="alert">
			<div className="gpt3__alert-content">
				<h2>You're registered now!!</h2>
				<p>
					You took your first step in to the future, check out our <a href="#blog">library</a> to get started.
				</p>
			</div>
		</div>
	)
}

export default Alert