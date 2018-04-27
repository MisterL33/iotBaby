import React from 'react';
import {
    Modal,
    Platform,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableHighlight,
    TextInput,
    Picker
} from 'react-native';

window.navigator.userAgent = 'react-native';



export default class Message extends React.Component {


    constructor(props) {
        super(props);

        // var socketIOClient = require('socket.io-client');
        // var sailsIOClient = require('sails.io.js');
        this.socket = new WebSocket('http://10.33.0.131:1337');
        this.state = {
            username: null,
            message: null,
            messages: null,
            open: false,
            connected: false
        };
        this.socket = new WebSocket('ws://127.0.0.1:3000');
        this.emit = this.emit.bind(this);
    }

    emit() {
        this.setState(prevState => ({ open: !prevState.open }))
        this.socket.send("It worked!")
    }

    componentDidMount() {
        this.getMessages();
        // var io = require('sails.io.js')(require('socket.io-client'));
        alert('io')


        io.socket.on('message', function (msg) {
            alert('received')
        })
        // console.log(io.socket)

    }

    componentWillMount() {


    }
    //npm sails.io.js socket.io-client

    getMessages = () => {

        fetch('http://10.33.0.131:1337/message')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({ messages: responseJson })

            })

    }
    handleMessage = () => {
        fetch('http://10.33.0.131:1337/message', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                message: this.state.message,
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                // this.getMessages()
            })

    }


    render() {


        return (
            <View>

                <Text>Messagerie</Text>
                <Button title='Accueil' onPress={() => this.props.navigation.navigate('Home')} />

                {this.state.messages && this.state.messages.map((message, i) => (
                    <View>
                        <Text> {message.username} </Text>
                        <Text> {message.message} </Text>
                        <Text> --------------- </Text>
                    </View>
                ))}
                <TextInput value={this.props.email} onChangeText={(username) => this.setState({ username: username })}
                    placeholder="Username" />
                <TextInput value={this.state.message} onChangeText={(message) => this.setState({ message: message })}
                    placeholder="Type message.." />
                <Button title='Envoyer' onPress={() => this.handleMessage()} />
            </View>
        );
    }
}