import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

class Adding extends Component {

    handleAddFive = () => {
        console.log('Adding.handleAddFive');
        this.props.handleAddition(5);
    };

    handleAddTen = () => {
        console.log('Adding.handleAddTen');
        this.props.handleAddition(10);
    };

    render() {

        return (
            <Row style={ style.row }>
                <Col xs={6} style={ style.colLeft }>
                    <Button bsSize="large" onClick={ this.handleAddFive } bsStyle="primary" style={ style.btn}>
                        + 5 €
                    </Button>
                </Col>
                <Col xs={6} style={ style.colRight }>
                    <Button bsSize="large" onClick={ this.handleAddTen } bsStyle="primary" style={ style.btn }>
                        + 10 €
                    </Button>
                </Col>
            </Row>
        );
    };
}

const style = {
    row: {
        height: '20vh',
        marginBottom: '10px'
    },
    colLeft: {
        height: '100%',
        paddingRight: '4px'
    },
    colRight: {
        height: '100%',
        paddingLeft: '4px'
    },
    btn: {
        width: '100%',
        height: '100%',
    }
};

export default Adding;