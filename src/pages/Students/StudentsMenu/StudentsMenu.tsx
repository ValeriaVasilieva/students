import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { sortStudents } from '@consts/optionsValues'
import { PATH_ROOT } from '@consts/routes'

import studentsStore from '@stores/StudentsStore'
import SortStudents from '@components/ui/SortStudents'
import Button from '@components/ui/Button'
import { Container } from '@components/styled/Container'

import * as SC from './styled'


const StudentsFilterControls: FC = observer(() => (
  <SC.Base>
    <Container>
      <SC.Flex>
        <SC.Header as={'h1'}>Студенты</SC.Header>
        <SC.ButtonBox>
          <Link to={PATH_ROOT} style={{ textDecoration: 'none' }}>
            <Button buttonText="Добавить студента" icon />
          </Link>
        </SC.ButtonBox>
      </SC.Flex>
      <SC.Flex>
        <SC.SearchBar
          placeholder={'Поиск по имени'}
          onChange={e => studentsStore.getFilterStudents(e.currentTarget.value)}
        />
        <SortStudents
          sortOptions={sortStudents}
          placeholder={'Фильтр'}
          onChangeSortList={option => studentsStore.getSortedStudents(option)}
          sortValue={studentsStore.sortValue}
        />
      </SC.Flex>
    </Container>
  </SC.Base>
))

export default StudentsFilterControls
