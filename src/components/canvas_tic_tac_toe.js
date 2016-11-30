import React, { Component } from 'react';

export default class Canvas extends Component {

    componentDidMount () {
        this.drawLines();
    }

    drawLines () {
        const canvas = document.getElementById('tic-tac-toe-canvas');
        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = '#a9a9a9';
        ctx.beginPath();

        for (var i=25.5; i<552; i+=i=25) {
            ctx.moveTo(0, i);
            ctx.lineTo(550, i);
            ctx.stroke();
        }

        for (i=25.5; i<552; i+=i=25) {
            ctx.moveTo(i, 0);
            ctx.lineTo(i, 550);
            ctx.stroke();
        }
    }

    render () {
        return (
            <canvas id="tic-tac-toe-canvas" width={500} height={500}></canvas>
        );
    }
}