import React, { useState } from 'react'
import Alert from "../components/Alert"

import './header.css'
import people from '../assets/people.png'
import ai from '../assets/ai.png'

const Header = () => {
	const [isAlertShowing, setIsAlertShowing] = useState(false)
	const [email, setEmail] = useState("")

	const validateEmail = (email) => email.match(
    	/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  	)

	const onEmailInputChanged = (evt) => setEmail(evt.target.value)

	const onEmailBtnClicked = () => {
		if (email && validateEmail(email)) {
			setIsAlertShowing(true)

			// Starts a time out for quit alert after 10 seconds
			setTimeout(() => setIsAlertShowing(false), 10000);
		} else {
			setEmail("Bad email!")
		}
	}

	return (
		<>
			<Alert show={isAlertShowing} handler={() => setIsAlertShowing(false)} />
			<div className="gpt3__header section__padding" id="home">
				<div className="gpt3__header-content">
					<h1 className="gradient__text">
						Let's Build Something amazing with GPT-3 OpenAI
					</h1>
					<p>
						Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
					</p>

					<div className="gpt3__header-content__input">
						<input type="email" placeholder="Your Email Address" value={email} onChange={onEmailInputChanged} />
						<button type="button" onClick={onEmailBtnClicked}>Get Started</button>
					</div>

					<div className="gpt3__header-content__people">
						<img src={people} alt="People" />
						<p>1,600 people requested access a visit in last 24 hour</p>
					</div>

				</div>
				
				<div className="gpt3__header-image">
					<img src={ai} alt="AI" />
				</div>
			</div>
		</>
	)
}

export default Header