import React from 'react';
import {
    Timeline,
    Icon,
    Tag
} from 'antd';
import { format } from 'timeago.js';
import './item.scss'

export default class Item extends React.Component {
    render() {
        const itemInfo = this.props.itemInfo;
        const index = this.props.index;
        const {
            type,
            actor,
            payload,
            repo,
        } = itemInfo;
        const dot = {
            PushEvent: <Icon type="smile" theme="twoTone" />,
            WatchEvent: <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />,
            CreateEvent: <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />,
            IssuesEvent: <Icon type="form" />,
            IssueCommentEvent: <Icon type="interaction" />,
            CommitCommentEvent: <Icon type="form" />,
            PullRequestEvent: <Icon type="cloud-upload" />,
            ForkEvent: <Icon type="fork" />,
        }[type] || '';
        return (
            <Timeline.Item dot={dot}>
                <span>
                    <a href={`https://github.com/${actor.display_login}`} target="_blank" rel="noopener noreferrer">{actor.display_login}</a>
                    &nbsp;
                </span>
                {
                    type === 'PushEvent' &&
                    <span>
                        created {payload.commits.length} commits in repository &nbsp;
                        <a href={`https://github.com/${repo.name}`} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                    </span>
                }
                {
                    type === 'WatchEvent' &&
                    <span>
                        starred repository &nbsp;
                        <a href={`https://github.com/${repo.name}`} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                    </span>
                }
                {
                    type === 'CreateEvent' &&
                    <span>
                        created a repository &nbsp;
                        <a href={`https://github.com/${repo.name}`} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                    </span>
                }
                {
                    type === 'IssuesEvent' &&
                    <span>
                        opened an &nbsp;
                        <a href={payload.issue.html_url} target="_blank" rel="noopener noreferrer">issue</a>
                        &nbsp; in &nbsp;
                        <a href={`https://github.com/${repo.name}`} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                    </span>
                }
                {
                    type === 'IssueCommentEvent' &&
                    <span>
                        commented  &nbsp; 
                        <a href={`https://github.com/${payload.issue.user.login}`} target="_blank" rel="noopener noreferrer">{payload.issue.user.login}</a> 
                        &nbsp; in &nbsp;
                        <a href={payload.comment.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                    </span>
                }
                {
                    type === 'CommitCommentEvent' &&
                    <span>
                        commited a commented in &nbsp;
                        <a href={payload.comment.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                    </span>
                }
                {
                    type === 'PullRequestEvent' &&
                    <span>
                        pulled requests <Tag>{payload.pull_request.state}</Tag>
                        in &nbsp;
                        <a href={payload.pull_request.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                    </span>
                }
                {
                    type === 'ForkEvent' &&
                    <span>
                        forked &nbsp;
                        <a href={`https://github.com/${repo.name}`} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                    </span>
                }

                <span className="time">{format(itemInfo.created_at)}</span>
            </Timeline.Item>
        )
    }
}
