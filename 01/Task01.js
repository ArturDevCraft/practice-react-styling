import React from 'react';
import { Row, Col, Alert as RBAlert } from 'react-bootstrap';
import { ThemeProvider } from 'styled-components';
import { primaryTheme, secondaryTheme } from '../src/components/themes';
import Alert from './../src/components/Alert';

const Task01 = () => {
	return (
		<Row>
			<Col>
				<RBAlert variant="primary">
					Uwaga! <em>Styled Components</em> nadchodzi!
				</RBAlert>
				<RBAlert variant="secondary">
					Uwaga! <em>Styled Components</em> nadchodzi!
				</RBAlert>
				<RBAlert>
					Uwaga! <em>Styled Components</em> nadchodzi!
				</RBAlert>
			</Col>
			<Col>
				<ThemeProvider theme={primaryTheme}>
					<Alert>
						Uwaga! <em>Styled Components</em> nadchodzi!
					</Alert>
				</ThemeProvider>
				<ThemeProvider theme={secondaryTheme}>
					<Alert>
						Uwaga! <em>Styled Components</em> nadchodzi!
					</Alert>
				</ThemeProvider>
				<Alert>
					Uwaga! <em>Styled Components</em> nadchodzi!
				</Alert>
			</Col>
		</Row>
	);
};

export default Task01;
