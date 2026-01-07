import { useState } from "react";
import { toast } from "react-toastify"


export function useFile() {
    const [selectedFile, setSelectedFile] = useState("");

    const handleFile = (e) => {
        const file = e.target.files?.[0];
        if(file && file.size > 5 * 1024 * 1024) {
            toast.error("File size should not exceed 5MB");
            return
        }
        const validFile = file?.type.startsWith("image/");
        if(!validFile) {
            toast.error("Please select a valid image file");
            return;
        }
        // convert image file to base64 url string
        const reader = new FileReader();
        if(file) {
            reader.readAsDataURL(file);
            reader.oneerror = () => {
                toast.error("Failed to read file");
            };
            reader.onload = () => {
                setSelectedFile(reader.result);
            };
        }
    };
    return {selectedFile, handleFile, setSelectedFile};
}
