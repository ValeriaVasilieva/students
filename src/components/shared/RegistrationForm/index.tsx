import React, { FC } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'

import { PATH_STUDENTS } from '../../../consts/routes'
import { Container } from '../../styled/Container'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import Select from '../../ui/Select'
import Select2 from '../../ui/Select2'
import * as OP from '../../../consts/optionsValues'
import File from '../../ui/File'
import SelectColor from '../../ui/SelectColor'
import { colors } from '../../../consts/colors'

import * as SC from './styled'


type Props = {
  createStudent(dataForm: FormValues): void
}

export type FormValues = {
  name: string
  email: string
  birth: string
  score: string
  sex: string
  prof: string
  group: string
  avatar: FileList
  color: string
}

const RegistrationForm: FC<Props> = ({ createStudent }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control
  } = useForm<FormValues>({ mode: 'onBlur' })

  const history = useHistory()

  const onSubmit = (data: FormValues) => {
    createStudent(data)
    history.push(PATH_STUDENTS)
  }

  return (
    <SC.Base>
      <Container>
        <Link to={PATH_STUDENTS} style={{ textDecoration: 'none' }}>
          <SC.Link>Назад к списку студентов</SC.Link>
        </Link>
        <SC.Header as={'h1'}>Новый студент</SC.Header>
        <SC.Form onSubmit={handleSubmit(onSubmit)}>
          <SC.Fieldset>
            <File label="Сменить аватар" {...register('avatar')} />
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
          </SC.Fieldset>
        </SC.Form>
      </Container>
    </SC.Base>
  )
}

export default RegistrationForm

{
  /* {
              <Controller
                rules={{
                  required: {
                    value: true,
                    message: 'Это обязательное поле'
                  }
                }}
                control={control}
                defaultValue=""
                name="sex"
                render={({ field, fieldState: { error } }) => (
                  <Select2
                    options={OP.sex}
                    placeholder={'Выбрать'}
                    label={'Пол'}
                    field={field}
                    error={error?.message}
                  />
                )}
              />
            } */
}
