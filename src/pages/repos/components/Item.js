import React from 'react';
import { 
    Card,
    Tag,
    Icon,
    Popover,
} from 'antd';
import DetailCard from './detailCard/DetailCard';
import api from '../../../request/api';
import { cutStr } from '../../../utils/util';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popoverContent: <Icon type="loading" />
        }
    }

    async onMouseOver(username, repo, visible) {
        if (visible) {
            const detailInfo = await api.getRepoDetail({
                username,
                repo: repo
            });
            this.setState({
                popoverContent: <DetailCard detailInfo={detailInfo} />
            });
        }
    }

    render() {
        const {
            name,
            description,
            language,
            html_url,
            watchers_count,
            stargazers_count,
            forks_count,
            owner,
        } = this.props;
        return (
            <li className="item">
                <Card title={name}>
                    <Popover content={this.state.popoverContent} title={name} mouseEnterDelay={.5} onVisibleChange={this.onMouseOver.bind(this, owner.login, name)}>
                        <p className="description" title={description}>
                            <a href={html_url} target="_blank" rel="noopener noreferrer">{cutStr(description)}</a>
                        </p>
                        <Tag color="#2db7f5"><Icon type="code" /> {language}</Tag>
                        <Tag color="#87d068"><Icon type="eye" /> {watchers_count}</Tag>
                        <Tag color="#108ee9"><Icon type="star" /> {stargazers_count}</Tag>
                        <Tag color="#f50"><Icon type="fork" /> {forks_count}</Tag>
                    </Popover>
                </Card>
            </li>
        )
    }
}
