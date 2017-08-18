import React from 'react';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';


import YourNextTrip from '../../../assets/Show_me_next_trip.png'

function CommandIntents() {
  return (
    <div>
      <Card>
        <CardContent>
          <h1>You next Upside Travel Detail</h1>
          <li>when will my next trip departure</li>
          <li>What is the status on my upcoming flight</li>
          <li>What is the status of my next flight</li>
          <li>Is my flight delayed</li>
          <li>When I get there what is my gate</li>
          <li>When I get there what will the weather be like</li>
          <li>Where is my baggage</li>
          <li>Where is my next trip to</li>
          <li>what is my next trip hotel address</li>
          <li>how long will take to visit White House</li>
          <img src={YourNextTrip} />
        </CardContent>
        <CardActions>
          <Button dense>Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CommandIntents;