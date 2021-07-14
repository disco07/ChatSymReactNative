import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import { LinearGradient } from 'expo-linear-gradient';

export default function SignIn() {
    return (
        <View style={[styles.container]}>
            <View style={{flex: 1, marginLeft: 20, justifyContent: "center"}}>
                <Text style={{fontSize: 25, fontWeight: "bold"}}>Welcome,</Text>
                <Text style={{fontSize: 25, opacity: 0.5}}>Sign in to continue!</Text>
            </View>
            <View style={styles.input}>
                <TextInput
                    label="Email ID"
                    style={styles.textInput}
                    placeholder={'Email'}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder={'Password'}
                />
                <TouchableOpacity>
                    <Text style={{marginBottom: 40, fontSize: 10, fontWeight: "bold", alignItems: "flex-end"}}>Forget Password?</Text>
                </TouchableOpacity>
                <LinearGradient
                    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 0.0}}
                    colors={['#FF1493', '#FF69B4', '#FFC0CB']}
                    style={styles.button}>
                    <Text style={styles.text}>Login</Text>
                </LinearGradient>
                <Text style={[styles.text, styles.button, {color: "blue", textAlign: 'center', backgroundColor: "#ADD8E6"}]}>Connect With Facebook</Text>
            </View>
            <View style={{flex: 1, flexDirection:'row', paddingBottom: 55, justifyContent: 'center', alignItems: 'flex-end'}}>
                <Text>I'm a new user, </Text>
                <TouchableOpacity><Text style={{color: "#FF1493"}}>Sign Up</Text></TouchableOpacity>
            </View>
        </View>
    );
};