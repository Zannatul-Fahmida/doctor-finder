import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    doctorName:{
        color: 'goldenrod',
        fontSize: 40
    }
})

export default function Doctor({ doctor }) {
    const { name, image, email } = doctor;
    return (
        <View>
            <Image
                source={{
                    uri: `data:image/png;base64,${image}`,
                }}
                style={{ width: 100, height: 100 }}
            />
            <Text style={styles.doctorName}>{name}</Text>
        </View>
    )
}
