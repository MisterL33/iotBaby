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
    Picker,
    AsyncStorage
} from 'react-native';
import BabyList from '../screens/babyList';
import Team from '../screens/team';
import {isSignedIn, onSignOut, getUser, updateJwt} from '../tools/tokenManager'
import baseIp from '../config/ipconfig'
import SailsSocket from 'sails-socket';


export default class Home extends React.Component {


    constructor(props) {
        super(props);


        this.state = {
            jwt: {},
            signedIn: false,
            checkedSignIn: false,
            redScore: 0,
            blueScore: 0


        };

    }

    componentDidMount = () => {
        console.log('didMount home')
        this.handleMatch()


        const initializeParams = { url: baseIp , jsonp: 'false' }
        const sailsSocket = SailsSocket.connect(initializeParams)
        console.log(sailsSocket)
        sailsSocket.sails.useCORSRouteToGetCookie = false

        SailsSocket.get('/match').then(jwr => {
            console.log('here')
        })

        SailsSocket.on('match', function(msg){
            alert('hop')
        })

        // isSignedIn("jwt")// super fonction disponible dans tokenManager qui vérifie qu'un token est présent, si oui on get l'user
        //     .then((res) => {
        //         if (res === false) {
        //             this.setState({signedIn: res, checkedSignIn: false})
        //         } else {
        //             this.setState({signedIn: res, checkedSignIn: true})
        //             getUser().then(res => {
        //                 //console.log('isSigned getUser')
        //                 res = JSON.parse(res)
        //
        //                 // on passe l'id user à la fonction update qui va update le token actif
        //
        //                 this.handleUpdateToken(res.id)
        //                 this.setState({user: res})
        //
        //             })
        //         }
        //     })

    }

    handleMatch = () => {
        console.log('join a match');
        this.setState({
            redScore: -1,
            blueScore: -1

        })
        fetch(baseIp + '/match/join', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

        }).then((response) => response.json())
            .then(() => {
                this.setState({
                    redScore: 0,
                    blueScore: 0

                })
            }).catch((err) => {
            this.setState({
                redScore: 'err',
                blueScore: 'err'

            })
        })

    }


    render() {


        return (
            <View>
                <Text>Score</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>
                        <Text >{this.state.blueScore}</Text>
                    </View>
                    <View style={{width: 50, height: 50, backgroundColor: 'red'}}>
                        <Text >{this.state.redScore}</Text>
                    </View>
                </View>
            </View>
        );
    };
}