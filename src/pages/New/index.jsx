import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Input } from '@/components/Input'
import { NoteItem } from '@/components/NoteItem'
import { Section } from '@/components/Section'
import { TextArea } from '@/components/TextArea'

import { api } from '@/services/api'

import { Container, Form } from './styles'
import { toast } from 'react-hot-toast'

export function New() {

  const [ links, setLinks ] = useState([])
  const [ newLink, setNewLink ] = useState('')

  const [ tags, setTags ] = useState([])
  const [ newTag, setNewTag ] = useState('')

  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')

  const inputLink = useRef()
  const inputTag = useRef()
  const saveBtn = useRef()

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

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

    const trimmedTag = newTag.trim()

    const tagAlreadyIncluded = tags.includes(trimmedTag)
    if (tagAlreadyIncluded) return

    setTags(prevState => [...prevState, trimmedTag])
    setNewTag('')
  }

  function handleRemoveTag(tagDeleted) {
    setTags(prevState => prevState.filter(tag => tag !== tagDeleted))
  }

  async function handleNewNote() {

    if (!title)
      return toast('Informe ao menos o título da nota!')

    const alertConfig = {
      style: { background: '#ffc400', color: '#292929' },
      duration: 4000,
    }

    if (newLink) {
      inputLink.current.focus()

      return toast(
        'Você digitou um Link mas não adicionou.' +
          '\n\nClique em + para adicionar ou deixe o campo vazio.',
        alertConfig
      )
    }

    if (newTag) {
      inputTag.current.focus()

      return toast(
        'Você digitou uma Tag mas não adicionou!' +
          '\n\nClique em + para adicionar ou deixe o campo vazio.',
        alertConfig
      )
    }

    saveBtn.current.disabled = true
    const loadingToast = toast.loading('Salvando Nota...')


    api
      .post('/notes', {
        title,
        description,
        tags,
        links,
      })
      .then(() => {
        toast.dismiss(loadingToast)
        toast.success('Nota criado com sucesso!')
        navigate(-1)
      })
      .catch(() => {
        toast.dismiss(loadingToast)
        toast.error('Ocorreu um erro ao criar a nota!')
      })
      .finally(() => {
        saveBtn.current.disabled = false
      })
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <button onClick={handleBack} type="button">
              voltar
            </button>
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
              ref={inputLink}
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
                ref={inputTag}
              />
            </div>
          </Section>

          <Button title="Salvar" onClick={handleNewNote} ref={saveBtn} />
        </Form>
      </main>
    </Container>
  )
}
