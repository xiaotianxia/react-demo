import React from 'react';
import {
    Avatar,
    Tag,
    Icon
} from 'antd';
import './infoCard.scss';

export default class InfoCard extends React.Component {
    render() {
        const userInfo = this.props.userInfo;
        console.log(userInfo)
        return (
            <div className="info-card">
                <a href={userInfo.html_url} target="_blank" rel="noopener noreferrer">
                    <Avatar src={userInfo.avatar_url} />
                </a>
                <span className="info-card-bio">{userInfo.bio || 'He/She says nothing.'}</span>
                <div className="info-card-tags">
                    <Tag title="followers" color="#2db7f5"><Icon type="user" />&nbsp;{userInfo.followers || 0}</Tag>
                    <Tag title="following" color="#2db7f5"><Icon type="user-add" />&nbsp;{userInfo.following || 0}</Tag>
                </div>
                {
                    userInfo.blog &&
                    <>
                        <Icon type="dribbble" /> &nbsp;
                        <a href={userInfo.html_url} target="_blank" rel="noopener noreferrer">{userInfo.blog}</a>
                    </>
                }
                {
                    userInfo.email &&
                    <p><Icon type="global" />&nbsp;{userInfo.email}</p>

                }
                {
                    userInfo.location &&
                    <p><Icon type="environment" theme="filled" />&nbsp;{userInfo.location}</p>
                }
                {
                    userInfo.company && 
                    <p><Icon type="bank" />&nbsp;{userInfo.company}</p>
                }
            </div>
        )
    }
}
