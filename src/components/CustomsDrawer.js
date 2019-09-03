import React, { Component } from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer, DrawerItems, SafeAreaView } from 'react-navigation'
import { View, Text, StyleSheet, Image, TouchableOpacity, AsyncStorage } from 'react-native'
import { H3, Container, Content, Header, Body, Icon, List, ListItem, Left, Right, Thumbnail } from 'native-base'
import { getCategory } from '../redux/actions/categorys'
import { sortbyCategory } from '../redux/actions/notes'
import { connect } from 'react-redux';
import { styles } from '../style/Style'
class CustomsDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kategory: [],
            selectcategoy: []
        };

    }

    componentDidMount = () => {
        this.props.dispatch(getCategory())
            .then(() => {
                this.setState({
                    selectcategoy: this.props.category
                })

            })
    }
    byCategory = (id_category) => {
        this.props.dispatch(sortbyCategory(id_category))
            .then(() => {


            })
    }
    render() {
        return (
            <Container>

                <View style={styles.photoDrawer}>
                    <Image source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
                        style={{ width: 140, height: 140, resizeMode: "cover", borderRadius: 70 }} />
                </View>
                <View style={[styles.textCenter, { width: "100%", justifyContent: "center", marginTop: 20 }]}>
                    <Text style={{ textAlign: "center", fontSize: 20 }}>Muhammad Risano Akbar</Text>
                </View>

                <Content style={{ marginTop: 40 }}>
                    <List>
                        <View>
                            {this.state.selectcategoy.map((item) =>
                                <ListItem onPress={() => this.byCategory(item.id_category)}>
                                    <Left>
                                        {/* <Image source={require('../assets/images/mahkota2.png')} style={{ width: 30, height: 30, marginRight: 10, marginTop: -5 }} /> */}
                                        <Text>{item.name_category}</Text>
                                    </Left>
                                </ListItem>
                            )}
                        </View>

                    </List>
                </Content>
            </Container >
        );
    }
}

const mapStateToProp = state => {
    return {
        note: state.notes.note,
        category: state.categorys.category

    }
}

export default connect(mapStateToProp)(CustomsDrawer);






