import React, { Fragment, useState } from "react";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { CloseIcon, VideoIcon } from "../common/Icons";
import Image from "next/image";

const SeeNotonActionModel = () => {
    const [size, setSize] = useState(null);

    const handleOpen = (value) => setSize(value);
    return (
        <div>
            <Fragment>
                <Button className="shadow-none p-0" onClick={() => handleOpen("xl")} variant="gradient">
                    <div className="w-[176px] h-[224px] relative">
                        <Image className="absolute top-0 left-0 z-[-1] " src="/images/see-noton-bg-img.png" width={176} height={244} />
                        {/* <p className=" leading-[32px] pt-[50px] sm:pt-[70px] sm:pb-[90px] sm:pl-[49px] font-Inter text-8xl font-normal text-white">
                            Watch Demo
                        </p> */}
                        {/* <div className="w-[60px] bottom-[30px] cursor-pointer video_btn z-[9999]  sm:left-[-30px] absolute sm:top-[82px] rounded-[50%] h-[60px] bg-white flex justify-center items-center">
                            <VideoIcon />
                        </div> */}
                    </div>
                </Button>
                <Dialog open={size === "xl"} size={size || "xl"} handler={handleOpen}>
                    <DialogBody className="border-none relative p-2" divider>
                        <div className="flex cursor-pointer justify-end absolute -top-6 sm:top-1 right-2 sm:-right-6 w-full" onClick={handleOpen}>
                            <CloseIcon />
                        </div>
                        <video className="w-full" controls>
                            <source src="/video/see-noton-action-video.mp4" type="video/mp4" />
                            {/* <source src="mov_bbb.ogg" type="video/ogg"> */}
                        </video>
                    </DialogBody>
                </Dialog>
            </Fragment>
        </div>
    );
};

export default SeeNotonActionModel;
