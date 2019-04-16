import React from "react";
import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  ul {
    font-size: 16px;
    list-style: none;
    position: absolute;
    top: 35px;
    right: 5px;
    margin: 0;
    padding: 5px 0;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  }
  li {
    cursor: pointer;
    display: block;
    padding: 3px 20px;
    &:hover {
      background-color: #e3eafd;
    }
  }

  .UserAvatar {
    height: 36px;
    border-radius: 50%;
  }
`;

const UserMenu = ({ user, onLogout }) => {
  return (
    <Menu className="UserMenu">
      <img className="UserAvatar" alt="User avatar" src={user.avatar} />
      <ul>
        <li onClick={onLogout}>Logout</li>
      </ul>
    </Menu>
  );
};

export default UserMenu;
