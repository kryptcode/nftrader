import { useState, useRef} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useAddress } from '@thirdweb-dev/react'

const Create = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const hiddenFileInput = useRef(null);
    const address = useAddress()
      
    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        setSelectedFile(fileUploaded)
        fileUploaded && setIsFilePicked(true)
      };

    const handleSubmit = (e) => {
        e.preventDefault()
//         if (!isFilePicked) return;
//         const formData = new FormData()
//         fetch("http://localhost:3001/", {
//         method: "POST",
//         body: formData,
//         })
//         .then((response) => response.json())
//         .then((result) => {
//         console.log("Success:", result);
//         })
//         .catch((error) => {
//         console.error("Error:", error);
//         });
//         };
    }
  return (
    <div>
        <Header />
        <div className='w-[90%] md:w-[58%] mx-auto py-8'>
            <div>
                <h3 className='text-center text-3xl font-medium mb-4 text-gray-800'>
                    Create NFTs
                </h3>
                <p className='text-center text-gray-600 text-lg mb-8'>
                NFTs can represent essentially any type of digital file, with artists creating NFTs featuring pictures, videos, gifs, audio files, and mixtures of them all. There are also utility NFT tokens, which provide a good or service and contain inherent value coded within them, what's your vision?.
                </p>
            </div>
            <form className='text-[#1c2147] my-7' onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label>
                        <h6 className='font-medium'>
                            Upload File <span className='text-red-500'>*</span>
                        </h6>
                        <p>
                        Add your unique image / video / audio file
                        </p>
                        <p className='mt-8 text-center '>
                        JPG, PNG, GIF, WEBP, MP4 or MP3. Max 30mb.
                        </p>
                    </label>
                    <div className='flex items-center justify-center my-3'>
                        <button className=' py-2 px-4 border-2 rounded-md text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 ease-linear' onClick={handleClick}>
                            Choose file
                        </button>
                    </div>
                    <input 
                        type="file" 
                        className='hidden'
                        ref={hiddenFileInput}
                        onChange={handleChange} 
                    />
                </div>
                <div className='mb-4'>
                    <label>
                    <h6 className='font-medium'>
                        Name <span className='text-red-500'>*</span>
                    </h6>
                    <p>
                    Choose a unique name for your NFT
                    </p>
                    </label>
                    <input type="text" placeholder="Enter the NFT's name" className='w-full outline-none p-2 border rounded-md pl-4 mt-2' />
                </div>
                <div className='mb-4'>
                    <label>
                    <h6 className='font-medium'>
                        Description
                    </h6>
                    <p>
                    Describe your NFT, help other users understand what's unique about it
                    </p>
                    </label>
                    <textarea placeholder="Enter the NFT's description" className='w-full outline-none p-2 border rounded-md pl-4 mt-2' />
                </div>
                <div className='mb-4'>
                    <label>
                    <h6 className='font-medium'>
                        Properties
                    </h6>
                    <p>
                    List attributes that represents your NFT (color, shape, mood, etc..)
                    </p>
                    </label>
                    <div className='flex justify-between space-x-3'>
                        <input type='text' placeholder="Property" className='w-full outline-none p-2 border rounded-md pl-4 mt-2' />
                        <input type='text' placeholder="Value" className='w-full outline-none p-2 border rounded-md pl-4 mt-2' />
                    </div>
                </div>
                <p className='text-gray-600 italic font-semibold'>
                Note, the process of minting an NFT is an irreversible process, make sure all the above details are right.
                </p>
                <div className='flex  flex-col items-center justify-center pt-4'>
                    {
                        address ? (
                            <button className='py-2 px-9 bg-blue-600 text-white rounded-md'>
                                Create
                            </button>
                        ) : (
                            <>
                                <button className='py-2 px-9 bg-blue-600/10 text-white rounded-md cursor-not-allowed' disabled>
                                    Create
                                </button>
                                <p className='text-center text-red-400 block mt-3'>
                                    Please connect to metamask!!!
                                </p>
                            </>
                        )
                    }
                </div>
            </form>
        </div>
        <Footer />
    </div>
  )
}

export default Create
