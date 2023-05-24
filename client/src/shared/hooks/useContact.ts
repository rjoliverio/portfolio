import { toast } from 'react-toastify'
import { useMutation } from '@tanstack/react-query'

import { client } from '../lib/client'
import { IContact } from '../interface/IContact'
import { AxiosError, isAxiosError } from 'axios'

const useContact = () => {
  const handleSendMessage = (callback: () => void = () => null) =>
    useMutation({
      mutationFn: async (data: IContact) => await client.post('/api/contact_us', data),
      onSuccess: () => {
        toast.success('Message sent successfully')
        callback()
      },
      onError: (error: Error | AxiosError) => {
        if (isAxiosError(error)) {
          toast.error(error.response?.data.message || error.message)
        }
      },
    })
  return { handleSendMessage }
}

export { useContact }
