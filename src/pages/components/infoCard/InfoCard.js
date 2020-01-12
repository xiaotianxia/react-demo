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
                <span className="info-card-bio">{userInfo.bio || 'He/She says notinng.'}</span>
                <div className="info-card-tags">
                    <Tag title={userInfo.followers} color="#2db7f5"><Icon type="user" /> {userInfo.followers || 0}</Tag>
                    <Tag title={userInfo.following} color="#2db7f5"><Icon type="user-add" /> {userInfo.following || 0}</Tag>
                </div>
                {
                    userInfo.blog &&
                    <p><Icon type="dribbble" /> {userInfo.blog}</p>

                }
                {
                    userInfo.email &&
                    <p><Icon type="global" /> {userInfo.email}</p>

                }
                {
                    userInfo.location &&
                    <p><Icon type="environment" theme="filled" /> {userInfo.location}</p>
                }
                {
                    userInfo.company && 
                    <p><Icon type="bank" /> {userInfo.company}</p>
                }
            </div>
        )
    }
}
