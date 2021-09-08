import React from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import OutlineInput from "react-native-outline-input";
import {LinearGradient} from "expo-linear-gradient";
import {Icon} from "react-native-elements";

function SignUp({navigation}) {
    return (
        <SafeAreaView style={[styles.container]}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={[styles.container]}>
                <View style={{flex: 0.5, marginLeft: 20, justifyContent: "center"}}>
                    <Text style={{fontSize: 25, fontWeight: "bold"}}>Create account,</Text>
                    <Text style={{fontSize: 25, opacity: 0.5}}>Sign up to get started!</Text>
                </View>
                <ScrollView style={{flex: 4}}>
                    <View style={styles.input}>
                        <View>
                            <OutlineInput
                                label="lastname"
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
                                label="firstname"
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
                                label="Email"
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
                                label="Password"
                                activeValueColor="#6c63fe"
                                activeBorderColor="#FF1493"
                                activeLabelColor="#6c63fe"
                                passiveBorderColor="#bbb7ff"
                                passiveLabelColor="#bbb7ff"
                                passiveValueColor="#bbb7ff"
                            />
                        </View>
                        <View style={{marginTop: 40}}>
                            <TouchableOpacity>
                                <LinearGradient
                                    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 0.0}}
                                    colors={['#FF1493', '#FF69B4', '#FFC0CB']}
                                    style={styles.button}>
                                    <Text style={styles.text}>Create account</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={[styles.text, styles.button, {
                                    color: "blue",
                                    flexDirection: "row",
                                    justifyContent: 'center',
                                    backgroundColor: "#ADD8E6"
                                }]}>
                                    <Text><Icon color={'blue'} name="facebook"/></Text>
                                    <Text style={{color: "blue"}}>Connect With Facebook</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View style={{
                    flexDirection: 'row',
                    paddingBottom: 45,
                    justifyContent: 'center',
                    alignItems: 'flex-end'
                }}>
                    <Text>I'm already a member, </Text>
                    <TouchableOpacity onPress={() => navigation.push("SignIn")}>
                        <Text style={{color: "#FF1493"}}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default SignUp;