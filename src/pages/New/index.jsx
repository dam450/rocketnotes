import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Input } from '@/components/Input'
import { NoteItem } from '@/components/NoteItem'
import { Section } from '@/components/Section'
import { TextArea } from '@/components/TextArea'

import { api } from '@/services/api'

import { Container, Form } from './styles'

export function New() {

  const [ links, setLinks ] = useState([])
  const [ newLink, setNewLink ] = useState('')

  const [ tags, setTags ] = useState([])
  const [ newTag, setNewTag ] = useState('')

  const [ title, setTitle ] = useState(''),
    [ description, setDescription ] = useState(''),
    navigate = useNavigate();

  function handleAddLink() {
    if (!newLink) return

    const linkFound = links.find(link => link === newLink)
    if(linkFound) return

    setLinks(prevState => [ ...prevState, newLink ])
    setNewLink('')
  }

  function handleRemoveLink(linkDeleted) {
    setLinks(prevState => prevState.filter(link => link !== linkDeleted))
  }

  function handleAddTag() {
    if (!newTag) return

    const tagFound = tags.find(tag => tag === newTag)
    if (tagFound) return

    setTags(prevState => [ ...prevState, newTag ])
    setNewTag('')
  }

  function handleRemoveTag(tagDeleted) {
    setTags(prevState => prevState.filter(tag => tag !== tagDeleted))
  }

  async function handleNewNote() {

    if (!title)
      return alert('Informe o título da nota')

    if (newLink) {
      const ok = confirm(
        'Links\n'+
        '\nVocê digitou um Link mas não adicionou.' +
        '\nClique no botão + para adicionar ou deixe o campo vazio.' +
        '\nDeseja continuar assim mesmo?'
      )
      if(!ok) return
    }

    if (newTag) {
      const ok = confirm(
        'Marcadores\n' +
        '\nVocê digitou uma Tag mas não adicionou!' +
        '\nDeseja continuar mesmo assim?'
      )
      if(!ok) return
    }


    await api.post('/notes', {
      title,
      description,
      tags,
      links,
    })

    alert('Nota criado com sucesso!')
    navigate('/')
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />

          <TextArea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}

            <NoteItem
              placeholder="Novo link"
              type="url"
              isNew
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
              value={newLink}
              pattern="https://.*"
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}

              <NoteItem
                placeholder="Novo marcador"
                isNew
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button
            title="Salvar"
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  )
}
