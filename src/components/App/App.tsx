import React from 'react';
import {Card, Col, Row} from "reactstrap";
import {Albums} from "../Albums/Albums";

export const AppComponent: React.FC = () => {
        const paddingClass: string = 'p-3';

        return (
            <Row className={paddingClass}>
                <Col xs={12} sm={12} md={6}>
                    <Card className={paddingClass}>
                        <Albums />
                    </Card>
                </Col>
            </Row>
        );
};

export const App = AppComponent;
