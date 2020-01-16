
import React from 'react';
import Item from './components/Item';
import {
    Empty,
    Icon,
} from 'antd';
import api from '@api';
import '@style/pages/common.scss';
import { ls } from '@utils/localStorage';
export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            loading: false,
        };
    }

    componentDidMount = () => {
        this.getList();
    }

    async getList() {
        this.setState({
            loading: true,
        });
        const data = await api.getRepos({
            username: ls.get('my_github_app_username')
        });
        this.setState({
            loading: false,
            list: data
        });
    }

    render() {
        const { list } = this.state;
        let result = null;
        if (list.length) {
            result = (<ul className="list repos-list">
                {
                    list.map(item => (
                        <Item key={item.id} {...item}></Item>
                    ))
                }
            </ul>);
        } else {
            result = <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
        }
        return (
            <div className="repos">
                {
                    this.state.loading ? <Icon type="loading" /> : result
                }
            </div>
        )
    }
}
