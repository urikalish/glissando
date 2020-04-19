import React, {memo} from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Switch from '@material-ui/core/Switch/Switch';
import {MyThemeOptions} from '../services/theme-helper';
import {myVars} from '../services/my-vars';

interface ThemeToggleProps {
	themeOptions: MyThemeOptions;
	onThemeChange: (themeOptions: MyThemeOptions) => void;
}

export const ThemeToggle = memo(({themeOptions, onThemeChange}: ThemeToggleProps) => {
	const useStyles = makeStyles((/*theme*/) => ({
		switch: {
			position: 'absolute',
			top: `calc(${myVars.mastheadHeightRems / 2}rem - 19px)`,
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
