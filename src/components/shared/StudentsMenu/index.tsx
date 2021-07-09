import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { NONAME } from 'dns'

import Button from '../../ui/Button'
import { Container } from '../../styled/Container'
import { sortStudents } from '../../../consts/optionsValues'
import SortStudents from '../../ui/SortStudents'
import { PATH_ROOT } from '../../../consts/routes'

import * as SC from './styled'


type Props = {
  onChangeFilter(value: string): void
  onChangeSort(value: string, text: string): void
  sortValue: string
}

const StudentsMenu: FC<Props> = (props) => {
  const { onChangeSort, onChangeFilter, sortValue } = props

  return (
    <SC.Base>
      <Container>
        <SC.Flex>
          <SC.Header as={'h1'}>Студенты</SC.Header>
          <Link to={PATH_ROOT} style={{ textDecoration: 'none' }}>
            <Button buttonText="Добавить студента" icon width={'340px'} />
          </Link>
        </SC.Flex>
        <SC.Flex>
          <SC.Finder
            as={'input'}
            placeholder={'Поиск по имени'}
            onChange={(e: any) => onChangeFilter(e.currentTarget.value)}
          />
          <SortStudents
            options={sortStudents}
            placeholder={'Фильтр'}
            onChangeSort={(value, text) => onChangeSort(value, text)}
            sortValue={sortValue}
          />
        </SC.Flex>
      </Container>
    </SC.Base>
  )
}

export default StudentsMenu
