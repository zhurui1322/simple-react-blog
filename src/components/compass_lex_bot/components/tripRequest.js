import React from 'react';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';


import TravelChange_command from '../../../assets/travelChange.png'

function CommandIntents() {
  return (
    <div>
      <Card>
        <CardContent>
          <h1>Use your Voice to do Travel Changes</h1>
          <li>cancel my trip</li>
          <li>cancel my flight</li>
          <li>cancel my hotel</li>
          <li>cancel my rental car</li>
          <li>upgrade hotel to</li>
          <img src={TravelChange_command} style={{'width': '400px'}} />
        </CardContent>
      </Card>
    </div>
  );
}

export default CommandIntents;