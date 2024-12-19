// "use client";

// import React, { useContext, useEffect, useRef, useState } from "react";
// import Cookies from "js-cookie";
// import Image from "next/image";
// import { cn } from "@/lib/utils";
// import { ChevronDown, Clock4, LoaderIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { ProjectContext } from "@/context/ProjectProvider";
// import { UseGetProjectHistoryList } from "@/hooks/query/useGetProjectHistoryList";

// const ProjectHistory = () => {
//   //get profile pic
//   const [profileImage, setProfileImage] = useState<string>("");

//   useEffect(() => {
//     const image = Cookies.get("profile_image") || "/profile.svg";

//     setProfileImage(image);
//   }, []);

//   // context
//   const {
//     selectedProjectId,
//     setSelectedProjectHistoryId,
//     selectedProjectHistoryId,
//   } = useContext(ProjectContext);

//   //states
//   const [showMoreHistory, setShowMoreHistory] = useState(false);
//   const historyRef = useRef<HTMLDivElement | null>(null);

//   //  hight animate
//   useEffect(() => {
//     if (historyRef.current) {
//       historyRef.current.style.height = showMoreHistory
//         ? `${historyRef.current.scrollHeight}px`
//         : "250px";
//     }
//   }, [showMoreHistory]);

//   const handleShowMoreHistory = () => {
//     setShowMoreHistory(!showMoreHistory);
//   };

//   //   project list history api
//   const { data, isSuccess, isLoading } =
//     UseGetProjectHistoryList(selectedProjectId);
//   useEffect(() => {
//     if (data && data?.length) {
//       setSelectedProjectHistoryId(data[0].history_id);
//     }
//   }, [isSuccess, data]);
   
//   return (
//     <div className=" pb-7 px-6 mt-5 2xl:mt-10">
//       {/* title */}
//       <div className="flex items-center justify-between text-[#BAC0DD]">
//         <h2 className="flex items-center gap-2 text-base font-normal px-5">
//           <Clock4 className="w-4 h-auto" />
//           History
//         </h2>
//         {/* <Plus className="w-5 h-auto" /> */}
//       </div>

//       {/* user info */}
//       {isLoading ? (
//         <div className="py-16 flex justify-center">
//           <LoaderIcon className="size-8 animate-spin" />
//         </div>
//       ) : !!data?.length ? (
//         <div
//           ref={historyRef}
//           className="overflow-hidden transition-all duration-500 ease-in-out mt-4 "
//           style={{ height: "250px" }}
//         >
//           {data &&
//             data
//               // .slice(0, showMoreHistory ? data.length : 3)
//               .slice(0, 2)

//               .map(({ history_id, history_date, name }) => (
//                 <div
//                   key={history_id}
//                   onClick={() => setSelectedProjectHistoryId(history_id)}
//                   className={cn(
//                     "cursor-pointer hover:bg-[#22263e] rounded-md px-10 py-3 mb-2",
//                     selectedProjectHistoryId === history_id
//                       ? "bg-[#22263e]"
//                       : "bg-transparent"
//                   )}
//                 >
//                   <h1 className="text-sm font-bold">
//                     {new Date(history_date).toLocaleString()}
//                   </h1>
//                   <div className="flex gap-2 mt-2">
//                     <Image
//                       src={profileImage || "/profile.svg"}
//                       width={40}
//                       height={40}
//                       alt="profile"
//                       className="w-6 h-6 rounded-full object-cover"
//                     />
//                     <input 
//                     className="bg-transparent bg-none border-none text-sm focus:outline-none focus:ring-0"
//                     value={name}
//                      />
//                     {/* <p className="text-sm"></p> */}
//                   </div>
//                 </div>
//               ))}
//         </div>
//       ) : (
//         ""
//         // <p className=" text-center py-10">No Project history !</p>
//       )}

