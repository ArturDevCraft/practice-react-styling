const primaryTheme = {
	name: 'primary',
	styles: {
		backgroundColor: '#cce5ff',
		border: '1px solid #b8daff',
		color: '#004085',
	},
};

const secondaryTheme = {
	name: 'secondary',
	styles: {
		backgroundColor: '#e2e3e5',
		border: '1px solid #d6d8db',
		color: '#383d41',
	},
};

const buttonPrimaryTheme = {
	name: 'primary',
	styles: {
		backgroundColor: '#007bff',
		border: '1px solid #007bff',
		color: '#ffffff',
		'&[data-active]': {
			backgroundColor: '#0056b3',
			border: '1px solid #0056b3',
		},
		'&[data-lg]': {
			padding: '0.5rem 1rem',
			fontSize: '1.25rem',
		},
		'&:disabled': {
			opacity: '.65',
		},
		':hover': {
			backgroundColor: '#0069d9',
			border: '1px solid #0062cc',
		},
	},
};

const buttonSecondaryTheme = {
	name: 'secondary',
	styles: {
		backgroundColor: '#6c757d',
		border: '1px solid #6c757d',
		color: '#ffffff',
		'&[data-active]': {
			backgroundColor: '#545b62',
			border: '1px solid #545b62',
		},
		'&[data-lg]': {
			padding: '0.5rem 1rem',
			fontSize: '1.25rem',
		},
		'&:disabled': {
			opacity: '.65',
		},
		':hover': {
			backgroundColor: '#5a6268',
			border: '1px solid #545b62',
		},
	},
};

const buttonVariants = {
	primary: buttonPrimaryTheme,
	secondary: buttonSecondaryTheme,
};

export { primaryTheme, secondaryTheme, buttonVariants };
