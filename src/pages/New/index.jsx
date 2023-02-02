import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Input } from '@/components/Input'
import { NoteItem } from '@/components/NoteItem'
import { Section } from '@/components/Section'
import { TextArea } from '@/components/TextArea'

import { Container, Form } from './styles'

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input placeholder="Título" />
          <TextArea placeholder="Observações" />

          <Section title="Links úteis">
            <NoteItem placeholder="Novo link" value="Link" />
            <NoteItem placeholder="Novo link" isNew />
          </Section>

          <Section title="Marcadores">
            <div className='tags'>
              <NoteItem placeholder="Novo link" value="React" />
              <NoteItem placeholder="Novo link" value="React" />
              <NoteItem placeholder="Novo link" value="React" />
              
              
              <NoteItem placeholder="Novo marcador" isNew />
            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}
