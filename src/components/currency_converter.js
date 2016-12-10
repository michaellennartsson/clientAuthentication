import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, MenuItem, SplitButton, Dropdown, Menu } from 'react-bootstrap';

import * as actions from '../actions/'

class CurrencyConverter extends Component {

    componentWillMount () {
        this.props.fetchCurrency();
    }

    renderCurrencyList (currency) {
        
        return (
            <MenuItem onSelect={function(eventKey, event) {console.log(eventKey)}} eventKey={currency}>{currency}</MenuItem>
        );
    }

    renderCurrencyInfo () {
        const data = this.props.currency;

        if (data.rates !== undefined) {
            const currencyNames = Object.keys(data.rates);
            return (
                <div>
                    <Dropdown id="dropdown-currency">
                        <Dropdown.Toggle>
                            Select currency
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="currency-class">
                            {currencyNames.map(this.renderCurrencyList)}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            );
        }
        
        // When currency hasn't loaded yet
        return (
            <div>
                Loading...
            </div>
        );
    }

    render () {
        return (
            <div>
                <Col md={2}>
                </Col>
                <Col md={8}>
                    <h3>Currency Converter</h3>
                    <p>Currencys are provided by http://www.fixer.io.</p>
                    <p>Latest currency update at: {this.props.currency.date}.</p><br />
                    <h4>Convert:</h4>
                    {this.renderCurrencyInfo()}
                </Col>
                <Col md={2}>
                </Col>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {currency: state.currency}
}

export default connect(mapStateToProps, actions)(CurrencyConverter)