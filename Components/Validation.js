import React,{useState,useEffect} from 'react';
import { StyleSheet, View,TextInput, Text,TouchableOpacity } from 'react-native';


const App = () => {
const [name,setName]=useState('');
const [password,setPassword]=useState('');
const [errors,setErrors]=useState({});
const [isFormValid,setIsFormValid]=useState(false);

useEffect(()=>{
  validateForm();
},[name,password]);

const validateForm=()=>{
let errors ={
};

if(!name)  errors.name= "Name is Required";
if(!password)  errors.password= "Password is Required";
else if(password.length<8) errors.password="Password must be atleasr 8 in length"
setErrors(errors);
setIsFormValid(Object.keys(errors).length===0)
}
const handleSubmit=()=>{
  if(isFormValid) console.warn("Form valid");
  else console.warn ("Sorry ");
}

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
      placeholder='Enter Name'
      value={name}
      onChangeText={setName}/>
      <TextInput style={styles.input}
      placeholder='Password'
      onChangeText={setPassword}
      secureTextEntry/>
    
    {Object.values(errors).map((error,index) =>(
      <Text key={index} style={styles.error}> {error} </Text>
    ))}
      <TouchableOpacity style={[styles.button, {opacity:isFormValid ? 1 : 0.5}]}
      disabled={!isFormValid} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
 container:{
  padding:16,
  justifyContent:'center',
 },
 input:{
  height:60,
  borderColor:'black',
  borderWidth:1,
  marginBottom:16,
  paddingHorizontal:20,
  borderRadius:12,
  fontSize:20,
 },
 button:{
  backgroundColor:'blue',
  borderRadius:8,
  paddingVertical:10,
  alignItems:'center',
  marginTop:12,
 },
 buttonText:{
  color:'white',
  fontWeight:'bold',
  fontSize:22,
 },
 error:{
  color:'red',
  fontSize:16,
  marginBottom:12,
 },
});

export default App;
