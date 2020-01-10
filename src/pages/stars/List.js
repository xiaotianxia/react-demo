
import React from 'react';
import Item from './components/Item';
import api from '../../request/api';
import '../../style/pages/common.scss';

export default class Recommend extends React.Component {
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
        const data = await api.getRepos({username: 'xiaotianxia'});
        console.log(data);
        const newList = JSON.parse(data) || [];
        this.setState({
            list: this.state.list.concat(newList)
        });
    }

    render() {
        const { list } = this.state;
        return (
            <div className="repos">
                <ul className="repos-list">
                    {list.map(item => (<Item key={item.id} {...item}></Item>))}
                </ul>
            </div>
        )
    }
}
