import React from 'react';
import {Button, Card, CardBody, CardImage, CardTitle, CardText, Col} from 'mdbreact';
import upperCaser from '../upperCaseHelper.js';

const Character = ({name, house, image, wand}) =>{
  const url = "http://harrypotter.wikia.com/wiki/Hogwarts_Houses#"+house
  const imageUrl = "http://www.krismac.com/wp-content/uploads/2018/12/"+house+".jpg"
  return (
      <Col>
        <Card style={{ width: "22rem" }}>


          <CardBody id={house}>
            <CardTitle>{name}, {house}</CardTitle>
              <img src={image} height="180" width="150"/>


              <CardText>
              Wand: Wood: {upperCaser(wand.wood)},  Core: {upperCaser(wand.core)}, Length: {upperCaser(wand.length)}"
            </CardText>
            <Button href= {url}>{house}</Button>
          </CardBody>
        </Card>
      </Col>
  )



}

export default Character;
