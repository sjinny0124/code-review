import React from "react";
import { Icon, Button } from "antd";
import styled from "styled-components";
import * as api from "../api";
import PropTypes from "prop-types";

const Page = styled.div`
  margin-top: 100px;

  form {
    display: flex;
    flex-direction: column;
    max-width: 250px;
    margin: 0 auto;
    label {
      display: flex;
      flex-direction: column;
      margin-bottom: 1em;
      font-weight: bold;
    }

    input {
      padding: 8px 6px;
      border: 1px solid #aaa;
      border-radius: 2px;
      font-size: 14px;
      &:focus {
        outline: none;
        border: 1px solid #3257ff;
      }
    }

    button {
      height: 50px;
    }
  }

  .error {
    background: #ffebee;
    color: #c62828;
    padding: 5px;
    font-size: 16px;
    text-align: center;
    margin-bottom: 1em;
  }
`;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      iconLoading: false,
      username: "",
      password: ""
    };

    //this.usernameRef = React.createRef();
    //this.passwordRef = React.createRef();
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    api
      .login(this.state.username, this.state.password)
      .then(user => {
        this.setState({ loading: false });
        this.props.onLogin(user);
      })
      .catch(error => this.setState({ error, loading: false }));
  };
  render() {
    const { username, password, error, loading } = this.state;
    return (
      <Page>
        <Icon type="loading" />
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input
              name="username"
              value={username}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </label>
          {error && <div className="error">{error.message}</div>}
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            disabled={loading}
          >
            Sign In
          </Button>
        </form>
      </Page>
    );
  }
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default LoginPage;
