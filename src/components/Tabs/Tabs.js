import React, { useState } from 'react';
import TabBodyItem from './TabBodyItem.styled';
import TabNavItem from './TabNavItem.styled';
import TabNavContainer from './TabNavContainer.styled';

const Tabs = ({ children, defaultActiveKey }) => {
	const [currentActiveKey, setCurrentActiveKey] = useState(defaultActiveKey);

	const navigation = React.Children.map(children, (child) => {
		const { eventKey, title, disabled } = child.props;
		const selected = currentActiveKey === eventKey ? true : false;
		return (
			<TabNavItem
				selected={selected}
				onClick={() => setCurrentActiveKey(eventKey)}
				disabled={disabled}
			>
				{title}{' '}
			</TabNavItem>
		);
	});

	const body = React.Children.map(children, (child) => {
		const { children, eventKey } = child.props;
		const hidden = currentActiveKey === eventKey ? false : true;
		return (
			<>
				<TabBodyItem hidden={hidden}>{children}</TabBodyItem>
			</>
		);
	});

	return (
		<>
			<TabNavContainer>{navigation}</TabNavContainer>
			<div>{body}</div>
		</>
	);
};

export default Tabs;
