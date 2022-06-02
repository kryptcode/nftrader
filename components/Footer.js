import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='bg-[#1c2147] py-8 '>
            <div className='w-[90%] md:w-2/3 mx-auto'>
                <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between items-center'>
                    <img src="./assets/solana.png" alt="" />
                    <img src="./assets/polygon.png" alt="" />
                    <img src="./assets/avalanche.png" alt="" />
                    <img src="./assets/sfermion.png" alt="" />
                    <img src="./assets/zokyo.png" alt="" />
                    <img src="./assets/eth.png" alt="" />
                    <img src="./assets/binance.png" alt="" />
                </div>
                <div className='h-[1px] my-10 bg-gray-400' />
                <div className='text-white flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between md:items-start items-center text-center md:text-left'>
                  <div className='w-full md:w-[40%]'>
                    <h3 className='text-3xl font-semibold mb-3'>
                      NFTrader
                    </h3>
                    <p className='text-sm'>
                    NFTrader is the first cross-chain and blockchain-agnostic NFT platform. We are an aggregator of all NFT marketplaces and host the complete NFT lifecycle, allowing anyone to seamlessly create, buy, sell, swap, farm, and leverage NFTs across different blockchains.
                    </p>
                  </div>
                  <div className='space-y-2'>
                    <h4 className='text-[#4f93fb] text-lg font-medium mb-5'>
                      TRADE & SWAP
                    </h4>
                    <p>
                      Marketplace
                    </p>
                    <p>
                      Create
                    </p>
                    <p>
                      Swap
                    </p>
                  </div>

                  <div className='space-y-2'>
                    <h4 className='text-[#4f93fb] text-lg font-medium mb-5'>
                      FEATURES
                    </h4>
                    <p>
                      NFT Aggregator
                    </p>
                    <p>
                      Multi-Chain + Cross-Chain
                    </p>
                    <p>
                      Social Features
                    </p>
                  </div>
                </div>
            </div>
        </div>
        <div className='bg-[#11163e] py-5 text-white'>
          <div className='w-[90%] md:w-2/3 mx-auto'>
            <p>
            © 2021 All Rights Reserved NFTrader
            </p>
          </div>
        </div>
    </div>
  )
}

export default Footer