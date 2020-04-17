import React, {memo} from 'react';
import {Link} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem/ListItem';
import List from '@material-ui/core/List/List';

interface RunProps {}

export const Run = memo(({}: RunProps) => {
	return (
		<>
			<div>Run</div>
			<hr />
			<List>
				<ListItem>
					<Link to="/">Home</Link>
				</ListItem>
			</List>
		</>
	);
});
