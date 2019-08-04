import React, { Component } from 'react';
import { Text } from 'react-native';

/**
|--------------------------------------------------
| Higher order component to fetch data and update title
|--------------------------------------------------
*/
const withData = (WrappedComponent, title) => {
  class WithData extends Component {
    static navigationOptions = {
      title: title
    };

    constructor(props) {
      super(props);

      this.state = {
        repositories: [],
        error: false
      };
    }
    //fetches data on mount
    componentDidMount() {
      this.getMoviesFromApi();
    }
    /**
     * @method getMoviesFromApi
     * @param {Empty}
     * @returns {data}
     *
     */

    async getMoviesFromApi() {
      try {
        const response = await fetch(
          `https://github-trending-api.now.sh/repositories?language=javascript&since=weekly`
        );
        const json = await response.json();

        this.setState({ repositories: json });
      } catch (error) {
        this.setState({ error: true });
      }
    }
    render() {
      const { error, repositories } = this.state;
      if (error) {
        return <Text>Network error, check connection</Text>;
      }
      return <WrappedComponent repositories={repositories} {...this.props} />;
    }
  }
  return WithData;
};

export default withData;
