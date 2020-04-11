import React from 'react';
import { Link } from 'react-router-dom';

export function Create() {
	return (
		<>
			<div>Create</div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/join">Join</Link>
				</li>
				<li>
					<Link to="/run">Run</Link>
				</li>
			</ul>
		</>
	);
}
