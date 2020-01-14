
import React from 'react';
import Item from './components/Item';
import api from '@api';
import '@style/pages/common.scss';
import {
    Timeline
} from 'antd';
import { ls } from '@utils/localStorage';

export default class List extends React.Component {
    state = {
        list: []
    }

    componentDidMount = () => {
        this.getList();
    }

    async getList() {
        const data = await api.getEvents({
            username: ls.get('my_github_app_username'),
        });
        this.setState({
            list: this.state.list.concat(data)
        });
    }

    render() {
        const { list } = this.state;
        const username = ls.get('my_github_app_username');
        return (
            <div className="events">
                <h2 style={{ margin: 20, fontSize: 20 }}>
                    What happened to &nbsp;
                    <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">{username}</a>
                    &nbsp; rencently ?
                </h2>
                <Timeline>
                    {list.map(item => (
                        <Item itemInfo={item} key={item.id}></Item>
                    ))}
                </Timeline>
            </div>
        )
    }
}
