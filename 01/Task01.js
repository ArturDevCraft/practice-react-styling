import React from 'react';

import Alert from './../src/components/Alert';
import { Row, Col, Alert as RBAlert } from 'react-bootstrap';

const Task01 = ({ themeName }) => {
	return (
		<Row>
			<Col>
				<RBAlert variant={themeName}>
					Uwaga! <em>Styled Components</em> nadchodzi!
				</RBAlert>
			</Col>
			<Col>
				<Alert>
					Uwaga! <em>Styled Components</em> nadchodzi!
				</Alert>
			</Col>
		</Row>
	);
};

export default Task01;
