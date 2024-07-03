import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function BillingSystem() {
  const [product, setProduct] = useState('');
  const [cost, setCost] = useState('');
  const [qty, setQty] = useState('');
  const [netBill, setNetBill] = useState(0);
  const [payableAmount, setPayableAmount] = useState(0);

  const calculateBill = () => {
    const totalCost = parseFloat(cost) * parseInt(qty);
    const discount = totalCost * 0.1; // 10% discount
    const finalAmount = totalCost - discount;

    setNetBill(totalCost);
    setPayableAmount(finalAmount);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Billing System</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={product}
        onChangeText={setProduct}
      />
      <TextInput
        style={styles.input}
        placeholder="Cost"
        keyboardType="numeric"
        value={cost}
        onChangeText={setCost}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        keyboardType="numeric"
        value={qty}
        onChangeText={setQty}
      />

      <Button title="Calculate" onPress={calculateBill} color="#00796b" />

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Net Bill: Rs.{netBill.toFixed(2)}</Text>
        <Text style={styles.resultText}>Discount: 10%</Text>
        <Text style={styles.resultText}>Payable Amount: Rs.{payableAmount.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#e0f7fa',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00796b',
  },
  input: {
    height: 40,
    borderColor: '#00796b',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 8,
    width: '80%',
    textAlign: 'center',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004d40',
  },
});
