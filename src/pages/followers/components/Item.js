import React from 'react';
import {
    Card,
    Avatar
} from 'antd';

export default class Item extends React.Component {
    render() {
        const {
            login,
            avatar_url,
            html_url
        } = this.props;
        return (
            <li className="item">
                <Card bordered={false}>
                    <Card.Meta
                        avatar={
                            <Avatar src={avatar_url} />
                        }
                        title={login}
                    />
                    <p className="description"><a href={html_url} target="_blank">visit</a></p>
                </Card>
            </li>
        )
    }
}
