import React, {memo} from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button/Button';

interface MyThemeToggleProps {
	onToggleChange: () => void;
}

export const MyThemeToggle = memo(({onToggleChange}: MyThemeToggleProps) => {
	const useStyles = makeStyles((/*theme*/) => ({
		button: {
			position: 'absolute',
			top: '1rem',
			right: '1rem',
		},
	}));
	const classes = useStyles();

	const onClickToggle = () => {
		if (onToggleChange) {
			onToggleChange();
		}
	};

	return (
		<Button onClick={onClickToggle} variant="contained" className={classes.button}>
			Toggle Theme
		</Button>
	);
});
