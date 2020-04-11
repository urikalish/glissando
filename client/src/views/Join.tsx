import React from 'react';
import { Link } from 'react-router-dom';

export function Join() {
	return (
		<>
			<div>Join</div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/create">Create</Link>
				</li>
				<li>
					<Link to="/run">Run</Link>
				</li>
			</ul>
		</>
	);
}
