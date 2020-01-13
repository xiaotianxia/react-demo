import React from 'react';
import {
    Tag,
    Icon,
    message
} from 'antd';
import { format } from 'timeago.js';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './detailCard.scss';

export default class InfoCard extends React.Component {
    onCopied () {
        message.success('copied to clipboard!');
    }

    render() {
        const detailInfo = this.props.detailInfo;
        return (
            <div className="detail-card">
                <div className="info-card-bio">{detailInfo.description || 'He/She says notinng.'}</div>
                {
                    detailInfo.homepage &&
                    <div>
                        <Icon type="link" /> &nbsp;
                        <a href={detailInfo.homepage} target="_blank" rel="noopener noreferrer">{detailInfo.homepage}</a>
                    </div>
                }
                {
                    detailInfo.clone_url &&
                    <div>
                        <CopyToClipboard text={detailInfo.clone_url}
                            onCopy={() => this.onCopied()}>
                            <div>
                                <a href="void:0">{detailInfo.clone_url}</a>&nbsp;
                                <Icon type="copy" /> 
                            </div>
                        </CopyToClipboard>
                    </div>
                }
                <div className="info-card-tags">
                    <Tag color="#2db7f5"><Icon type="code" /> {detailInfo.language}</Tag>
                    <Tag color="#87d068"><Icon type="eye" /> {detailInfo.watchers_count}</Tag>
                    <Tag color="#108ee9"><Icon type="star" /> {detailInfo.stargazers_count}</Tag>
                    <Tag color="#f50"><Icon type="fork" /> {detailInfo.forks_count}</Tag>
                </div>

                <div>created: {format(detailInfo.created_at)}</div>
                <div>updated: {format(detailInfo.updated_at)}</div> 
            </div>
        )
    }
}
