import { useState, useEffect } from 'react'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

import { api } from '@/services/api'

export function Home() {

  const [ tags, setTags ] = useState([])
  const [ selectedTags, setSelectedTags ] = useState([])

  function handleTagSelect(tagName) {
    const alreadySelected = selectedTags.includes(tagName)

    if (alreadySelected) {
      const filteredTags = selectedTags.filter(tag => tag !== tagName)
      setSelectedTags(filteredTags)
    } else {
      setSelectedTags(prevState => [...prevState, tagName])
    }
  }


  useEffect(() => {
    async function loadTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }
    loadTags()
  },[])

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            onClick={() => handleTagSelect('all')}
            isActive={selectedTags.length === 0}
          />
        </li>
        {tags &&
          tags.map(tag => (
            <li key={String(`${tag.note_id}:${tag.id}`)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagSelect(tag.name)}
                isActive={selectedTags.includes(tag.name)}
              />
            </li>
          ))}
      </Menu>

      <NewNote to="/new">
        <FiPlus size={22} />
        Criar nota
      </NewNote>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: 'React Modal',
              tags: [
                { id: '1', name: 'React' },
                { id: '2', name: 'node' },
              ],
            }}
          />
        </Section>
      </Content>
    </Container>
  )
}
