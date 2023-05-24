import * as Yup from 'yup'
import { IContact } from '../interface/IContact'

export const ContactUsSchema: Yup.ObjectSchema<IContact> = Yup.object().shape({
  subject: Yup.string().required().label('Subject'),
  email: Yup.string().email().required().label('Email'),
  message: Yup.string().required().label('Message'),
})
