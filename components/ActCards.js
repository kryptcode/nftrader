import React from 'react'

const ActCards = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between w-[80%] mx-auto gap-6 text-center py-4'>
        <div className='flex flex-col items-center'>
            <img src="./assets/create.png" alt="" />
            <h6 className='text-lg font-medium text-gray-800 mt-3 mb-4'>
                Create
            </h6>
            <p className='text-gray-600 mb-6'>
                Using NFTrade, anyone can easily create a decentralized NFT and NFT collection! NFTrade takes all the complexity out of deploying your own NFTs, collections and contracts, offering drag and drop capabilites. Start creating your own collections today.
            </p>
            <button className='py-2 px-6 border-2 border-blue-600 text-blue-600 rounded-md'>
              Start creating!
            </button>
        </div>
        
        <div className='flex flex-col items-center'>
            <img src="./assets/trade.png" alt="" />
            <h6 className='text-lg font-medium text-gray-800 mt-3 mb-4'>
                Trade
            </h6>
            <p className='text-gray-600 mb-6'>
                Creating, buying and selling NFTs has never been so easy. With the lowest transaction fees in the industry and an intuitive user interface,
                NFTrade allows anyone to buy and sell NFTs from various blockchain networks in a single, easy-to-use platform,
            </p>
            <button className='py-2 px-6 border-2 border-blue-600 text-blue-600 rounded-md'>
              How to trade?
            </button>
        </div>

        <div className='flex flex-col items-center'>
            <img src="./assets/switch.png" alt="" />
            <h6 className='text-lg font-medium text-gray-800 mt-3 mb-4'>
                Swap
            </h6>
            <p className='text-gray-600 mb-6'>
                Using NFTrade, anyone can easily create a decentralized NFT and NFT collection! NFTrade takes all the complexity out of deploying your own NFTs, collections and contracts, offering drag and drop capabilites. Start creating your own collections today.
            </p>
            <button className='py-2 px-6 border-2 border-blue-600 text-blue-600 rounded-md'>
              Start creating!
            </button>
        </div>
    </div>
  )
}

export default ActCards