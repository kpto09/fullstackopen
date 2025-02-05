import React, { useState, useEffect } from 'react';

const Notification = ({messageProp}) => {
		const {message, messageType, setMessage, setMessageType} = messageProp
		const timer = useEffect(() => {
			setTimeout(() => {
				setMessage(undefined); 
				setMessageType('');
			}, 2500);

			return () => clearTimeout(timer)
		}, [message]);
		// note: we have message passed in the parameter of useEffect()
		// because we want the useEffect to run every time message is changed

    if (message === undefined) {
			return null
    }

    return (
			<div className={`notification ${messageType}`}>
					{message}
			</div>
    )
}

export default Notification