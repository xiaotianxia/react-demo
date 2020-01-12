
import React from 'react';
import List from '../components/list/List';
import api from '../../request/api';

export default class extends React.Component {
    render() {
        return (
            <div className="following">
                <List listMethod={api.getFollowing}/>
            </div>
        )
    }
}
