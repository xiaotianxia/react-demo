import React from 'react';
import {
    Timeline
} from 'antd';
import { format } from 'timeago.js';

export default class Item extends React.Component {
    render() {
        const itemInfo = this.props.itemInfo;
        const {
            type,
            actor,
            payload,
            repo
        } = itemInfo;
        return (
            <Timeline.Item>
                {
                    type === 'PushEvent' &&
                    <span>
                        {actor.display_login} created {payload.commits.length} commits in repository &nbsp;
                        <a href={repo.url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                    </span>
                }
                {
                    type === 'WatchEvent' &&
                    <span>
                        {actor.display_login} starred repository &nbsp;
                        <a href={repo.url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                    </span>
                }
                {
                    type === 'CreateEvent' &&
                    <span>
                        {actor.display_login} created a repository &nbsp;
                        <a href={repo.url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                    </span>
                }

                <span>&nbsp;{format(itemInfo.created_at)}</span>
            </Timeline.Item>
        )
    }
}
