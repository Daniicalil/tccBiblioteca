import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';

const HeaderDrawer = ({ title, onPress }) => {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Pressable
                    onPress={() => navigation.toggleDrawer()}
                    style={styles.iconContainer}>
                        <SimpleLineIcons name="menu" size={24} color="white" />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 16,
    },
    iconContainer: {
        top: 42,
        position: 'absolute',
        left: 16,
    },
})

export default HeaderDrawer;