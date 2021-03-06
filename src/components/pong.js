import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import Canvas from './canvas_pong';
import GameInfo from './game_info_pong';
import ConnectedUsers from './game_info_connected_users'
import ChangeName from './game_info_change_name'

export default class Pong extends Component {
    render () {
        return (
            <div>
                <Col md={7}>
                    <Canvas />
                </Col>
                <Col md={5}>
                    <GameInfo />
                    <ConnectedUsers />
                    <ChangeName />
                </Col>
            </div>
        );
    }
}