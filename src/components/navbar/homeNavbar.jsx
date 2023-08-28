import React, { memo } from "react";
import PlayCircleFilledTwoToneIcon from "@mui/icons-material/PlayCircleFilledTwoTone";
import DriveFolderUploadTwoToneIcon from "@mui/icons-material/DriveFolderUploadTwoTone";
import FullscreenTwoToneIcon from "@mui/icons-material/FullscreenTwoTone";
import FullscreenExitTwoToneIcon from "@mui/icons-material/FullscreenExitTwoTone";

const HomeNavbar = memo(
  ({
    handleSubmit,
    handleFileImport,
    query,
    setQuery,
    setFullScreen,
    fullScreen,
  }) => {
    return (
      <div className="w-[100%] flex pr-5 items-center h-[50px] flex items-center justify-between relative">
        <div className="flex h-[100%] items-center overflow-x-scroll">
          <div className="bg-[#282c34] h-[100%] p-2 pl-4 flex items-center justify-center justify-between w-[150px]">
            <div className="hover:underline w-[100px]">
              <span>Console</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="p-2 text-sm font-medium focus:outline-none rounded-[5px] border border-gray-200 hover:bg-FF6C37 hover:text-blue-700 dark:bg-FF6C37 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-FF6C37 w-[35px] h-[35px] flex justify-center items-center left-[-12px] top-[12px] outline-none mr-2"
            onClick={() => setFullScreen(!fullScreen)}
            aria-label="Full-screen"
          >
            {fullScreen ? (
              <FullscreenExitTwoToneIcon />
            ) : (
              <FullscreenTwoToneIcon />
            )}
          </button>
          <label
            id="file-upload"
            className="mr-2 cursor-pointer rounded-[5px] font-medium text-white bg-[#1E7FD8] border-[0.5px] border-[#014A92] hover:bg-[#1A6EB4] dark:bg-[#1A6EB4] dark:hover:bg-[#1A6EB4]  focus:outline-none px-4 py-[5px] flex items-center justify-center"
            htmlFor="file-input"
          >
            Import <DriveFolderUploadTwoToneIcon />
          </label>
          <input
            id="file-input"
            type="file"
            className="hidden"
            onChange={(e) => handleFileImport(e)}
          />
          <button
            className="text-white hover:bg-[#37B34E] focus:ring-4 font-medium rounded-[5px] text-sm bg-[#37B34E] border-[0.5px] border-[#31783E] dark:bg-[#31783E] dark:hover:bg-[#31783E] hover:bg-[#2EAD44] focus:outline-none px-4 py-[5px] flex items-center justify-center"
            onClick={() => handleSubmit()}
            disabled={query ? false : true}
          >
            Run <PlayCircleFilledTwoToneIcon />
          </button>
        </div>
      </div>
    );
  }
);

export default HomeNavbar;
