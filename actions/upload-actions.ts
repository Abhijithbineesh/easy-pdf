"use server";


export async function generatePdfSummary(uploadResponse:{
    serverData:{
        userId:string;
        file:{
            url:string;
            name:string
        };
    };
}){
    if (!uploadResponse) {
        return {
          success: false,
          message: "File upload failed",
          data: null,
        };
      }

      



}
