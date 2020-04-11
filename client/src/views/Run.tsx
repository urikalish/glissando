import React from 'react';
import { Link } from 'react-router-dom';

export function Run() {
	return (
		<>
			<div>Run</div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/create">Create</Link>
				</li>
				<li>
					<Link to="/join">Join</Link>
				</li>
			</ul>
		</>
	);
}
