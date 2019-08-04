import React, { Component } from 'react';
import { ActivityIndicator, Text, FlatList, StyleSheet } from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button
} from 'native-base';
import withData from '../hoc/withData';

/**
|--------------------------------------------------
| Shows when app loads and displays all trending repositories
|--------------------------------------------------
*/
class HomeScreen extends Component {
  /**
   * @method {onpress}
   * @param {object} item
   * @returns {undefined}
   */
  _onPress(item) {
    this.props.navigation.navigate('Details', {
      itemAuthor: item.author,
      itemName: item.name,
      image: item.avatar,
      itemDescription: item.description,
      url: item.url,
      stars: item.stars
    });
  }
  /**
   * @method {_keyExtractor}
   * @params {item, index}
   * @returns {undefined}
   * sets key for list, api currently has no id so used name temporarily
   */
  _keyExtractor = (item, index) => item.name;
  render() {
    const { repositories } = this.props;
    if (repositories.length == 0) {
      return <ActivityIndicator style={styles.indicator} size="large" />;
    }
    return (
      <Container>
        <Content>
          <FlatList
            data={repositories}
            keyExtractor={this._keyExtractor}
            renderItem={({ item }) => (
              <List>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail square source={{ uri: item.avatar }} />
                  </Left>
                  <Body>
                    <Text>{item.author}</Text>
                    <Text note numberOfLines={1}>
                      {item.name}
                    </Text>
                  </Body>
                  <Right>
                    <Button transparent onPress={() => this._onPress(item)}>
                      <Text>View</Text>
                    </Button>
                  </Right>
                </ListItem>
              </List>
            )}
          />
        </Content>
      </Container>
    );
  }
}

export default withData(HomeScreen, 'Home');
const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: 'center'
  }
});
