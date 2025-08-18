import dbConnect, { collection } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb'
import Image from 'next/image'
import React from 'react'

export default async function serviceComponent({ params }) {
    const p = await params
    const data = await dbConnect(collection.service).findOne({ _id: new ObjectId(p.id) })
    return (
        <div>
            <section className='flex justify-center w-full'>
                <figure className=' relative '>
                    <Image src={'/assets/images/checkout/checkout.png'} width={1137} height={300} alt='Banner' />
                    <div className='absolute h-full w-full top-0 flex items-center overlay-bg'>
                        <h1 className='text-3xl font-bold ps-12'>Service Details</h1>
                    </div>
                </figure>
            </section>
            {JSON.stringify(data)}
            {JSON.stringify(p.id)}
            {collection.service}
        </div>
    )
}
