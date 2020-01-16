import React from 'react';
import { 
    Form,
    Icon,
    Input,
    Button,
} from 'antd';
import './login.scss';
import api from '@api';
import { withRouter, Redirect } from 'react-router-dom';
import { ls } from '@utils/localStorage';

class RegistrationForm extends React.Component {
    state = {
        loading: false
    }

    handleSubmit = e => {
        e.preventDefault();
        ls.remove('my_github_app_username');
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({ loading: true} );
                this.getUser(values.username);
            }
        });
    };

    async getUser(username) {
        const data = await api.getUser({ username });
        this.setState({ loading: false });
        if (data.id) {
            ls.set('my_github_app_username', username);
            // this.props.history.push('repos');
            this.props.history.goBack();
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const user = ls.get('my_github_app_username');
        if (user) {
            return (<Redirect to="repos" />);
        } else {
            return <div className="login">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                allowClear
                            />,
                        )}
                    </Form.Item>
                    <Form.Item style={{ textAlign: 'center' }}>
                        <Button type="primary" loading={this.state.loading} htmlType="submit">Log in</Button>
                    </Form.Item>
                </Form>
                <div className="login-mask"></div>
            </div>
        }
    }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

export default withRouter(WrappedRegistrationForm);