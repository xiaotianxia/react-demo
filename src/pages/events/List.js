
import React from 'react';
import Item from './components/Item';
import api from '@api';
import '@style/pages/common.scss';
import {
    Timeline
} from 'antd';

export default class List extends React.Component {
    state = {
        list: []
    }

    componentDidMount = () => {
        this.getList();
    }

    async getList() {
        const data = await api.getEvents({ username: 'xiaotianxia' });
        this.setState({
            list: this.state.list.concat(data)
        });
    }

    render() {
        const { list } = this.state;
        return (
            <div className="events">
                <Timeline>
                    {list.map(item => (
                        <Item itemInfo={item} key={item.id}></Item>
                    ))}
                </Timeline>
            </div>
        )
    }
}
