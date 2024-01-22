import React, {useContext} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import {Feather} from '@expo/vector-icons'

const ShowScreen = ({navigation}) => {
    const {state} = useContext(Context)
    const blogPost = state.find((blogPost)=>navigation.getParam('id')===blogPost.id)
    return <View>
            <Text style={styles.title}>{blogPost.title}</Text>

        <View style={styles.shadow}><Text style={styles.content}>{blogPost.content}</Text></View>
    </View>
}
ShowScreen.navigationOptions = ({navigation}) =>{
    return {
        headerRight: () => {
            return(
                <TouchableOpacity onPress={()=>navigation.navigate('Edit', {id:navigation.getParam('id')})}>
                    <Feather name="edit-2" size={30}  style={{marginRight:10}}/>
                </TouchableOpacity> 
                
            )
        }
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin:10,
        marginBottom: 10,
  

        
    },
    content:{
        fontSize: 17,
        margin:10,
        backgroundColor: 'rgb(220,220,220)',
        textAlign: 'justify',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 5,
        shadowColor: 'rgba(0, 0, 0, 200)',
        shadowOffset: { width: 10, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 15
    }, 

    
})


export default ShowScreen