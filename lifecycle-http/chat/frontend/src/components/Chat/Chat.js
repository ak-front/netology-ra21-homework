import React, { Component } from 'react';
import uuid4 from 'uuid';
import store from 'store2';

import * as apiChat from './../../api/chat';

import ChatForm from './ChatForm';
import ChatMessage from './ChatMessage';

import './Chat.css';

const KEY_USER_ID = 'userId';

class Chat extends Component {
  state = {
    isLoading: false,
    isSubmitting: false,
    messages: [],
    userId: '',
  }

  componentDidMount() {
    let userId = this.getUserIdFromStore();

    if (userId === null) {
      userId = uuid4();
      this.setUserIdToStore(userId);
    }

    this.setState({userId});
    this.loadMessages();

    this.updateIntervalId = setInterval(() => {
      this.loadMessages();
    }, 1000);
  }

  componentWillUnmount() {
    if (this.updateIntervalId) {
      clearInterval(this.updateIntervalId);
    }
  }

  getUserIdFromStore() {
    return store.get(KEY_USER_ID);
  }

  loadMessages() {
    const {
      isLoading,
      messages
    } = this.state;
    const lastMessage = messages[messages.length - 1] || {};
    const lastMessageId = lastMessage.id || 0;

    if (isLoading) {
      return;
    }

    this.setState({
      isLoading: true
    });

    apiChat.getMessages(lastMessageId)
      .then(newMessages => {
        if (newMessages.length > 0) {
          this.setState(prevState => ({
            ...prevState,
            messages: [
              ...prevState.messages,
              ...newMessages
            ]
          }));
        }
      })
      .finally(() => {
        this.setState({
          isLoading: false
        });
      });
  }

  setUserIdToStore(id) {
    store.set(KEY_USER_ID, id);
  }

  handleFormSubmit = content => {
    const { userId } = this.state;

    this.setState({
      isSubmitting: true
    });

    apiChat.addMessage({
      content,
      userId
    })
      .finally(() => {
        this.setState({
          isSubmitting: false
        });
      });
  }

  render() {
    const {
      isSubmitting,
      messages,
      userId
    } = this.state;

    return (
      <div className="Chat">
        {messages.map(message => (
          <ChatMessage
            key={message.id}
            align={message.userId === userId ? 'right' : null}
            content={message.content}
          />
        ))}
        <ChatForm
          isSubmitting={isSubmitting}
          onSubmit={this.handleFormSubmit}
        />
      </div>
    );
  }
}

export default Chat;
