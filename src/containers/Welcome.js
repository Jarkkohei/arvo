import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div style={ style.row }>
                Welcome
            </div>
        )
    }
}

const style = {
    row: {
        marginTop: '10vh',
        backgroundColor: 'salmon'
    }
};

export default Welcome;