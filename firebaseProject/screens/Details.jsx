import React from 'react';
import { Text } from 'react-native';

const Details = () => {

  //calculate the area of a circle
  const area = (radius) => {
    return Math.PI * radius * radius;
  }

  return (
    <Text>Details</Text>
  )
}

export default Details;
