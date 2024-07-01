import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      inicio: {
        alignItems: 'center',
      },
      retangGreen: {
        width: '100%', 
        height: 100, 
        backgroundColor: '#3F7263',
        justifyContent: 'space-between',
      },
      imgLogo: {
        width: '20%',
        height: '30%',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 8
      },
      imgEtec: {
        width: '15%',
        height: '25%',
        bottom: 8,
        alignSelf: 'flex-end',
        position: 'absolute',
        right: 27,
      },
      retangOrange: {
        width: '100%', 
        height: 19, 
        backgroundColor: '#FF735C',
        marginBottom: '3%',
      },
      titlePagina: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
      },
      icon: {
        position: 'absolute',
        left: 28,
        top: 20
      },
      paragraph: {
        marginTop: '3%',
        marginBottom: '0%',
        // fontWeight: 'bold',
        fontSize: 18,
        flex: 1,
        left: 70
      },
    containerCalendar: {
      flex: 1,
      padding: 20,
      top: 0,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 18,
      textAlign: 'center',
      marginVertical: 0,
      top: 0
    },
    calendar: {
      marginBottom: 16,
    },
    datePickerContainer: {
      marginBottom: 16,
    },
    dateText: {
      fontSize: 18,
      color: '#000',
      padding: 10,
      backgroundColor: '#f0f0f0',
      borderRadius: 30,
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#FF735C',
      padding: 12,
      borderRadius: 30,
      alignItems: 'center',
      marginTop: 20,
      width: '45%',
      alignSelf: 'center',
      alignItems: 'center',
    },
    btnPress: {
      backgroundColor: '#3F7263',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });
  
export default styles;
  