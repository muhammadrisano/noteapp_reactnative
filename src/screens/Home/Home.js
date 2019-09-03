import React, { Component } from 'react';
import { Image, FlatList, Alert } from 'react-native';
import { Thumbnail, Container, Header, Left, Body, Right, Button, Icon, Title, View, Item, Input, CardItem, Card, Text, Fab, Picker } from 'native-base';
import { styles } from '../../style/Style'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { getnote, sortnote, searchNote } from '../../redux/actions/notes';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus, faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            active: false,
            selected: "key1"
        };
    }


    handleSearch = (value) => {
        this.props.dispatch(searchNote(value))
    }

    componentDidMount = () => {
        this.props.dispatch(getnote())
            .then(() => {
                // this.setState({
                //     data: this.props.note
                // })
            })
    }
    onValueChange(value) {
        this.props.dispatch(sortnote(value))
            .then(() => {
                // this.setState({
                //     data: this.props.sortnote
                // })

            })
        this.setState({
            selected: value
        });
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "#fefefe" }}>
                    <Left>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                            <Thumbnail small source={{ uri: 'https://facebook.github.io/react/logo-og.png' }} />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={[styles.textblack, { textAlign: "center" }]}>Header</Title>
                    </Body>
                    <Right>
                        <Picker
                            mode="dropdown"
                            iosHeader="Select your SIM"
                            iosIcon={<FontAwesomeIcon icon={faSortAmountDownAlt} size={25} />}
                            style={{ width: undefined }}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="" value={0} />
                            <Picker.Item label="ASCENDING" value="ASC" />
                            <Picker.Item label="DESCENDING" value="DESC" />

                        </Picker>
                        <Button transparent>
                            <FontAwesomeIcon icon={faSortAmountDownAlt} size={25} />
                        </Button>
                    </Right>
                </Header>
                <View style={{ marginTop: 20, width: '90%', marginRight: 'auto', marginLeft: 'auto' }}>
                    <Item rounded style={{ marginBottom: 20, height: 40 }}>
                        <Input placeholder='Search Book' onChangeText={(content) => this.handleSearch(content)} />
                    </Item>

                </View>

                <FlatList

                    numColumns={2}
                    data={this.props.note}
                    contentContainerStyle={styles.list}
                    renderItem={({ item }) => (

                        <Card style={{
                            width: 145, marginLeft: 10, marginRight: 15, marginBottom: 20, shadowColor: "#000", backgroundColor: `${item.color}`, padding: 8,
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.29,
                            shadowRadius: 4.65,

                            elevation: 7, borderRadius: 10
                        }} key={item.id_note}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Editnote', { note: item })}>
                                <View>
                                    <Text style={{ color: "white", marginLeft: "auto" }}>{moment(item.updated_at).format('ll')}</Text>
                                </View>
                                <View>
                                    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>{item.title}</Text>
                                </View>
                                <View>
                                    <Text style={{ color: "white", fontSize: 15, fontStyle: "italic" }}>{item.name_category}</Text>
                                </View>
                                <View>

                                    <Text style={{ color: "white" }}>
                                        {item.content}
                                    </Text>

                                </View>
                            </TouchableOpacity>
                        </Card>

                    )}
                    onEndReached={this.handleLoadMore}
                    onEndThreshold={50}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleReflesh}
                />

                <Fab
                    active={'true'}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#9f3799' }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('Addnote')}
                >
                    <FontAwesomeIcon icon={faPlus} size={25} />
                </Fab>
            </Container>
        );
    }
}
const mapStateToProp = state => {
    return {
        note: state.notes.note,
        sortnote: state.notes.sortnote
    }
}

export default connect(mapStateToProp)(Home);
