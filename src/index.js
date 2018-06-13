import React from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableHighlight, Animated, TextInput } from 'react-native'
import { searchProduct } from "./helpers/searchProduct";

export default class SuggestionSearchList extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            searchValue: '',
            showResults: false,
            results: [],
            animation: new Animated.Value(0)
        }
    }

    changeSearchValue (searchValue) {
        const { startSuggestingFrom } = this.props
        this.setState({ searchValue }, () => {
            if (searchValue.length >= startSuggestingFrom) {
                this.search()
            } else if (searchValue.length === 0) {
                this.setState({ showResults: false })
            }
        })
    }

    showSuggestBox () {
        const { inputStyle: { height } } = this.props
        const { results } = this.state
        const suggestBoxHeight = (height + 5) * results.length

        Animated.timing(
            this.state.animation,
            {
                toValue: suggestBoxHeight,
                duration: 500
            }
        ).start()
    }

    async search () {
        const { searchValue } = this.state
        const { list } = this.props
        const results = await searchProduct(searchValue, list)
        this.setState({ results, showResults: true }, () => {
            this.showSuggestBox()
        })
    }

    render() {
        const { results, showResults, searchValue } = this.state
        return (
            <View>
                <TextInput
                    style={this.props.inputStyle}
                    onChangeText={(text) => this.changeSearchValue(text)}
                    value={searchValue}
                    placeholder="Search Product"
                />
                {
                    showResults &&
                    <Animated.View style={[this.props.suggestBoxStyle, { height: this.state.animation }]}>
                        <ScrollView>
                            {
                                results.map(item => {
                                    return this.props.renderListItem(item)
                                })
                            }
                        </ScrollView>
                    </Animated.View>
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchListContainer: {
        
    },
    searchInput: {

    },
})