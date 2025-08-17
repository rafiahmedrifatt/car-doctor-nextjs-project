import dbConnect, { collection } from '@/lib/dbConnect';
import Image from 'next/image';
import React from 'react';

async function Services(props) {
    const data = await dbConnect(collection.service).find().toArray()


    return (
        <div>
            <p className='text-red-500 font-bold text-sm'>Services</p>
            <p>Our Service Area</p>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='grid grid-cols-12'>
                {data.map(singleData =>
                    <div className='col-span-4'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={singleData.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body flex flex-row justify-between">
                                <div>
                                    <h2 className="card-title">{singleData.title}</h2>
                                    <p className="text-xl text-orange-500">Price: ${singleData.price}</p>
                                </div>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Services;