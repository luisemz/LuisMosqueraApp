import React from 'react';
import { Text, View, Image,
  TextInput, TouchableOpacity,
  ScrollView, FlatList, Alert } from 'react-native';
import styles from './util/styles'
import renderIf from './util/renderif'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: false, 
      list: false, 
      subjects: [],
      title: '',
      hour: ''
    };
  }

  onPressAdd = () => {
      this.setState({
          input: !this.state.input,
          title: '',
          hour: ''
      })

      if(this.state.list) {
        this.setState({
            list: false
        })
      }
  }

  onPressView = () => {
      this.setState({
          list: !this.state.list
      })

      if(this.state.input) {
        this.setState({
            input: false
        })
      }
  }

  handleName = (text) => {
    this.setState({ title: text })
  }

  handleHorary = (text) => {
    this.setState({ hour: text })
  }

  onPressAddSubject = () => {
    console.log(this.state.hour.indexOf(','));
    if (this.state.title !== '' && this.state.hour !== '') {
      if (this.state.hour.length === 5
        && this.state.hour.indexOf(',') !== -1
        && this.state.hour.indexOf(',') === 2) {

        var subject = {
          title: this.state.title,
          hour: this.state.hour
        }
    
        this.setState({
          subjects: this.state.subjects.concat(subject),
          input: false,
          title: '',
          hour: ''
        });
      } else {
        Alert.alert(
          'Alerta',
          'Ingrese la hora en el formato correcto:\n\nHH,mm',
          [
            {text: 'Aceptar'},
          ]
        )
      }
    } else {
      Alert.alert(
        'Alerta',
        'Complete los campos:\n\nNombre\nHora',
        [
          {text: 'Aceptar'},
        ]
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.textHeader}>LuisMosqueraApp</Text>
        </View>

        <ScrollView style={[styles.subContainer, this.state.bumpedUp && styles.bumpedcontainer]}>
          <View style={styles.body}>
            <Text style={styles.textTitle}>Gestor de Asignaturas</Text>

            {renderIf(!this.state.input && !this.state.list)(
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require('./images/academic.jpeg')}
                />
              </View>
            )}

            {renderIf(!this.state.list)(
              <TouchableOpacity
              style={styles.button} onPress={this.onPressAdd}>
                <Text style={styles.textButton}>
                  { this.state.input ? 'Volver' : 'Agregar Asignatura' }
                </Text>
              </TouchableOpacity>
            )}

            {renderIf(!this.state.input)(
              <TouchableOpacity
              style={styles.button} onPress={this.onPressView}>
                <Text style={styles.textButton}>
                  { this.state.list ? 'Volver' : 'Ver Asignaturas' }
                </Text>
              </TouchableOpacity>
            )}

            {renderIf(this.state.input)(
              <View style={styles.inputContainer}>
                <Text style={styles.textTitle}>Agregar Asignatura</Text>
                <Text style={styles.textInput}>
                  Nombre:
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder='Nombre'
                  onChangeText={this.handleName}
                  onFocus={() => this.setState({bumpedUp: 1})}
                  onEndEditing={() => this.setState({bumpedUp: 0})}
                />
                <Text style={styles.textInput}>
                  Hora: (HH,mm)
                </Text>
                <TextInput
                  maxLength={5}
                  keyboardType='numeric'
                  style={styles.input}
                  placeholder='Hora'
                  onChangeText={this.handleHorary}
                  onFocus={() => this.setState({bumpedUp: 1})}
                  onEndEditing={() => this.setState({bumpedUp: 0})}
                />
                <TouchableOpacity
                style={styles.buttonAdd} onPress={this.onPressAddSubject}>
                  <Text style={styles.textButton}>Agregar</Text>
                </TouchableOpacity>
              </View>
            )}
            
            {renderIf(this.state.list)(
              <View style={styles.inputContainer}>
                <Text style={styles.textTitle}>Listado Asignaturas</Text>

                {renderIf(this.state.list)(
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.image}
                      source={require('./images/classroom.jpg')}
                    />
                  </View>
                )}

                <View style={styles.flatListView}>
                  <Text style={styles.flatTitleName}>Nombre</Text>
                  <Text style={styles.flatTitleHour}>Hora</Text>
                </View>
                {renderIf(this.state.subjects.length === 0)(
                  <Text style={styles.textTitle}>No se han agregado asignaturas!</Text>
                )}
                <FlatList
                  data={this.state.subjects}
                  renderItem={({item}) => (
                    <View style={styles.flatListView}>
                      <Text style={styles.flatName}>{item.title}</Text>
                      <Text style={styles.flatHour}>{item.hour}</Text>
                    </View>
                  )}
                />
              </View>
            )}
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <Text style={styles.textFooter}>Luis Mosquera</Text>
          <Text style={styles.textFooter}>Todos los derechos reservados®</Text>
        </View>
      </View>
    );
  }
}
