 "use client"
import React, { Suspense } from "react"; 
import GeneratePageComponent from "@/components/generate-page/GeneratePage";
const GeneratePage = () => {
  
  return (
    <Suspense fallback={<div>loading...</div>}>
      <GeneratePageComponent />
    </Suspense>
  );
};

export default GeneratePage;
