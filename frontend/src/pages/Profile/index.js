import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import { Container, StyledLink } from './styles'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function Profile() {
  const ongName = localStorage.getItem('ongName')
  const ongId = localStorage.getItem('ongId')
  const [incidents, setIncidents] = useState([])
  const history = useHistory()

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: `Bearer ${ongId}`
      }
    }).then(response => {
      setIncidents(response.data)
    })
  }, [ongId])

  async function deleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization:  `Bearer ${ongId}`
        }
      })

      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch(err) {
      alert('Error: ao deletar o caso')
    }
  }

  function handleLogout() {
    localStorage.clear()
    history.push('/')
  }

  return (
    <Container>
      <header>
        <img src={logoImg} alt="logo" />
        <span>Bem-vinda, {ongName}</span>
        
        <StyledLink to="/incidents/new">Cadastrar novo caso</StyledLink>
        
        <button onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>
      
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO: </strong>
            <p>{incident.title}</p>
          
            <strong>DESCRIÇÃO: </strong>
            <p>{incident.description}</p>
          
            <strong>VALOR: </strong>
            <p>{ Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(incident.value) }</p>
          
            <button onClick={() => deleteIncident(incident.id)}  type="button">
              <FiTrash2 color="#a8a8b3" size={20} />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  )
}
