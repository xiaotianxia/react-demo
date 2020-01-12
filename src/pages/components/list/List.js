
import React from 'react';
import Item from './components/Item';
import {
    Empty,
    Button,
    Icon
} from 'antd';
import '../../../style/pages/common.scss';

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
        console.log(this.props)
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
            username: 'xiaotianxia',
        });
        this.setState({
            loading: false,
            list: data
        });
        console.log(this.state.pageParam.page)
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
        console.log(this.state.pageParam.page)
    }

    render() {
        const { list } = this.state;
        const result =
            <div>
                {
                    list.length > 0 &&
                    <ul className="list following-list">
                        {list.map(item => (
                            <Item key={item.id} {...item}></Item>
                        ))}
                    </ul>
                }
                {
                    list.length === 0 &&
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                }
                <div className="list-page">
                    <Button.Group>
                        <Button onClick={this.onPageChange.bind(this, 'pre')} disabled={this.state.pageParam.page <= 0}><Icon type="left" />上一页</Button>
                        <span>&nbsp;第{this.state.pageParam.page}页&nbsp;</span>
                        <Button onClick={this.onPageChange.bind(this, 'next')} disabled={!list.length}>下一页<Icon type="right" /></Button>
                    </Button.Group>
                </div>
            </div>;

        return (
            <div className="repos">
                {
                    this.state.loading ? <Icon type="loading" /> : result
                }
            </div>
        )
    }
}
