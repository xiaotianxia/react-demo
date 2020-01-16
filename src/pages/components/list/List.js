
import React from 'react';
import Item from './components/Item';
import {
    Empty,
    Button,
    Icon
} from 'antd';
import '@style/pages/common.scss';
import { ls } from '@utils/localStorage';

export default class List extends React.Component {
    state = {
        loading: false,
        list: [],
        pageParam: {
            page: 1,
            per_page: 10,
        }
    };

    componentDidMount = () => {
        this.getList();
    }

    async getList() {
        this.setState({
            loading: true,
            list: []
        });
        const listMethod = this.props.listMethod;
        const data = await listMethod({
            ...this.state.pageParam,
            username: ls.get('my_github_app_username'),
        });
        this.setState({
            loading: false,
            list: data
        });
    }

    onPageChange(type) {
        if (type === 'pre') {
            this.setState({
                pageParam: {
                    ...this.state.pageParam,
                    page: this.state.pageParam.page - 1,
                }
            });
        } else {
            this.setState({
                pageParam: {
                    ...this.state.pageParam,
                    page: this.state.pageParam.page + 1,
                }
            });
        }
        this.getList();
    }

    render() {
        const { list } = this.state;
        const result =
            <>
                {
                    list.length > 0 &&
                    <ul className="list">
                        {list.map(item => (
                            <Item key={item.id} {...item}></Item>
                        ))}
                    </ul>
                }
                {
                    list.length === 0 &&
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                }
            </>;

        return (
            <>
                {
                    this.state.loading ? <Icon type="loading" /> : result
                }
                <div className="list-page">
                    <Button.Group>
                        <Button onClick={this.onPageChange.bind(this, 'pre')} disabled={this.state.pageParam.page <= 0}><Icon type="arrow-left" /></Button>
                        <span style={{ fontSize: '10px' }}>&nbsp;{this.state.pageParam.page}&nbsp;</span>
                        <Button onClick={this.onPageChange.bind(this, 'next')} disabled={!list.length}><Icon type="arrow-right" /></Button>
                    </Button.Group>
                </div>
            </>
        )
    }
}
