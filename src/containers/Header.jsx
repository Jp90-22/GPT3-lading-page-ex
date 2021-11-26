import React, { useState } from 'react'
import Alert from "../components/Alert"

import './header.css'
import people from '../assets/people.png'
import ai from '../assets/ai.png'

/**
 * Page Header component
 * @return {element} Header component
 */
const Header = () => {
	const [isAlertShowing, setIsAlertShowing] = useState(false) // Controll the Alert component
	const [email, setEmail] = useState("") // Controll email input

	/**
	 * Validate if an email is correct
	 * @param  {string} email email to check
	 * @return {boolean}       true if the email is correct, otherwise false
	 */
	const validateEmail = (email) => email.match(
    	/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  	)

	/**
	 * Email input controller
	 */
	const onEmailInputChanged = (evt) => setEmail(evt.target.value)

	/**
	 * Email button controller
	 */
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
						<button className="btn" type="button" onClick={onEmailBtnClicked}>Get Started</button>
					</div>

					<div className="gpt3__header-content__people">
						<img src={people} alt="People" />
						<p>1,600 people requested access a visit in last 24 hour</p>
					</div>

				</div>
				
				<div className="gpt3__header-image" data-aos="fade-in" data-aos-delay="0" data-aos-duration="300">
					<img src={ai} alt="AI" />
				</div>
			</div>
		</>
	)
}

export default Header