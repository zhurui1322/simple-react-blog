import React from 'react';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';

import '../index.css';
import TheFuture from '../../../assets/theFuture.png';
import FutureCompass from '../../../assets/futureCompass.png';

function FutureGoal() {
  return (
    <div>
      <h4>App + Compass Integaration</h4>
      <h4>Push Notifications / Server Sent Trip Updates</h4>
      <h4>More Channels Coming (Facebook, SMS, Google Home)</h4>
      <h4>Maybe show more images here</h4>
      <h4>Recurring Trip Reorder/ Inventory Booking</h4>
      <img src={FutureCompass} className="future-image-style" />
    </div>
  );
}

export default FutureGoal;