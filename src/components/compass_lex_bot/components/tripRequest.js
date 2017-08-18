import React from 'react';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';


import YourNextTrip from '../../../assets/Show_me_next_trip.png'

function CommandIntents() {
  return (
    <div>
      <Card>
        <CardContent>
          <h1>Use you Voice to change you package</h1>
          <li>cancel my trip</li>
          <li>cancel my flight</li>
          <li>cancel my hotel</li>
          <li>cancel my rental car</li>
          <li>upgrade hotel to</li>

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