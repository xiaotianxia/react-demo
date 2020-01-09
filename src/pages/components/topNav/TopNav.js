import React from 'react';
import './topNav.scss';

export default class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="topnav">
                <h1>网易新闻</h1>
            </div>
        )
    }
}
