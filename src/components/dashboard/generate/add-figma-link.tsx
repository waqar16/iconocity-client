import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type AddLinksProps = {
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  addedLink: string | null;
  setAddedLink: React.Dispatch<React.SetStateAction<string | null>>;
  uploadedFile: File | null;
};

const AddFigmaLink: React.FC<AddLinksProps> = ({
  url,
  setUrl,
  addedLink,
  setAddedLink,
  uploadedFile,
}) => {
  //add link
  const addLink = () => {
    if (url) {
      setAddedLink(url);
      setUrl("");
    }
  };

  return (
    <>
      {/* Add link tab */}
      <div className="flex gap-4 items-center bg-link-added-gradient border border-[#32344A] rounded-lg mx-6 py-1 2xl:py-2 px-5">
        <Input
          type="url"
          placeholder="Add image/figma URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={!!uploadedFile}
          className="placeholder:text-[#7C7F99] border-none bg-transparent px-0"
        />
        <Button
          onClick={addLink}
          disabled={!url}
          className="text-base bg-transparent hover:bg-transparent px-0"
        >
          Upload
        </Button>
      </div>

      {/* Display the added link */}
      {addedLink && addedLink.length > 0 && (
        <div className="flex flex-col gap-3 bg-link-added-gradient border border-[#32344A] rounded-lg mt-4 mx-6  p-3">
          <div className="flex items-start justify-between gap-3">
            <p className="scrollbar-hide w-[85%] text-[10px] text-blue-400 overflow-auto">
              {addedLink}
            </p>
            <Button
              onClick={() => setAddedLink(null)}
              className="text-sm text-red-400 px-0 bg-transparent hover:bg-transparent h-0"
            >
              <X className="w-4 h-auto text-white hover:scale-125" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddFigmaLink;
