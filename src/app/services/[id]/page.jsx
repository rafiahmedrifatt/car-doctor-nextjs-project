import dbConnect, { collection } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb'
import Image from 'next/image'
import React from 'react'

export default async function serviceComponent({ params }) {
    const p = await params
    const data = await dbConnect(collection.ser  vice).findOne({ _id: new ObjectId(p.id) })
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
            <section className='mt-20 w-10/12 mx-auto grid grid-cols-12'>
                <div className='col-span-8'>
                    <Image src={data.img} width={752} height={400} />
                    <p className='text-2xl font-bold my-8'>{data.title}</p>
                    <p className='my-5'>{data.description}</p>
                    <div className='grid grid-cols-12 gap-10 text-black'>
                        {
                            data.facility.map(singleFacility =>
                                <div className='bg-gray-200 p-5 rounded-2xl border border-t-red-400 col-span-5'>
                                    <p className='text-xl font-bold'>{singleFacility.name}</p>
                                    <p>{singleFacility.details}</p>
                                </div>
                            )
                        }
                    </div>

                </div>
                <div className='col-span-4'>
                    <button className='btn bg-red-500'>Check Out</button>
                </div>
            </section>
        </div>
    )
}
