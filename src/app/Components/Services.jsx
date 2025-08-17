import dbConnect from '@/lib/dbConnect';
import Image from 'next/image';
import React from 'react';

async function Services(props) {
    const data = await dbConnect('services').find().toArray()
    console.log(data);

    return (
        <div>
            <p className='text-red-500 font-bold text-sm'>Services</p>
            <p>Our Service Area</p>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='grid grid-cols-12'>
                {data.map(singleData =>
                    <div key={singleData._id} className='col-span-4'>
                        <h1> hello {singleData.title}</h1>
                        <Image src={singleData.img} height={208} width={314} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Services;