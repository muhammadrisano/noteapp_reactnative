import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Input, Form, Textarea, Content, Item, Picker } from 'native-base';
import { styles } from '../../style/Style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { ScrollView } from 'react-native-gesture-handler';
import { addnote } from '../../redux/actions/notes'
import { getCategory } from '../../redux/actions/categorys'
import { connect } from 'react-redux';
class Addnote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "key",
            title: "",
            id_category: 0,
            content: "",
            selectcategoy: []

        };
    }
    onValueChange(value) {
        this.setState({
            id_category: value
        });
    }
    handlesubmit = () => {
        console.warn(this.state)
        this.props.dispatch(addnote({
            title: this.state.title,
            id_category: this.state.id_category,
            content: this.state.content,
        }))
    }
    componentDidMount = () => {
        this.props.dispatch(getCategory())
            .then(() => {
                this.setState({
                    selectcategoy: this.props.category
                })
            })
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "#fefefe" }}>
                    <Left>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                            <FontAwesomeIcon icon={faArrowLeft} size={25} />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={[styles.textblack, { textAlign: "center" }]}>ADD NOTE</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.handlesubmit()}>
                            <Image source={require('../../assets/images/checked.png')} />
                        </Button>
                    </Right>
                </Header>
                <ScrollView style={{ flex: 1, flexDirection: "column", paddingHorizontal: 20 }}>

                    <View style={{ flex: 1 }}>
                        <TextInput
                            style={styles.inputTitle}
                            underlineColorAndroid="transparent"
                            placeholder={"ADD TITLE"}
                            placeholderTextColor={"#9E9E9E"}
                            onChangeText={(title) => this.setState({ title })}
                            value={this.state.title}
                        // multiline={true}
                        // Kode ajaib kita

                        />
                    </View>
                    <View style={{ flex: 4, }}>

                        <TextInput
                            style={styles.inputStyles}
                            underlineColorAndroid="transparent"
                            placeholder={"ADD DECRIPTION."}
                            placeholderTextColor={"#9E9E9E"}
                            // Kode ajaib kita
                            numberOfLines={10}
                            multiline={true}
                            onChangeText={(content) => this.setState({ content })}
                            value={this.state.content}
                        />

                    </View>
                    <View style={{ backgroundColor: "white", flex: 1, marginTop: 120 }}>
                        <Text style={{ fontSize: 20 }}>CATEGORI</Text>
                        <Picker
                            mode="dropdown"
                            iosHeader="Select your SIM"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: 200 }}
                            selectedValue={this.state.id_category}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="ADD CATEGORY" value={0} />
                            {this.state.selectcategoy.map((item) =>
                                <Picker.Item label={item.name_category} value={item.id_category} />
                            )}


                        </Picker>
                    </View>


                </ScrollView>

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

export default connect(mapStateToProp)(Addnote);

