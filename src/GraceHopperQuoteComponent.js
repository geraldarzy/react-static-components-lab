import React, { Component } from 'react';

export class GraceHopperQuoteComponent extends Component {
	componentDidMount() {
		require("./hoverEffect.js")
	  }
	render() {
		return (
			<div className="bar" id="hopper">
				<i>
					<p>
						&quot;The most dangerous phrase in the language is, ‘We’ve always done it this way.’&quot;
					</p>
				</i>
				<br />
				&#9;-Admiral Grace Hopper
			</div>
		);
	}
}
