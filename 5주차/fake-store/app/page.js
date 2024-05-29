'use client';

import Modal from '@/components/Modal';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    title: '',
    image: '',
    price: '',
    description: '',
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get('https://fakestoreapi.com/products');
        setProducts(result.data);
      } catch (err) {
        console.error(err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    getData();

    return () => {
      setLoading(true);
    };
  }, []);

  const handleDeleteProduct = async (id) => {
    try {
      setLoading(true);
      const result = await axios.delete(
        `https://fakestoreapi.com/products/${id}`
      );
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setShow(false);
  };
  const showModal = () => {
    setShow(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit', e);
    try {
      setLoading(true);
      const response = await axios.post('https://fakestoreapi.com/products', {
        data: {
          ...form,
        },
      });
      setProducts((prev) => [{ id: prev.length + 1, ...form }, ...prev]);
    } catch (err) {
    } finally {
      setLoading(false);
      setShow(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className='flex flex-col justify-between min-h-screen p-24'>
      <div className='flex justify-between'>
        <h1 className='mb-6 text-4xl font-bold'>목록</h1>
        <button onClick={showModal} className='w-20 h-10 bg-gray-500 rounded'>
          물품 추가
        </button>
      </div>
      {loading && <div>loading...</div>}
      <Modal show={show} onClose={closeModal}>
        <h2 className='text-2xl font-bold'>추가</h2>
        <form className='flex flex-col gap-4 mt-6' onSubmit={handleSubmit}>
          <div className='flex gap-2'>
            <label htmlFor='title' className='flex-shrink-0'>
              이름
            </label>
            <input
              type='text'
              id='title'
              name='title'
              className='w-full border-2'
              value={form.title}
              onChange={handleChange}
            />
          </div>
          <div className='flex gap-2'>
            <label htmlFor='image' className='flex-shrink-0'>
              이미지
            </label>
            <input
              type='text'
              id='image'
              name='image'
              className='w-full border-2'
              value={form.image}
              onChange={handleChange}
            />
          </div>
          <div className='flex gap-2'>
            <label htmlFor='price' className='flex-shrink-0'>
              가격
            </label>
            <input
              type='text'
              id='price'
              name='price'
              className='w-full border-2'
              value={form.price}
              onChange={handleChange}
            />
          </div>
          <div className='flex gap-2'>
            <label htmlFor='description' className='flex-shrink-0'>
              상세 설명
            </label>
            <textarea
              id='description'
              name='description'
              className='w-full border-2'
              value={form.description}
              onChange={handleChange}
            />
          </div>
          <button className='w-full h-10 text-white bg-black rounded'>
            저장
          </button>
        </form>
      </Modal>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((product) => (
          <div key={product.id} className='flex flex-col gap-2'>
            <Link
              href={`/products/${product.id}`}
              className='relative aspect-square'
            >
              <Image
                src={product.image}
                fill
                sizes='100%'
                className='absolute object-contain'
                alt={product.title}
              />
            </Link>
            <div className='line-clamp-1'>{product.title}</div>
            <button
              className='bg-red-500 rounded w-14'
              onClick={() => handleDeleteProduct(product.id)}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
