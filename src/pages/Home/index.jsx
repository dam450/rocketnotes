import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" />
        </li>
        <li>
          <ButtonText title="Frontend" isActive />
        </li>
        <li>
          <ButtonText title={'Node'} />
        </li>
        <li>
          <ButtonText title={'React'} />
        </li>
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
          <Note data={{
            title: 'React Modal',
            tags: [
              {id:'1', name:'React'},
              {id:'2', name:'node'},
            ]
          }} />
        </Section>
      </Content>
    </Container>
  )
}
