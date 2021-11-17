import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Home() {
    return (
        <View>
            <Text>This is home</Text>
            <Button 
            onPress={e => alert('Hello')}
            title="Press Me"
            color="#841584"
            />
        </View>
    )
}
