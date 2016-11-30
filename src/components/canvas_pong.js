import React, { Component } from 'react';

export default class Canvas extends Component {
    render () {
        return (
            <canvas id="pong-canvas" width={500} height={500}></canvas>
        );
    }
}