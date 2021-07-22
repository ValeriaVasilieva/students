/* eslint-disable no-debugger */
import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { Container } from '../../styled/Container'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import Select from '../../ui/Select'
import * as OP from '../../../consts/optionsValues'
import Avatar from '../../ui/Avatar'
import SelectColor from '../../ui/SelectColor'
import { colors } from '../../../consts/colors'
import { StudentsForm } from '../../../models/EntityModels/EntityModels'
import { PATH_STUDENTS } from '../../../consts/routes'
import studentsStore from '../../../store/Students'

import * as SC from './styled'


const RegistrationForm = observer(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<StudentsForm>({ mode: 'onBlur' })

  const history = useHistory()

  const onSubmit = (data: StudentsForm) => {
    studentsStore.getCorrectFormatAndPost(data).then(() => {
      if (!studentsStore.postError.isStatus) {
        history.push(PATH_STUDENTS)
      }
      studentsStore.postError.isStatus = false
    })
  }

  return (
    <SC.Base>
      <Container>
        <SC.Heading as={'h1'}>Новый студент</SC.Heading>
        <SC.Form onSubmit={handleSubmit(onSubmit)}>
          <SC.Fieldset>
            <Avatar label="Сменить аватар" {...register('avatar')} />
          </SC.Fieldset>
          <SC.Fieldset>
            <Input
              label={'Имя'}
              id={'name'}
              placeholder={'Иванов Иван Иванович'}
              {...register('name', {
                required: "Ooops, let's try again",
                maxLength: { value: 35, message: 'Gimmi, gimmi more...letters...no' },
                pattern: { value: /^[A-Za-zА-Яа-яЁё]/, message: 'Just business, just letters' }
              })}
              error={errors.name?.message}
            />
            <Input
              label={'Email'}
              id={'email'}
              placeholder={'ivanov@gmail.com'}
              {...register('email', {
                required: "Ooops, let's try again",
                maxLength: { value: 35, message: 'Gimmi, gimmi more...letters...no' },
                pattern: {
                  value: /@/,
                  message: 'Wrong format of Email'
                }
              })}
              error={errors.email?.message}
            />
            <Input
              label={'Рейтинг'}
              id={'score'}
              placeholder={'0'}
              {...register('score', {
                required: "Ooops, let's try again",
                maxLength: { value: 3, message: 'Are you kidding me?' },
                pattern: { value: /\d{1,5}/, message: 'Just business, just numbers' }
              })}
              error={errors.score?.message}
            />
            <Input
              label={'Дата рождения'}
              id={'birth'}
              type={'date'}
              {...register('birth', {
                required: "Ooops, let's try again"
              })}
              error={errors.birth?.message}
            />
          </SC.Fieldset>
          <SC.Fieldset>
            <Select
              label={'Пол'}
              id={'sex'}
              placeholder={'Выбрать'}
              options={OP.sex}
              setValue={setValue}
              {...register('sex', { required: 'Your choice is very important for us' })}
              error={errors.sex?.message}
            />
            <Select
              label={'Специальность'}
              id={'prof'}
              placeholder={'Выбрать'}
              options={OP.prof}
              setValue={setValue}
              {...register('prof', { required: 'Your choice is very important for us' })}
              error={errors.prof?.message}
            />
            <Select
              label={'Группа'}
              id={'group'}
              placeholder={'Выбрать'}
              options={OP.group}
              setValue={setValue}
              {...register('group', { required: 'Your choice is very important for us' })}
              error={errors.group?.message}
            />
            <SelectColor
              label={'Любимый цвет'}
              options={colors}
              placeholder={'Выбрать'}
              id={'color'}
              {...register('color', { required: 'Your choice is very important for us' })}
              error={errors.color?.message}
              setValue={setValue}
            />
          </SC.Fieldset>
          <SC.Fieldset>
            <Button buttonText={'Создать'} />
            {studentsStore.postError.isStatus && (
              <SC.ErrorMessage>
                {studentsStore.postError.status} : {studentsStore.postError.statusText}
              </SC.ErrorMessage>
            )}
          </SC.Fieldset>
        </SC.Form>
      </Container>
    </SC.Base>
  )
})

export default RegistrationForm
