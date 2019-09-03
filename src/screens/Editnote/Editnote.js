import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Input, Form, Textarea, Content, Item, Picker } from 'native-base';
import { styles } from '../../style/Style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import { getCategory } from '../../redux/actions/categorys'
import { updatenote } from '../../redux/actions/notes';
class Editnote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "key",
            note: this.props.navigation.state.params.note,
            id_note: "",
            id_category: 0,
            title: "",
            content: "",
            selectcategoy: []
        };
    }
    onValueChange(value) {
        this.setState({
            id_category: value
        });
    }
    componentDidMount = () => {
        this.setState({
            id_note: this.props.navigation.state.params.note.id_note,
            id_category: this.props.navigation.state.params.note.id_category,
            title: this.props.navigation.state.params.note.title,
            content: this.props.navigation.state.params.note.content
        })
    }

    handleupdate = () => {
        this.props.dispatch(updatenote(this.state.id_note, {
            title: this.state.title,
            content: this.state.content,
            id_category: this.state.id_category
        }))
            .then(() => {
                Alert.alert("hello")
                this.props.navigation.navigate('Home')
            })

    }
    componentWillMount = () => {
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
                        <Title style={[styles.textblack, { textAlign: "center" }]}>EDIT NOTE</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.handleupdate()}>
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
                            <Picker.Item label="ADD CATEGORY" value="key0" />
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

export default connect(mapStateToProp)(Editnote);

