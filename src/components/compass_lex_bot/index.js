import React, { Component} from 'react';
import DevelopmentFact from './components/development_fact';
import CommandIntents from './components/intents';
import GiftcardIntents from './components/giftcardIntents';
import TripChangeRequest from './components/tripRequest';
import SlackCommand from './components/slack_command';

import './index.css'

import EchoLogo from '../../assets/alex_echo.png';
import LexLogo from '../../assets/lexLogo.jpg';
import PlusIcon from '../../assets/plus-icon.png';
import SlackLogo from '../../assets/slackLogo.png';
import EqualIcon from '../../assets/equal-icon.png';
import UpsideBar from '../../assets/upside-bar.png';
import UpsideLogo from '../../assets/upsideLogo.jpeg'



const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

class CompassLexBot extends Component {
  render() {
    return (
      <div className="lex-bot-page">
        <img src={UpsideBar} className="bar-style"/>

        <div className="intro-content">
          <div className="group-icons">
            <img src={EchoLogo} className="echo_image"/>
            <img src={PlusIcon} className="plus-icon"/>
            <img src={LexLogo} className="echo_image"/>
            <img src={PlusIcon} className="plus-icon"/>
            <img src={SlackLogo} className="echo_image"/>
            <img src={PlusIcon} className="plus-icon"/>
            <img src={UpsideLogo} className="echo_image"/>
            <img src={EqualIcon} className="plus-icon"/>
          </div>
          <div className="title">
            <h1>Introduce the Upside Lex Chat Bot: SKIP</h1>

            <h3>Is a conversational bot and virtual assistant that will give you all the information you need on your upcoming trip, and can help you with any hurdle that might come your way</h3>
          </div>
        </div>

        <div className="intro-content">
          <DevelopmentFact/>
        </div>

        <div className="intro-content">
          <CommandIntents/>
        </div>

        <div className="intro-content">
          <GiftcardIntents/>
        </div>

        <div className="intro-content">
          < TripChangeRequest/>
        </div>

        <div className="intro-content">
          < SlackCommand/>
        </div>
      </div>
    );
  }
}

export default CompassLexBot;