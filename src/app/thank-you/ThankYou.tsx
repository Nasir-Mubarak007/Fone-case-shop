'use cclient'

import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getPaymentStatus } from './actions'

const ThankYou = () => {
    const {} = useQuery({
        queryKey: ['get-payment-status'],
        queryFn: async()=> await getPaymentStatus()
    })
  return (
    <></>
  )
}

export default ThankYou