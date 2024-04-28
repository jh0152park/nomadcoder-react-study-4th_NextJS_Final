"use client";

import Input from "@/components/input";
import TextArea from "@/components/text-area";
import LoadingButton from "@/components/loading-button";
import BackButton from "@/components/profile/back-button";
import { PhotoIcon } from "@heroicons/react/24/outline";

import { useState } from "react";

import { UpdateProfile } from "./action";
import { useFormState } from "react-dom";

interface IProps {
    name: string;
    description: string;
}

export default function WriteProfile({ name, description }: IProps) {
    const [preview, setPreview] = useState("");
    const [_, trigger] = useFormState(UpdateProfile, null);

    async function onImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (!event.target.files) return;

        const file = event.target.files[0];

        if (file.size > 4 * 1024 * 1024) {
            alert("Size of image should be less than 4MB");
            return;
        }

        const fileURL = URL.createObjectURL(file);
        setPreview(fileURL);
    }

    return (
        <div className="relative flex flex-col items-start justify-start w-full h-screen p-5 mb-32">
            <div>
                <BackButton />
            </div>

            <span className="absolute text-xl font-bold -translate-x-1/2 left-1/2 top-5">
                Edit Profile
            </span>

            <form action={trigger} className="flex flex-col gap-5 mt-20">
                <div className="flex flex-col items-start justify-start gap-2">
                    <span className="font-semibold">Username</span>
                    <Input name="username" type="text" placeholder={name} />
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                    <span className="font-semibold">Profile Description</span>
                    <TextArea name="description" placeholder={description} />
                </div>
                <div className="flex flex-col gap-2">
                    <span>Profile Photo</span>
                    <label
                        htmlFor="photo"
                        className="flex items-center justify-center bg-center bg-cover border-2 border-dashed rounded-md hover:cursor-pointer aspect-square"
                        style={{
                            backgroundImage: `url(${preview})`,
                        }}
                    >
                        {!preview && <PhotoIcon className="w-20" />}
                    </label>
                    <input
                        id="photo"
                        type="file"
                        name="photo"
                        accept="image/*"
                        className="hidden"
                        onChange={onImageChange}
                    />
                </div>
                <LoadingButton name="Save" />
            </form>
        </div>
    );
}
