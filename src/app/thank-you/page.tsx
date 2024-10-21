import React, { Suspense } from 'react'
import ThankYou from './ThankYou'

const Page = () => {
  return (
    <Suspense>
        <ThankYou orderId=''/>
    </Suspense>
  )
}

export default Page