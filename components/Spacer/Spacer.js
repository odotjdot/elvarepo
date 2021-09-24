import React from 'react';

export default function Spacer({ marginTop, marginBottom }) {
	return (
		<div
			style={{ marginTop: `${marginTop}px`, marginBottom: `${marginBottom}px` }}
		></div>
	);
}
