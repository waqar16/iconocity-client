import React, { Dispatch, SetStateAction, useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Icons } from '@/components/icons';
import { baseURL } from '@/lib/axiosClient';
import axios from 'axios';
import Cookies from 'js-cookie'
import { Url } from 'next/dist/shared/lib/router/router';
interface CreateVariationProps {
  setPageNumber: Dispatch<SetStateAction<number>>;
  enableVariation:boolean
  activeIcon:{id:number;url:string} | null
}
const downloadImage = async (base64String: string) => {
  try {
    // Extract the Base64 string and convert it to binary data
    const byteString = atob(base64String.split(",")[1] || base64String);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uintArray = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      uintArray[i] = byteString.charCodeAt(i);
    }

    // Create a Blob from the binary data
    const blob = new Blob([arrayBuffer], { type: "image/png" });

    // Create a URL for the Blob
    const downloadUrl = URL.createObjectURL(blob);

    // Create a download link and trigger the download
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "downloaded-image.png"; // Set a file name
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    console.error("Error downloading the image:", error);
  }
};
const CreateVariations: React.FC<CreateVariationProps> = ({ activeIcon,setPageNumber,enableVariation }) => {
  // State to store the selected variation
  const [selectedVariation, setSelectedVariation] = useState<number | null>(null);
  const [showVariation, setShowVariation] = useState<boolean>(false);
  const [visibleVariations,setVisibleVariations] = React.useState<{b64_json:string}[] | null>(null)
  const [loading, setLoading] = useState<boolean>(false);

  // Function to handle selection
  const handleSelect = (variation: number) => {
    setSelectedVariation(variation);
  };

  return (
    <div className="relative bg-chatbot-gradient border border-[#1C2037] rounded-2xl px-8 py-5 mt-5">
      <div className="w-full flex flex-row items-center">
        <h1 className="text-white text-sm">No. of Variations: {selectedVariation}</h1>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="ml-4 inline-flex items-center justify-between w-4/12 px-4 py-2 text-sm text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none">
            {selectedVariation !== null ? `Variation ${selectedVariation}` : 'Select Variations'}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg w-40"
              sideOffset={5}
            >
              {Array.from({ length: 4 }, (_, i) => (
                <DropdownMenu.Item
                  key={i + 1}
                  className="px-4 py-2 text-white cursor-pointer hover:bg-gray-700 focus:outline-none"
                  onClick={() => handleSelect(i + 1)} // Update state when an item is selected
                >
                  {i + 1}
                </DropdownMenu.Item>
              ))}
              <DropdownMenu.Arrow className="fill-gray-800" />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
        <button
        disabled={loading || !selectedVariation}
        onClick={async()=>{
          try {
            setLoading(true);
            const response = await axios.post(
              `${baseURL}/app/generateIconVariations/
`,
              { icon_url: activeIcon?.url,
                variations: selectedVariation
 }, 
   {
  headers: {
      'Authorization': `Bearer ${Cookies.get('token')}`
  },
}
            );
     console.log(response.data)
            setVisibleVariations(response.data)
            setShowVariation(true)
            setLoading(false);
      
            } catch (error) {
            setLoading(false);
             console.error(error);
          } finally {
            setLoading(false);
          }
          // setShowVariation(true)
        }}
        className="text-sm bg-white text-[#1C2037] p-2 rounded-lg ml-4 hover:bg-[#1C2037] hover:text-white border border-white hover:border-[#1C2037] transition-colors duration-300">
          {loading?"Loading...":"Create"}
        </button>
      </div>
      {showVariation && <div className='grid grid-cols-5 w-full gap-4 mt-4'>
        {visibleVariations  &&   visibleVariations.map((va,index)=>
        (
          <div
            key={index + 1}
            className="relative w-[80px] h-[80px]  text-white cursor-pointer   flex flex-col items-center justify-center bg-white rounded-lg"
            onClick={() => handleSelect(index + 1)} // Update state when an item is selected
          >
              {/* <p className='text-black'> 
            {index + 1}

              </p> */}
              <img className='w-full h-auto '
              src={`data:image/png;base64,${va.b64_json}`}
              alt={'Variation'}
              />
              <div className='    absolute w-full flex flex-row  justify-end items-end bottom-0 left-0'>
            <div
            onClick={()=>{downloadImage(va.b64_json)}}
            className='cursor-pointer flex flex-row items-center justify-center p-1 border  rounded-md bg-[#1C2037]'>
            <svg

xmlns="http://www.w3.org/2000/svg"
fill="white" // Allows the color to be controlled via `text-*` classes
viewBox="0 0 24 24"
height={20}
width={20}
>
<path d="M12 16l-4-4h3V4h2v8h3l-4 4z" />
</svg>
              </div>
                  </div>
          </div>
        )
        )}
       
      </div>}
    </div>
  );
};

export default CreateVariations;
