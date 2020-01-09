import React from 'react';
import Item from '../components/item/Item';
import api from '../../request/api';
console.log(api.getRecommend);

export default class Recommend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount () {
        this.getList();
    }

    getList() {
        api.getRecommend()
        const newList = [{id:1}];
        this.setState({
            list: this.state.list.concat(newList)
        });
    }

    render() {
        const {list} = this.state;
        return (
            <ul className="list">
                {list.map(item => (<Item key={item.id}></Item>))}
            </ul>
        )
    }
}
