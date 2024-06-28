import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={{  padding: 20, backgroundColor: '#f5f5f5' }}>
      <View style={{ backgroundColor: '#00796b', padding: 7, borderRadius: 5, marginBottom: 20 }}>
        <Text style={{ fontSize: 36, fontWeight: 'bold', textAlign: 'center', color: '#fff' }}>
          My CV
        </Text>
      </View>

      <View style={{ marginBottom: 20, padding: 15, backgroundColor: '#fff', borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#00796b', marginBottom: 10 }}>Name:</Text>
        <Text style={{ fontSize: 20, color: '#004d40' }}>Lokesh Tiwari</Text>
      </View>

      <View style={{ marginBottom: 20, padding: 15, backgroundColor: '#fff', borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#00796b', marginBottom: 10 }}>Date of Birth:</Text>
        <Text style={{ fontSize: 20, color: '#004d40' }}>July 11, 2004</Text>
      </View>

      <View style={{ marginBottom: 20, padding: 15, backgroundColor: '#fff', borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#00796b', marginBottom: 10 }}>Family Details:</Text>
        <Text style={{ fontSize: 20, color: '#004d40' }}>
          Father: Mr. Pooran Tiwari{'\n'}
          Mother: Mrs. Radha Tiwari{'\n'}
          Siblings: 2
        </Text>
      </View>

      <View style={{ marginBottom: 20, padding: 15, backgroundColor: '#fff', borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#00796b', marginBottom: 10 }}>Academic Details:</Text>
        <Text style={{ fontSize: 20, color: '#004d40' }}>
          12th: MPHIC Ramnagar, Nainital{'\n'}
          Graduation: SVIET{'\n'}
          Major: Computer Science
        </Text>
      </View>

      <View style={{ marginBottom: 20, padding: 15, backgroundColor: '#fff', borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#00796b', marginBottom: 10 }}>Hobbies:</Text>
        <Text style={{ fontSize: 20, color: '#004d40' }}>
          - Reading{'\n'}
          - Traveling{'\n'}
          - Coding
        </Text>
      </View>
    </ScrollView>
  );
}
