import { CryptoApi } from '@/api/crypto-api'
import React from 'react'
import CryptoNewsClient from './cryptoNews.client';

export async function CryptoNews(p:{}) {
    const crypto =await CryptoApi.fetchBitcoin();
  return (
    <>
    <CryptoNewsClient initialData={crypto}/>
    </>
  )
}
