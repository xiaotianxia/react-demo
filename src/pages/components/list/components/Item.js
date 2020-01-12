import React from 'react';
import {
    Card,
    Avatar,
    Popover,
    Icon
} from 'antd';
import InfoCard from '../../infoCard/InfoCard';
import api from '../../../../request/api';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popoverContent: <Icon type="loading" />
        }
    }

    async onMouseOver (username, visible) {
        console.log(visible)
        if (visible) {
            const userInfo = await api.getInfo({ username });
            this.setState({
                popoverContent: <InfoCard userInfo={userInfo} />
            });
        }
    }
    
    render() {
        const {
            login,
            avatar_url,
            html_url
        } = this.props;

        return (
            <li className="item">
                <Card bordered={false}>
                    <Popover content={this.state.popoverContent} title={login} mouseEnterDelay={.5} onVisibleChange={this.onMouseOver.bind(this, login)}>
                        <Card.Meta
                            avatar={
                                <Avatar src={avatar_url} />
                            }
                            title={login} 
                        />
                    </Popover>
                    <p className="description">
                        <a href={html_url} target="_blank" rel="noopener noreferrer">visit</a>
                    </p>
                </Card>
            </li>
        )
    }
}
