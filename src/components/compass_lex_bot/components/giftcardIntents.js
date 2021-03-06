import React from 'react';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';


import GiftCardCommand from '../../../assets/giftcard.png'

function CommandIntents() {
  return (
    <div>
      <Card>
        <CardContent>
          <h1>Incentives when you need them</h1>
          <li>Ask Upside to show me their gift cards</li>
          <li>Ask Upside for my gift card balance</li>
          <li>How much is the gift card for my last trip</li>
          <li>What's the amount of gift card for my upcoming trip</li>
          <li>Redeem a ​Amazon gift card for ​250$​</li>
          <img src={GiftCardCommand} style={{'width': '400px'}}/>
        </CardContent>
      </Card>
    </div>
  );
}

export default CommandIntents;