//       {/* see mor button */}
//       {!isLoading && data && data?.length > 3 && (
//         <div className="flex justify-center">
//           <Button
//             onClick={handleShowMoreHistory}
//             className="flex gap-3 text-white bg-transparent hover:bg-[#22263e] mt-2"
//           >
//             {showMoreHistory ? "Show less" : "See all"}
//             <ChevronDown
//               className={cn(
//                 "transition-all duration-500 ease-in-out",
//                 showMoreHistory && "rotate-180"
//               )}
//             />
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectHistory;
import {  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
 
import React, { useContext, useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronDown, Clock4, LoaderIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectContext } from "@/context/ProjectProvider";
import { UseGetProjectHistoryList } from "@/hooks/query/useGetProjectHistoryList";
import axios from "axios";
import { toast } from "sonner";
interface History {
  history_id: number;
  name: string;
}
interface DeleteConfirmationModalProps {
  history: History; 
  open: boolean;  
  handleClose: () => void; 
  handleConfirm: (id:number) => void; 
}
const DeleteConfirmationModal:React.FC<DeleteConfirmationModalProps> = ({history , open, handleClose, handleConfirm }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="delete-confirmation-title"
      aria-describedby="delete-confirmation-description"
    >
      <DialogTitle id="delete-confirmation-title">Confirm Deletion</DialogTitle>
      <DialogContent>
        <DialogContentText id="delete-confirmation-description">
         {` Are you sure you want to delete this history named ${history?.name}? This action cannot be undone`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <button className="p-2 rounded-md text-gray-700" onClick={()=>handleClose} >
          Cancel
        </button>
        <button className="p-2 rounded-md bg-red-600 text-white" onClick={()=>{handleConfirm(history?.history_id)}} >
          Delete
        </button>
      </DialogActions>
    </Dialog>
  );
};
const ProjectHistory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState<string>("");
  const [localData, setLocalData] = useState<any[]>([]); // Local state for data
  const [editLoading,setEditLoading] = useState<{id:Number | null,status:boolean}>({id:null,status:false})
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = async(id:number) => { 
    try {
  
      const resp = await axios.delete(
        `https://app.iconocity.com/api/app/getHistoryByHistoryId/`
        , 
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
          data: {
            history_id: id, // Pass the body data here
          },
        }
      );
 
      toast.success(resp.data.data);
      setLocalData((prevData) =>
        prevData.filter((item) => item.history_id != id)
      );
      console.log(resp);
    } catch (error) {
      setEditLoading({ id: null, status: false });
      toast.error("Failed to delete history");
      console.error(error);
    }
    setIsModalOpen(false);
  };

 
  useEffect(() => {
    const image = Cookies.get("profile_image") || "/profile.svg";
    setProfileImage(image);
  }, []);

  const {
    selectedProjectId,
    setSelectedProjectHistoryId,
    selectedProjectHistoryId,
  } = useContext(ProjectContext);

  const [showMoreHistory, setShowMoreHistory] = useState(false);
  const [deletingHistoryName, setDeletingHistoryName] = useState<{history_id:number,name:string} | null>(null);
  const historyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.style.height = showMoreHistory
        ? `${historyRef.current.scrollHeight}px`
        : "250px";
    }
  }, [showMoreHistory]);

  const handleShowMoreHistory = () => {
    setShowMoreHistory(!showMoreHistory);
  };

  const { data, isSuccess, isLoading } =
    UseGetProjectHistoryList(selectedProjectId);

  useEffect(() => {
    if (data && data?.length) {
      setLocalData(data);
      setSelectedProjectHistoryId(data[0].history_id);
    }
  }, [isSuccess, data]);

  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const handleNameChange = async(id: number, newName: string) => {
    setLocalData((prevData) =>
      prevData.map((item) =>
        item.history_id === id ? { ...item, name: newName } : item
      )
    );
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
  
    setEditLoading({ id, status: true });
    // Set a new debounce timeout
    debounceTimeoutRef.current = setTimeout(async () => {
      try {
  
        const resp = await axios.put(
          "https://app.iconocity.com/api/app/getHistoryByHistoryId/",
          {
            history_id: id,
            history_name: newName,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          }
        );
  
        setEditLoading({ id: null, status: false });
        toast.success(resp.data.data);
        console.log(resp);
      } catch (error) {
        setEditLoading({ id: null, status: false });
        toast.error("Failed to update history name.");
        console.error(error);
      }
    }, 3000);
  };
  
  return (
    <div className=" pb-7 px-6 mt-5 2xl:mt-10">
      <div className="flex items-center justify-between text-[#BAC0DD]">
        <h2 className="flex items-center gap-2 text-base font-normal px-5">
          <Clock4 className="w-4 h-auto" />
          History
        </h2>
      </div>

      {isLoading ? (
        <div className="py-16 flex justify-center">
          <LoaderIcon className="size-8 animate-spin" />
        </div>
      ) : !!localData?.length ? (
        <div
          ref={historyRef}
          className="overflow-hidden transition-all duration-500 ease-in-out mt-4 "
          style={{ height: "250px" }}
        >
          {localData &&
            localData
              .slice(0, showMoreHistory?10:3)
              .map(({ history_id, history_date, name }) => (
                <div
                  key={history_id}
                  onClick={() => setSelectedProjectHistoryId(history_id)}
                  className={cn(
                    "cursor-pointer hover:bg-[#22263e] rounded-md px-4 py-3 mb-2",
                    selectedProjectHistoryId === history_id
                      ? "bg-[#22263e]"
                      : "bg-transparent"
                  )}
                >
                  <div className="flex flex-row items-center justify-between w-full">
                  <h1 className="text-sm font-bold">
                    {new Date(history_date).toLocaleString()}
                  </h1>
                   {editLoading.id == history_id?<p className="text-[11px]">Updating...</p>:<div className="flex flex-row items-center">
                    <svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="verified" className="w-4 h-auto "><path fill="white" d="M21.6,9.84A4.57,4.57,0,0,1,21.18,9,4,4,0,0,1,21,8.07a4.21,4.21,0,0,0-.64-2.16,4.25,4.25,0,0,0-1.87-1.28,4.77,4.77,0,0,1-.85-.43A5.11,5.11,0,0,1,17,3.54a4.2,4.2,0,0,0-1.8-1.4A4.22,4.22,0,0,0,13,2.21a4.24,4.24,0,0,1-1.94,0,4.22,4.22,0,0,0-2.24-.07A4.2,4.2,0,0,0,7,3.54a5.11,5.11,0,0,1-.66.66,4.77,4.77,0,0,1-.85.43A4.25,4.25,0,0,0,3.61,5.91,4.21,4.21,0,0,0,3,8.07,4,4,0,0,1,2.82,9a4.57,4.57,0,0,1-.42.82A4.3,4.3,0,0,0,1.63,12a4.3,4.3,0,0,0,.77,2.16,4,4,0,0,1,.42.82,4.11,4.11,0,0,1,.15.95,4.19,4.19,0,0,0,.64,2.16,4.25,4.25,0,0,0,1.87,1.28,4.77,4.77,0,0,1,.85.43,5.11,5.11,0,0,1,.66.66,4.12,4.12,0,0,0,1.8,1.4,3,3,0,0,0,.87.13A6.66,6.66,0,0,0,11,21.81a4,4,0,0,1,1.94,0,4.33,4.33,0,0,0,2.24.06,4.12,4.12,0,0,0,1.8-1.4,5.11,5.11,0,0,1,.66-.66,4.77,4.77,0,0,1,.85-.43,4.25,4.25,0,0,0,1.87-1.28A4.19,4.19,0,0,0,21,15.94a4.11,4.11,0,0,1,.15-.95,4.57,4.57,0,0,1,.42-.82A4.3,4.3,0,0,0,22.37,12,4.3,4.3,0,0,0,21.6,9.84Zm-4.89.87-5,5a1,1,0,0,1-1.42,0l-3-3a1,1,0,1,1,1.42-1.42L11,13.59l4.29-4.3a1,1,0,0,1,1.42,1.42Z" ></path></svg>
                    <p className="text-[11px] ml-1">saved</p>
                    </div>}
                    </div>
                  <div className="flex gap-2 mt-2">
                    <Image
                      src={profileImage || "/profile.svg"}
                      width={40}
                      height={40}
                      alt="profile"
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  <div className="flex flex-row items-center justify-between w-full ">
                  <input
                      className="bg-transparent border-none text-sm focus:outline-none focus:ring-0 w-8/12"
                      value={name}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) =>
                      {
                      
                        console.log(history_id,e.target.value)
                        handleNameChange(history_id, e.target.value)
                      }
                      }
                    />
                    <svg 
                      onClick={(e) => {e.stopPropagation()
                        handleOpenModal()
                        setDeletingHistoryName({name,history_id})  
                      }}
                    
                    className="w-5 h-auto " viewBox="-0.5 0 19 19" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    
    
    <g id="out" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M4.91666667,14.8888889 C4.91666667,15.3571429 5.60416667,16 6.0625,16 L12.9375,16 C13.3958333,16 14.0833333,15.3571429 14.0833333,14.8888889 L14.0833333,6 L4.91666667,6 L4.91666667,14.8888889 L4.91666667,14.8888889 L4.91666667,14.8888889 Z M15,3.46500003 L12.5555556,3.46500003 L11.3333333,2 L7.66666667,2 L6.44444444,3.46500003 L4,3.46500003 L4,4.93000007 L15,4.93000007 L15,3.46500003 L15,3.46500003 L15,3.46500003 Z" id="path" fill="white" >

</path>
    </g>
</svg>

                    </div>
                  </div>
                </div>
              ))}
        </div>
      ) : (
        ""
      )}

      {!isLoading &&localData &&localData?.length > 3 && (
        <div className="flex justify-center">
          <Button
            onClick={handleShowMoreHistory}
            className="flex gap-3 text-white bg-transparent hover:bg-[#22263e] mt-2"
          >
            {showMoreHistory ? "Show less" : "See all"}
            <ChevronDown
              className={cn(
                "transition-all duration-500 ease-in-out",
                showMoreHistory && "rotate-180"
              )}
            />
          </Button>
        </div>
      )}
      <DeleteConfirmationModal
     history={deletingHistoryName as History}
     open={isModalOpen}
     handleClose={handleCloseModal}
     handleConfirm={handleConfirmDelete}
   />
    </div>
     
  );
};

export default ProjectHistory;
