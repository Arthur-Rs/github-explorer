import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';

import { Container, Form, Error } from './styles';

// => Imagens
import LogoImg from '../../assets/logo.svg'

// => Components
import Repository from '../../components/Repository'

// => Services
import api from '../../services/api'

interface Irepository {
  full_name: string
  description?: string
  owner: {
    login: string
    avatar_url: string
  }
}

const Dashboard: React.FC = () => {

  const [searchRepo, setSearchRepo] = useState<string>('')
  const [AppError, setAppError] = useState<string>('')
  const [repositories, setRepositories] = useState
    <Irepository[]>([] as Irepository[])

  useEffect(() => {
    const storage = localStorage.getItem('repositories')

    if (!storage) {
      return
    }
    const storageRepos = JSON.parse(storage)

    setRepositories(storageRepos)
  }, [])

  const handleAddRepository = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!searchRepo) {
      setAppError('Digite autor/repositório')
      return
    }

    try {
      const data = await api.get<Irepository>(`repos/${searchRepo}`)

      const newRepository = data.data
      const updatedRepositories = [...repositories, newRepository]
      setRepositories(updatedRepositories)

      const checkingRepository = repositories.find((repo) => (
        repo.full_name === searchRepo
      ))

      if (checkingRepository) {
        setAppError('Esse repósitorio já existe em sua lista')
        return
      }

      localStorage.setItem('repositories', JSON.stringify(updatedRepositories))

      setSearchRepo('')
      setAppError('')
    } catch (err) {
      setAppError(`Erro ao acessar o repositório ${searchRepo}`)
    }
  }

  const updateSearchRepo = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchRepo(value)
  }

  return (
    <Container>
      <img src={LogoImg} alt="Logo Github Explorer" />
      <h1>Explore repositórios no Github</h1>

      <Form onSubmit={handleAddRepository}>
        <input
          onChange={updateSearchRepo}
          value={searchRepo}
          type="text"
          placeholder="Digite o nome do repositório" />
        <button
          type="submit">
          Pesquisar
        </button>
      </Form>
      {AppError && <Error>{AppError}</Error>}

      {repositories.map(({ full_name, description, owner }) => (
        <Repository
          key={full_name}
          name={full_name}
          description={description}
          avatar={owner.avatar_url}
        />
      ))}

    </Container>
  )
}

export default Dashboard;