import React, {memo} from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Switch from '@material-ui/core/Switch/Switch';
import {MyThemeOptions} from '../services/theme-helper';
import {vars} from '../services/vars';

interface MyThemeToggleProps {
	themeOptions: MyThemeOptions;
	onThemeChange: (themeOptions: MyThemeOptions) => void;
}

export const MyThemeToggle = memo(({themeOptions, onThemeChange}: MyThemeToggleProps) => {
	const useStyles = makeStyles((/*theme*/) => ({
		switch: {
			position: 'absolute',
			top: `calc(${vars.appBarHeightRems / 2}rem - 19px)`,
			right: 8,
		},
	}));
	const classes = useStyles();

	const handleThemeChange = () => {
		if (onThemeChange) {
			onThemeChange({isDarkMode: !themeOptions.isDarkMode});
		}
	};

	return (
		<Switch
			checked={themeOptions.isDarkMode}
			onChange={handleThemeChange}
			name="themeSwitch"
			color="default"
			className={classes.switch}
		/>
	);
});
