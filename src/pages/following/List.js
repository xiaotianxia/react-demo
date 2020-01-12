
import React from 'react';
import Item from './components/Item';
import { Empty } from 'antd';
import api from '../../request/api';
import '../../style/pages/common.scss';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount = () => {
        this.getList();
    }

    async getList() {
        const data = await api.getFollowing({ username: 'xiaotianxia' });
        this.setState({
            list: this.state.list.concat(data)
        });
    }

    render() {
        const { list } = this.state;
        let result = null;
        if (list.length) {
            result = <ul className="following-list">
                {list.map(item => (
                    <Item key={item.id} {...item}></Item>
                ))}
            </ul>;
        } else {
            result = <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
        }
        return (
            <div className="repos">
                {result}
            </div>
        )
    }
}
