import React, {memo} from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Switch from '@material-ui/core/Switch/Switch';
import {MyThemeOptions} from '../services/theme-helper';

interface MyThemeToggleProps {
	themeOptions: MyThemeOptions;
	onThemeChange: (themeOptions: MyThemeOptions) => void;
}

export const MyThemeToggle = memo(({themeOptions, onThemeChange}: MyThemeToggleProps) => {
	const useStyles = makeStyles((/*theme*/) => ({
		switch: {
			position: 'absolute',
			top: '1rem',
			right: '1rem',
		},
	}));
	const classes = useStyles();

	const onChangeTheme = () => {
		if (onThemeChange) {
			onThemeChange({isDarkMode: !themeOptions.isDarkMode});
		}
	};

	return (
		<Switch
			checked={themeOptions.isDarkMode}
			onChange={onChangeTheme}
			name="themeSwitch"
			color="default"
			className={classes.switch}
		/>
	);
});
