import React from 'react';
import './item.scss';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <li className="item">
                -
            </li>
        )
    }
}
