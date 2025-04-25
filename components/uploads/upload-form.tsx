"use client"

import UploadFormInput from "./upload-form-input";


export default function Uploadform(){

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log("Submitted")
        alert("submitted")
        const formData=new FormData(e.currentTarget);
        const file=formData.get('file') as File;
        //validating file
    }
    return(
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
            <UploadFormInput onSubmit={handleSubmit}/>
        </div>
    )
}