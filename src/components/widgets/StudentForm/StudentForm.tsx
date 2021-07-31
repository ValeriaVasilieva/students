import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import * as OP from '@consts/optionsValues'
import { colors } from '@consts/colors'

import { Container } from '@components/styled/Container'
import Input from '@components/ui/Input/Input'
import Button from '@components/ui/Button'
import Select from '@components/ui/Select'
import AvatarUpload from '@components/ui/AvatarUpload'

import * as SC from './styled'


export type StudentFormValues = {
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

type Props = {
  onSubmitForm(data: StudentFormValues): void
  errorStatus: number | undefined
  errorMessage: string
}

const StudentForm: FC<Props> = ({ onSubmitForm, errorStatus, errorMessage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<StudentFormValues>()

  const onSubmit = (data: StudentFormValues) => {
    onSubmitForm(data)
  }

  return (
    <SC.Base>
      <Container>
        <SC.Heading as={'h1'}>Новый студент</SC.Heading>
        <SC.Form onSubmit={handleSubmit(onSubmit)}>
          <SC.Fieldset>
            <AvatarUpload label="Сменить аватар" id={'avatar'} {...register('avatar')} />
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
                pattern: { value: /^[0-9]{1,3}$/, message: 'Just business, just numbers' }
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
              placeholder={'Выбрать'}
              options={OP.sex}
              onSelected={(valueSelect: string) => setValue('sex', valueSelect)}
              {...register('sex', { required: 'Your choice is very important for us' })}
              error={errors.sex?.message}
            />
            <Select
              label={'Специальность'}
              placeholder={'Выбрать'}
              options={OP.prof}
              onSelected={(valueSelect: string) => setValue('prof', valueSelect)}
              {...register('prof', { required: 'Your choice is very important for us' })}
              error={errors.prof?.message}
            />
            <Select
              label={'Группа'}
              placeholder={'Выбрать'}
              options={OP.group}
              onSelected={(valueSelect: string) => setValue('group', valueSelect)}
              {...register('group', { required: 'Your choice is very important for us' })}
              error={errors.group?.message}
            />
            <Select
              label={'Любимый цвет'}
              placeholder={'Выбрать'}
              options={colors}
              onSelected={(valueSelect: string) => setValue('color', valueSelect)}
              {...register('color', { required: 'Your choice is very important for us' })}
              error={errors.color?.message}
            />
          </SC.Fieldset>
          <SC.Fieldset>
            <Button buttonText={'Создать'} />
            {errorStatus && (
              <SC.ErrorMessage>
                {errorStatus} : {errorMessage}
              </SC.ErrorMessage>
            )}
          </SC.Fieldset>
        </SC.Form>
      </Container>
    </SC.Base>
  )
}

export default StudentForm
