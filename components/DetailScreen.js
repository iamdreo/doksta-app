import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body
} from 'native-base';
/**
|--------------------------------------------------
| Details screen shows details of the repositories
|--------------------------------------------------
*/
export default class DetailScreen extends Component {
  static navigationOptions = {
    title: 'Details'
  };
  /**
   * @method constructor
   * @param {object} props - Component props.
   * @returns {undefined}
   */

  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    const author = navigation.getParam('itemAuthor', 'No Author info');
    const name = navigation.getParam('itemName', 'No Name info');
    const image = navigation.getParam('image', 'No Image');
    const description = navigation.getParam(
      'itemDescription',
      'no Description'
    );
    const url = navigation.getParam('url', 'no Url');
    const stars = navigation.getParam('stars', 'no Stars');

    return (
      <Container>
        <Content>
          <Card transparent>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: image }} />
                <Body>
                  <Text>{name}</Text>
                  <Text note>{author}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{ uri: image }}
                  style={{ height: 200, width: 320, flex: 1 }}
                />
                <Text>
                  {description} - {url}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="logo-github" />
                  <Text>{stars}</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
