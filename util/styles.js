import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'skyblue',
    },
    header: {
      height: 60,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: 'white',
      top: 20,
      backgroundColor: 'steelblue',
      justifyContent: 'center',
      alignItems: 'center',
    },
    subContainer: {
      flex: 1,
      marginTop: 20,
      padding: 10,
    },
    body: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10
    },
    footer: {
      height: 40,
      borderTopWidth: 1,
      borderColor: 'white',
      backgroundColor: 'steelblue',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textHeader: {
      fontSize: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'white',
    },
    textTitle: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'steelblue',
      borderBottomWidth: 1
    },
    textFooter: {
      fontSize: 10,
      color: 'white',
    },
    imageContainer: {
      alignItems: 'center',
    },
    image: {
      width: 300, 
      height: 100,
      marginTop: 10,
      borderRadius: 5
    },
    inputContainer: {
      alignItems: 'center',
      padding: 10
    },
    input: {
      width: 200,
      height: 40,
      fontSize: 15,
      textAlign: 'center',
      color: 'steelblue',
      backgroundColor: 'white',
      marginBottom: 10
    },
    textInput: {
      width: 200,
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 5,
      marginTop: 10,
      marginBottom: 5,
      color: 'white',
      backgroundColor: 'steelblue'
    },
    button: {
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'steelblue',
      marginTop: 10,
      borderRadius: 5,
    },
    buttonAdd: {
      width: 200,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'steelblue',
      marginTop: 10,
      borderRadius: 5,
    },
    textButton: {
      fontSize: 15,
      color: 'white'
    },
    flatListView: {
      flexDirection: 'row'
    },
    flatTitleName: {
      width: 150,
      textAlign: 'center',
      padding: 5,
      marginTop: 10,
      marginBottom: 5,
      backgroundColor: 'steelblue',
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold'
    },
    flatTitleHour: {
      width: 100,
      textAlign: 'center',
      padding: 5,
      marginTop: 10,
      marginBottom: 5,
      backgroundColor: 'steelblue',
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold'
    },
    flatName: {
      width: 150,
      textAlign: 'center',
      backgroundColor: '#fff',
      padding: 10,
      marginBottom: 5,
      color: 'steelblue',
      fontSize: 15
    },
    flatHour: {
      width: 100,
      textAlign: 'center',
      backgroundColor: '#ddd',
      padding: 10,
      marginBottom: 5,
      color: 'steelblue',
      fontSize: 15
    },
    bumpedcontainer: {
      marginBottom: 210,
    },
  });

export default styles;