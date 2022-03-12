import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Welcome = () => (
  <Card>
    <h1>Images Gallery</h1>
    <p>
      This is a simple application that retrieves photos from Unsplash API. In
      order to start, enter any search term in the input field.
    </p>
    <p>
      <Button variant="primary" href="https://unsplash.com" target="_blank">
        Learn more
      </Button>
    </p>
  </Card>
);

export default Welcome;
