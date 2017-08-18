import React from 'react';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';


import SixStars from '../../../assets/six_stars.svg'

function Overview() {
  return (
    <div>
      <Card>
        <CardContent>
          <h1>6 Star Customer Service</h1>
          <div style={{'height': '100px'}}>
          </div>
          <h1>Customer convenience and experience</h1>
          <h1>Navigator focus on creative value add</h1>
          <img src={SixStars} style={{'width': '700px'}}/>
        </CardContent>
      </Card>
    </div>
  );
}

export default Overview;