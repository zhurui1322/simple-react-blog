import React from 'react';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';


import SlackLogo from '../../../assets/slackLogo.png'
import SlackCommand from '../../../assets/slack_command.png'

function CommandIntents() {
  return (
    <div>
      <Card>
        <CardContent>
          <h1>Also We integrate our bot into Slack</h1>
          <h1>You can type and ask all the intents</h1>
          <img src={SlackLogo} />
          <img src={SlackCommand} />
        </CardContent>
      </Card>
    </div>
  );
}

export default CommandIntents;