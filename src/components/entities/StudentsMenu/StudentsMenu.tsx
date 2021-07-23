import React from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import Button from '../../ui/Button'
import { Container } from '../../styled/Container'
import { sortStudents } from '../../../consts/optionsValues'
import SortStudents from '../../ui/SortStudents'
import { PATH_ROOT } from '../../../consts/routes'
import studentsStore from '../../../store/Students'

import * as SC from './styled'


const StudentsMenu = observer(() => {
  return (
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
            as={'input'}
            placeholder={'Поиск по имени'}
            onChange={(e: React.FormEvent<HTMLInputElement>) => studentsStore.getFilterStudents(e.currentTarget.value)}
          />
          <SortStudents
            options={sortStudents}
            placeholder={'Фильтр'}
            onChangeSortList={(value, text) => studentsStore.getSortedStudents(value, text)}
            sortValue={studentsStore.sortValue}
          />
        </SC.Flex>
      </Container>
    </SC.Base>
  )
})

export default StudentsMenu
