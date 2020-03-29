import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import './styles.css'
import api from '../../services/api'

const ongId = localStorage.getItem('ongId')

export default function NewIncident() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const history = useHistory()
  
  async function handleNewIncident(e) {
    e.preventDefault()
    
    const data = {
      title,
      description,
      value
    }
    
    try {
      api.post('incidents', data, {
        headers: {
          Authorization:  `Bearer ${ongId}`
        }
      })
      history.push('/profile')
    } catch(err) {
      alert('Error: algo deu errado tente novamente mais tarde')
    }
  }
  
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="logo" />
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamento para encontrar um herói para resolver isso.</p>
          
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para o home
          </Link>
        </section>
    
        <form onSubmit={handleNewIncident}>
          <input placeholder="Titulo do caso" value={title} onChange={e => setTitle(e.target.value)} />
          <textarea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} />
          <input placeholder="Valor em reais" value={value} onChange={e => setValue(e.target.value)} />
          
          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}
