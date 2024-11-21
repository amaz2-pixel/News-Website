"use client"
import { CryptoApi } from '@/api/crypto-api';
import React, { useEffect, useState } from 'react'


export default function CryptoNewsClient(p:{initialData: CryptoItem}) {
  const [crypto,setCrypto]=useState<CryptoItem>(p.initialData);
  const fetCrypto=async()=>{
    const cryptoResp= await CryptoApi.fetchBitcoin()
    setCrypto(cryptoResp)
  }

  useEffect(()=>{
   fetCrypto();
   const IntervalId=setInterval(fetCrypto,20000);

   return ()=>{
    clearInterval(IntervalId);
   }
  },[])

  const getEvolutionEmoji= (value:string)=>{
    const v=Number(value)
    return v>0 ? <span>📈</span> : <span>📉</span>
  }
  return crypto && <div>
    <div className='flex items-center space-x-4 mb-4 mt-4 '>
      <h2 className='text-xl font-bold'><span className='animate-pulse'>🔴</span> Crypto News</h2>
    </div>
    <div className='w-80 border-2 p-4 rounded-lg'>
     <div>
      <div className='text-lg font-semibold'>
         {crypto.name + " market "}
      </div>
      <div className='text-slate-500'>
        Real time {crypto.name} evolution
      </div>
     </div>
     <div className='space-y-2 text-sm'>
      {crypto.priceUsd.split(".")[0]}$  ({crypto.changePercent24Hr}%) {getEvolutionEmoji(crypto.changePercent24Hr)}
     </div>
    </div>
  </div>
}
