import React from 'react';
import { 
    Card,
    Tag,
    Icon 
} from 'antd';

export default class Item extends React.Component {
    render() {
        const {
            name,
            description,
            language,
            html_url,
            watchers_count,
            stargazers_count,
            forks_count
        } = this.props;
        return (
            <li className="item">
                <Card title={name}>
                    <p className="description"><a href={html_url} target="_blank">{description}</a></p>
                    <Tag color="#2db7f5"><Icon type="code" /> {language}</Tag>
                    <Tag color="#87d068"><Icon type="eye" /> {watchers_count}</Tag>
                    <Tag color="#108ee9"><Icon type="star" /> {stargazers_count}</Tag>
                    <Tag color="#f50"><Icon type="fork" /> {forks_count}</Tag>
                </Card>
            </li>
        )
    }
}
