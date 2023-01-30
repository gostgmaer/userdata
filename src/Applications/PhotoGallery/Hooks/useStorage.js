// // import { projectStorage } from "../../../firebase/config";
// import React, { useEffect, useState } from "react";

// const useStorage = (file) => {
//   const [progress, setprogress] = useState(0);
//   const [errorMsg, seterrorMsg] = useState("");
//   const [Url, setUrl] = useState(null);

//   useEffect(() => {
//     const storageRef = projectStorage.ref(file.name);
//     storageRef.put(file).on(
//       "stage_changed",
//       (snap) => {
//         let percenTage = (snap.byteTransfered / snap.totalBytes) * 100;
//         setprogress(percenTage);
//       },
//       (err) => {
//         seterrorMsg(err);
//       },
//       async () => {
//         const url = await storageRef.getDownloadURL();
//         setUrl(url)
//       }
//     );
//   }, [file]);

//   return  {progress,Url,errorMsg}
// };

// export default useStorage;
