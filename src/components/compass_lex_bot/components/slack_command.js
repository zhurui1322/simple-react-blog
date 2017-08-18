import React from 'react';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';


import YourNextTrip from '../../../assets/Show_me_next_trip.png'

function CommandIntents() {
  return (
    <div>
      <Card>
        <CardContent>
          <h1>Also We integrate our bot into Slack</h1>
          <h1>You can type and ask all the intents</h1>
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