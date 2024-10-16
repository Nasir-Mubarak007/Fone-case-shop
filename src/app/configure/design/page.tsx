import { db } from '@/db'
import { notFound } from 'next/navigation'
import React from 'react'
import DesignConfigurator from './designConfigurator'

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

const Page = async({searchParams}: PageProps) => {
  const {id} = searchParams
    // make db call
    if (!id || typeof id !== 'string') {
      return notFound()
    }

  const configuration = await db.configuration.findUnique({
    where: {id},
  })

  if (!configuration) {
    return notFound()
  }

   const { imgUrl, width, height} = configuration
  return (
    <DesignConfigurator configId={configuration.id} imgDimensions={{ width , height}}  imgUrl={imgUrl}/>
    
  )
}

export default Page