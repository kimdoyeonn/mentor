'use client';

import axios from 'axios';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProductDetail = ({ params: { id } }) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  if (isNaN(Number(id))) {
    return notFound();
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(result.data);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };
    getData();
    return () => {
      setLoading(true);
    };
  }, []);

  return (
    <div className='p-10'>
      {loading && <div>loading...</div>}
      {product && (
        <div>
          <h1 className='text-3xl font-bold'>{product.title}</h1>
          <div className='flex justify-center'>
            <div className='relative flex w-full mt-4 max-w-[600px] aspect-square'>
              <Image
                src={product.image}
                fill
                className='object-contain w-full'
              />
            </div>
          </div>
          <div className='flex flex-col w-full mt-6'>
            <div>Price: ${product.price}</div>
            <div className='mt-10'>{product.description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
