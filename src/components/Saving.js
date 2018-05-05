import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

class Saving extends Component {

    handleSave = () => {
        console.log('Saving.handleSave');
        this.props.store();
    };

    render() {
        return (
            <Row style={ style.row }>
                <Col xs={12} style={ style.col }>
                    <Button onClick={ this.handleSave } bsSize="large" bsStyle="success" style={ style.btn } disabled={ this.props.upToDate }>Tallenna</Button>
                </Col>
            </Row>
        )
    };
}

const style = {
    row: {
        height: '20vh',
        marginBottom: '10px'
    },
    col: {
        height: '100%'
    },
    btn: {
        width: '100%',
        height: '100%'
        
    }
};

export default Saving;