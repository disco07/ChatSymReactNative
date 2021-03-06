import React, {useEffect, useState} from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform, ScrollView,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import styles from "./styles";
import {LinearGradient} from 'expo-linear-gradient';
import OutlineInput from 'react-native-outline-input';
import {Icon} from 'react-native-elements'

export default function SignIn({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={[styles.container]}>
                <View style={{flex: 0.5, marginLeft: 20, justifyContent: "center"}}>
                    <Text style={{fontSize: 25, fontWeight: "bold"}}>Welcome,</Text>
                    <Text style={{fontSize: 25, opacity: 0.5}}>Sign in to continue!</Text>
                </View>
                <ScrollView style={{flex: 4}}>
                <View style={styles.input}>
                    <View>
                        <OutlineInput
                            value={email}
                            onChangeText={(e) => setEmail(e)}
                            label="Username"
                            activeValueColor="#6c63fe"
                            activeBorderColor="#FF1493"
                            activeLabelColor="#6c63fe"
                            passiveBorderColor="#bbb7ff"
                            passiveLabelColor="#bbb7ff"
                            passiveValueColor="#bbb7ff"
                        />
                    </View>
                    <View style={{marginTop: 10}}>
                        <OutlineInput
                            value={password}
                            onChangeText={(e) => setPassword(e)}
                            label="Password"
                            activeValueColor="#6c63fe"
                            activeBorderColor="#FF1493"
                            activeLabelColor="#6c63fe"
                            passiveBorderColor="#bbb7ff"
                            passiveLabelColor="#bbb7ff"
                            passiveValueColor="#bbb7ff"
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={{
                        marginBottom: 5, fontSize: 10,
                        width: "auto", height: "auto",
                        fontWeight: "bold", alignItems: "flex-end"
                    }}>
                        <TouchableOpacity>
                            <Text>
                                Forget Password?
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 40}}>
                        <TouchableOpacity onPress={() => navigation.replace("Main")}>
                            <LinearGradient
                                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 0.0}}
                                colors={['#FF1493', '#FF69B4', '#FFC0CB']}
                                style={[styles.button, {borderWidth: 1}]}>
                                <Text style={styles.text}>Login</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[styles.text, styles.button, {
                                color: "blue",
                                flexDirection: "row",
                                justifyContent: 'center',
                                backgroundColor: "#ADD8E6",
                                borderWidth: 1
                            }]}>
                                <Text><Icon color={'blue'} name="facebook"/></Text>
                                <Text style={{color: "blue"}}>Connect With Facebook</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
                <View style={{
                    flex: 0.1,
                    flexDirection: 'row',
                    paddingBottom: 45,
                    justifyContent: 'center',
                    alignItems: 'flex-end'
                }}>
                    <Text>I'm a new user, </Text>
                    <TouchableOpacity onPress={() => navigation.push("SignUp")}>
                        <Text style={{color: "#FF1493"}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
    );
};