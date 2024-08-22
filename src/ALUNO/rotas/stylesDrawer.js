import { StyleSheet } from 'react-native';

const StylesButtonDrawer = StyleSheet.create({
    buttonDrawer: {
        width: '90%', 
        height: 40, 
        backgroundColor: '#C6C6C6',
        justifyContent: 'center',
        display: 'flex',
        alignSelf: 'center',
        borderRadius: 30,
        marginTop: 6,
        color: '#000',
        flexShrink: 1,
        flex: 1,
    },
    label: {
        fontSize: 13,
        color: '#000',
        marginLeft: 12,
    },
    labelSair: {
        fontSize: 13,
        color: 'red',
        marginLeft: 12,
    },
    icon: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 20,
    },
    TouchPress: {
        backgroundColor: '#FF735C',
    },
});

export default StylesButtonDrawer;