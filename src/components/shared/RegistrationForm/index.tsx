import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { PATH_STUDENTS } from '../../../consts/routes'
import { Container } from '../../styled/Container'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import Select from '../../ui/Select'
import * as OP from '../../../consts/optionsValues'
import File from '../../ui/File'
import UploadImage from '../../ui/UploadImage'

import * as SC from './styled'


export type FormInputs = {
  userName: string
  Email: string
  age: string
  score: string
  sex: string
  prof: string
  group: string
  avatar: string
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control
  } = useForm<FormInputs>()

  const onSubmit = (data: FormInputs) => console.log('Отправлено: ', data)

  return (
    <SC.Base>
      <Container>
        <Link to={PATH_STUDENTS} style={{ textDecoration: 'none' }}>
          <SC.Link>Назад к списку студентов</SC.Link>
        </Link>
        <SC.Header as={'h1'}>Новый студент</SC.Header>
        <SC.Form onSubmit={handleSubmit(onSubmit)}>
          <SC.Fieldset>
            <Controller
              name="avatar"
              control={control}
              render={({ field: { onChange, value } }) => (
                <UploadImage
                  id="profile-avatar"
                  name="profile-avatar"
                  value={value}
                  onFileSelect={(value: string) => onChange(value)}
                />
              )}
            />
          </SC.Fieldset>
          <SC.Fieldset>
            {/* <Input
              label={'ФИО'}
              id={'name'}
              placeholder={'Иванов Иван Иванович'}
              {...register('userName', {
                required: 'Введите ваше имя'
              })}
              error={errors.userName}
            />
            <Input
              label={'Email'}
              id={'Email'}
              placeholder={'ivanov@gmail.com'}
              {...register('Email', {
                required: 'Введите ваш Email',
                pattern: { value: /[A-Za-z]+@[a-z]+.[a-z]{2,}/, message: 'Это не Email' }
              })}
              error={errors.Email}
            />
            <Input
              label={'Возраст'}
              id={'age'}
              placeholder={'0'}
              max={3}
              {...register('age', {
                required: 'Введите ваш возраст',
                pattern: { value: /[0-9]/, message: 'Не бывает такого' }
              })}
              error={errors.age}
            />
            <Input
              label={'Рейтинг'}
              id={'score'}
              placeholder={'0'}
              max={3}
              {...register('score', {
                required: 'Введите ваш рейтинг',
                pattern: { value: /[0-9]{2,3}/, message: 'Введите точный рейтинг' }
              })}
              error={errors.score}
            /> */}
          </SC.Fieldset>
          <SC.Fieldset>
            {/* <Select
              label={'Специальность'}
              defaultValue={'Выбрать'}
              {...(register('prof'), { required: 'Нужно выбрать' })}
              error={errors.prof}
              options={OP.prof}
              id={'prof'}
              setValue={setValue}
            />
            <Select
              label={'Группа'}
              defaultValue={'Выбрать'}
              {...(register('group'), { required: 'Нужно выбрать' })}
              error={errors.group}
              options={OP.group}
              id={'group'}
              setValue={setValue}
            />
            <Select
              label={'Пол'}
              defaultValue={'Выбрать'}
              {...(register('sex'), { required: 'Нужно выбрать' })}
              error={errors.sex}
              options={OP.sex}
              id={'sex'}
              setValue={setValue}
            /> */}
          </SC.Fieldset>
          <SC.Fieldset>
            <Button buttonText={'Создать'} />
          </SC.Fieldset>
        </SC.Form>
      </Container>
    </SC.Base>
  )
}

export default Form
