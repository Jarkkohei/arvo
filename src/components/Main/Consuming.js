import React, { Component } from 'react';
import { Row, Col, Button, Badge } from 'react-bootstrap';

class Consuming extends Component {

    handleSisConsume = () => {
        console.log('Consuming.handleSisConsume');
        this.props.handleConsuming('sisHinta');
    };

    handleSeutuConsume = () => {
        console.log('Consuming.handleSeutuConsume');
        this.props.handleConsuming('seutuHinta');
    };

    render() {
        return (
            <Row style={ style.row }>
                <Col xs={6} style={ style.colLeft }>
                    <Button bsSize="large" onClick={ this.handleSisConsume } bsStyle="danger" disabled={ !this.props.sisMatkat > 0 } style={ style.btn }>
                        Sisäinen <Badge>{ this.props.sisMatkat }</Badge>
                    </Button>
                </Col>
                <Col xs={6} style={ style.colRight }>
                    <Button bsSize="large" onClick={ this.handleSeutuConsume } bsStyle="danger" disabled={ !this.props.seutuMatkat > 0 } style={ style.btn }>
                        Seutu <Badge>{ this.props.seutuMatkat }</Badge>
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
        height: '100%'
    }
};

export default Consuming;