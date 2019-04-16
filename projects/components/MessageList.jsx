import React from "react";
import styled from "styled-components";

const List = styled.div`
  grid-area: MessageList;
  padding: 10px;

  .no-messages {
    text-align: center;
    color: #999;
    margin-top: 40px;
  }
`;

const MessageList = ({ user }) => (
  <List className="MessageList">
    <div className="no-messages">Your mailbox is empty, {user.firstName}!</div>
  </List>
);

export default MessageList;
