# React Native Search Field with suggestions dropdown
## Installation
yarn add react-native-search-suggestion

## Usage example
```
import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'

import SuggestionSearchList from 'react-native-search-suggestion'

export default class Example extends React.Component {
    constructor (props) {
        super(props)
    }

    renderListItem (item) {
        return (
            <TouchableHighlight underlayColor="#fbd42c" key={`searchlist${item.id}`}>
                <View style={styles.listItem}>
                    <Text style={styles.listItemText}>{ item.name }</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        const searchList = require('../../../data/searchIndex.json')
        return (
            <View style={styles.container}>
                <SuggestionSearchList
                    list={searchList}
                    renderListItem={(item) => this.renderListItem(item)}
                    startSuggestingFrom={1}
                    inputStyle={{
                        height: 50,
                        borderColor: '#f2f2f2',
                        borderWidth: 1,
                        paddingLeft: 10,
                        backgroundColor: '#fff'
                    }}
                    suggestBoxStyle={{
                        backgroundColor: '#fff',
                        marginTop: 10,
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: 15
    },
    searchInput: {
        height: 50,
        borderColor: '#f2f2f2',
        borderWidth: 1,
        paddingLeft: 10,
        backgroundColor: '#fff'
    },
    listItem: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        height: 55,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#e5e5e5',

    },
    listItemText: {
        fontSize: 20
    }
})
```
## Data
In the example above I import the searchIndex.json File. This looks like this:

```
[
  {
    "id": "1",
    "name": "Coca Cola Light"
  },
  {
    "id": "2",
    "name": "Coca Cola Zero"
  },
  {
    "id": "3",
    "name": "Fanta"
  },
  {
    "id": "4",
    "name": "Fanta Zero"
  },
  {
    "id": "5",
    "name": "Sprite"
  },
  {
    "id": "6",
    "name": "Sprite Light"
  },
  {
    "id": "7",
    "name": "Ice Tea Peach"
  },
  {
    "id": "8",
    "name": "Ice Tea Lemon"
  },
  {
    "id": "9",
    "name": "Ice Tea Peach Light"
  },
  {
    "id": "10",
    "name": "Ice Tea Lemon Light"
  }
]
```