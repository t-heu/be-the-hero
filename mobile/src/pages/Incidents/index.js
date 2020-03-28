import React, { useEffect, useState } from 'react'
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'
import Svg, { Circle, Rect} from 'react-native-svg'

import logoImg from '../../assets/logo.png'
import styles from './styles'
import api from '../../services/api'

export default function Incidents() {
  const [incidents, setIncidents] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const navigation = useNavigation()

  async function load() {
    if (loading) {
      return 
    }

    if(total > 0 && incidents.length === total) {
      return
    }

    setLoading(true)

    const response = await api.get(`incidents`, {
      params: {
        page
      }
    })
      
    setIncidents([...incidents, ...response.data])
    setTotal(response.headers['x-total-count'])
    setPage(page + 1)
    setLoading(false)
  }

  useEffect(() => {
    load()
  }, [])

  function navigateDetail(incident) {
    navigation.navigate('Detail', {
      incident
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>Total de <Text style={styles.headerTextBold}>{total} casos</Text>.</Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>
      
      <View style={{height: 350}}>
      <FlatList 
        onEndReached={load} 
        onEndReachedThreshold={0.2} 
        showsVerticalScrollIndicator={false} 
        keyExtractor={incident => String(incident.id)} 
        style={styles.incidentsList} 
        data={incidents} 
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG: </Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>
            
            <Text style={styles.incidentProperty}>CASO: </Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>
            
            <Text style={styles.incidentProperty}>VALOR: </Text> 
            <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>
          
            <TouchableOpacity style={styles.detailsButton} onPress={() => navigateDetail(incident)}>
              <Text style={styles.detailsButtonText}>Ver mais detalhes.</Text>
              <Feather name="arrow-right"  size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )} 
      />
      </View>
       { loading && (<Shimmer />)}
    </View>
  )
}

function Shimmer() {
  return (
    <View style={styles.incident}>
      <Text style={styles.incidentProperty}>ONG: </Text>
      <Text style={styles.incidentValue}>{<Shi />}</Text>
      
      <Text style={styles.incidentProperty}>CASO: </Text>
      <Text style={styles.incidentValue}>{<Shi />}</Text>
      
      <Text style={styles.incidentProperty}>VALOR: </Text> 
      <Text style={styles.incidentValue}>{<Shi />}</Text>
      
      <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
        <Text style={styles.detailsButtonText}>Ver mais detalhes.</Text>
          <Feather name="arrow-right"  size={16} color="#e02041" />
      </TouchableOpacity>
    </View>
  )
}
function Shi() {
  return (
    <SvgAnimatedLinearGradient height={8}>
      <Rect x="0" y="0" rx="0" ry="4" width="200" height="8"/>
    </SvgAnimatedLinearGradient>
  )
}