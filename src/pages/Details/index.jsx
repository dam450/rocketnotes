import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { Container, Links, Content } from './styles'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

import { api } from '@/services/api'

export function Details() {
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleDeleteNote() {
    const confirm = window.confirm('Tem certeza que deseja deletar a nota?')

    if (confirm) {
      await api.delete(`/notes/${params.id}`)

      navigate('/')
    }


  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
      console.log(response.data)
    }
    fetchNote()
  }, [])

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir a nota" onClick={() => handleDeleteNote()} />

            <h1>{data.title}</h1>
            <p>{data.description}</p>
            {data.links.length > 0 && (
              <Section title="Links úteis">
                <Links>
                  {data.links.map(link => (
                    <li key={String(link.id)}>
                      <a href={link.url} target="_blank">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags.length > 0 && (
              <Section title="Marcadores">
                {data.tags.map(tag => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}

            <Button title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  )
}

//export default () => (<>Rocketnotes</>)
