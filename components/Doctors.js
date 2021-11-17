import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Doctor from './Doctor';

export default function Doctors() {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-badlands-73094.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <View>
            <Text>This is doctors: {doctors.length}</Text>
            <ScrollView>
                {
                    doctors.map(doctor => <Doctor
                        key={doctor._id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </ScrollView>
        </View>
    )
}
