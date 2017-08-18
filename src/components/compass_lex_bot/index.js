import React, { Component} from 'react';
import DevelopmentFact from './components/development_fact';
import CommandIntents from './components/intents';
import GiftcardIntents from './components/giftcardIntents';
import TripChangeRequest from './components/tripRequest';
import SlackCommand from './components/slack_command';
import FutureGoal from './components/future_goal';
import Overview from './components/overview';

import './index.css'

import EchoLogo from '../../assets/alex_echo.png';
import LexLogo from '../../assets/lexLogo.jpg';
import PlusIcon from '../../assets/plus-icon.png';
import SlackLogo from '../../assets/slackLogo.png';
import EqualIcon from '../../assets/equal-icon.png';
import UpsideBar from '../../assets/upside-bar.png';
import UpsideLogo from '../../assets/upsideLogo.jpeg';

import TheFuture from '../../assets/theFuture.png';


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
            <img src={UpsideLogo} className="echo_image"/>
            <img src={PlusIcon} className="plus-icon"/>
            <img src={SlackLogo} className="echo_image"/>
            <img src={EqualIcon} className="plus-icon"/>
          </div>
          <div className="title">
            <h1 style={{'margin-top': '10px', 'margin-bottom': '10px', 'font-size': '250%'}}>Skip</h1>
            <h1>Introducing the Upside Lex Chat Bot</h1>
            <h4 style={{'margin-top': '100px'}}> Personal assistant to help you will any trip query or update you may need before you go or on your trip.
              Just like our navigators, this is available 24/7 via chat or your Alexa so that you receive the best and most
              convenient customer experience</h4>
          </div>
        </div>

        <div className="intro-content">
          <DevelopmentFact/>
        </div>

        <div className="intro-content">
          <Overview/>
        </div>

        <div className="intro-content">
          <CommandIntents/>
        </div>

        <div className="intro-content">
          <TripChangeRequest/>
        </div>

        <div className="intro-content">
          <GiftcardIntents/>
        </div>

        <div className="intro-content">
          <SlackCommand/>
        </div>

        <div style={{'margin': '100px'}}>
          <img src={TheFuture} className="future-image-style"/>
        </div>

        <div className="intro-content">
          <FutureGoal />
        </div>


      </div>
    );
  }
}

export default CompassLexBot;