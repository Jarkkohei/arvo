import React, { Component } from 'react';
import { Row, Col, Well } from 'react-bootstrap';

class Amount extends Component {

    render() {
        return (
            <Row style={ style.row }>
                <Col xs={12} style={ style.col }>
                    <Well style={ !this.props.underLimit ? style.well : style.limitWarningWell } >
                        <h1 style={ style.h1 } >{ this.props.amount } €</h1>
                    </Well>
                </Col>
            </Row>
        );
    };
}

const style = {
    row: {
        height: '23vh',
        marginTop: '7vh',
        marginBottom: '25px'
    },
    col: {
        height: '100%'
    },
    well: {
        marginTop: '15px',
        marginBottom: '15px',
        padding: 0,
        height: '100%',
        position: 'relative',
    },
    limitWarningWell: {
        marginTop: '15px',
        marginBottom: '15px',
        padding: 0,
        height: '100%',
        position: 'relative',
        backgroundColor: 'red',
        color: 'white'
    },
    h1: {
        TransformY: '50%',
        fontSize: '4em',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -75%)'
    }
};

export default Amount;