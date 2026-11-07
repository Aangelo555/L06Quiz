import {StatusBar} from 'expo-status-bar';
import {Text, Image, Button, Alert, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';

export default function App() {

    // ===== STATE (saves each answer) =====
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');

    // ===== CHECK ANSWERS =====
    const checkAnswers = () => {
        let score = 0;
        if (ans1 === 'Bruno Fernandes') score++;
        if (ans2 === 'Erling Haaland') score++;
        if (ans3 === 'Kobbie Mainoo') score++;

        Alert.alert("You got " + score + " out of 3 correct!");
    };

    return (
        <ScrollView style={{marginTop: 40}}>

            {/* ===== TITLE ===== */}
            <Text style={{textAlign: 'center', fontSize: 22, fontWeight: 'bold', marginBottom: 50}}>Guess the Premier League Player!</Text>

            {/* ===== QUESTION 1 ===== */}
            <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNDDpjYRMgE7rx-0GXnRk006Sm-3ApnEJLxfNRfy4bgA&s=10'}} style={{width: 300, height: 200}}/>
            <Text>Who is this player?</Text>
            <Picker selectedValue={ans1} onValueChange={(value) => setAns1(value)}>
                <Picker.Item label="Pick an answer" value=""/>
                <Picker.Item label="Son Heung-min" value="Son Heung-min"/>
                <Picker.Item label="Mohamed Salah" value="Mohamed Salah"/>
                <Picker.Item label="Bruno Fernandes" value="Bruno Fernandes"/>
            </Picker>

            {/* ===== QUESTION 2 ===== */}
            <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNTEkJ1RPQYbIO1eGFEtI2GK3jpqjVE681VSFFKqhZhQ&s=10'}} style={{width: 300, height: 200}}/>
            <Text>Who is this player?</Text>
            <Picker selectedValue={ans2} onValueChange={(value) => setAns2(value)}>
                <Picker.Item label="Pick an answer" value=""/>
                <Picker.Item label="Kevin De Bruyne" value="Kevin De Bruyne"/>
                <Picker.Item label="Phil Foden" value="Phil Foden"/>
                <Picker.Item label="Erling Haaland" value="Erling Haaland"/>
            </Picker>

            {/* ===== QUESTION 3 ===== */}
            <Image source={{uri: 'https://s.yimg.com/lo/mysterio/api/d83af785a1331389c274e2433e3f3b76524ef7c9e36c051ab266039bd5b0e88f/lightyear_networkapi/resizefill_w960%3Bquality_80%3Bformat_webp/https%3A%2F%2Fmedia.zenfs.com%2Fen%2Ffourfourtwo_376%2F096ebbb67c4a58fdd7d94cc21756e528'}} style={{width: 300, height: 200}}/>
            <Text>Who is this player?</Text>
            <Picker selectedValue={ans3} onValueChange={(value) => setAns3(value)}>
                <Picker.Item label="Pick an answer" value=""/>
                <Picker.Item label="Cole Palmer" value="Cole Palmer"/>
                <Picker.Item label="Kobbie Mainoo" value="Kobbie Mainoo"/>
                <Picker.Item label="Brian Bobby" value="Brian Bobby"/>
            </Picker>

            {/* ===== SUBMIT ===== */}
            <Button title="Submit Answers" onPress={checkAnswers}/>
            <Text style={{height: 60}}></Text>

            <StatusBar style="auto"/>
        </ScrollView>
    );
}