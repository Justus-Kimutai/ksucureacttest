// import React, { useRef, useState, ChangeEvent, MouseEvent, useEffect } from "react";
// import ReactCrop, { Crop, makeAspectCrop, centerCrop, convertToPixelCrop } from "react-image-crop";
// import setCanvasPreview from "../cropper/setCanvasPreview";

// const ASPECT_RATIO = 1;
// const MIN_DIMENSION = 150;

// interface ImageCropperProps {
//   closeModal: () => void;
//   updateAvatar: (dataUrl: string) => void;
// }

// const ImageCropper: React.FC<ImageCropperProps> = ({ closeModal, updateAvatar }) => {
//   const imgRef = useRef<HTMLImageElement | null>(null);
//   const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);
//   const [imgSrc, setImgSrc] = useState<string>("");
//   const [crop, setCrop] = useState<Partial<Crop> & { aspect?: number }>({});
//   const [error, setError] = useState<string>("");

//   const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
  
//     const reader = new FileReader();
//     reader.addEventListener("load", (event) => {
//       const result = event.target?.result as string;
//       const imageElement = new Image();
//       imageElement.src = result;
  
//       imageElement.addEventListener("load", (e) => {
//         if (error) setError("");
//         const { naturalWidth, naturalHeight } = e.currentTarget;
//         if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
//           setError("Image must be at least 150 x 150 pixels.");
//           return setImgSrc("");
//         }
//       });
//       setImgSrc(result);
//     });
  
//     reader.readAsDataURL(file);
//   };
  


// const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
//   const imageElement = e.currentTarget;
  
//   if (imageElement instanceof HTMLImageElement) {
//     const { width, height } = imageElement;
//     const cropWidthInPercent = (MIN_DIMENSION / width) * 100;

//     const crop = makeAspectCrop(
//       {
//         unit: "%",
//         width: cropWidthInPercent,
//       },
//       ASPECT_RATIO,
//       width,
//       height
//     );
//     const centeredCrop = centerCrop(crop, width, height);
//     setCrop(centeredCrop);
//   }
// };

// useEffect(() => {
//   if (imgRef.current) {
//     onImageLoad({ currentTarget: imgRef.current } as React.SyntheticEvent<HTMLImageElement, Event>);
//   }
// }, [imgRef.current]);


//   return (
//     <>
//       <label className="block mb-3 w-fit">
//         <span className="sr-only">Choose profile photo</span>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={onSelectFile}
//           className="block w-full text-sm text-slate-500 file:mr-4 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-xs file:bg-gray-700 file:text-sky-300 hover:file:bg-gray-600"
//         />
//       </label>

//       {error && <p className="text-red-400 text-xs">{error}</p>}
//       {imgSrc && (
//         <div className="flex flex-col items-center">
//           <ReactCrop
//             crop={crop}
//             onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
//             circularCrop
//             keepSelection
//             aspect={ASPECT_RATIO}
//             minWidth={MIN_DIMENSION}
//           >
//             <img
//               ref={imgRef}
//               src={imgSrc}
//               alt="Upload"
//               style={{ maxHeight: "70vh" }}
//               onLoad={onImageLoad}
//             />
//           </ReactCrop>

//           <button
//             className="text-white font-mono text-xs py-2 px-4 rounded-2xl mt-4 bg-sky-500 hover:bg-sky-600"
//             onClick={() => {
//               if (imgRef.current && previewCanvasRef.current) {
//                 setCanvasPreview(
//                   imgRef.current, // HTMLImageElement
//                   previewCanvasRef.current, // HTMLCanvasElement
//                   convertToPixelCrop(
//                     crop,
//                     imgRef.current.width,
//                     imgRef.current.height
//                   )
//                 );
//                 const dataUrl = previewCanvasRef.current.toDataURL();
//                 updateAvatar(dataUrl);
//                 closeModal();
//               }
//             }}
//           >
//             Crop Image
//           </button>
//         </div>
//       )}
//       {crop && (
//         <canvas
//           ref={previewCanvasRef}
//           className="mt-4"
//           style={{
//             display: "none",
//             border: "1px solid black",
//             objectFit: "contain",
//             width: 150,
//             height: 150,
//           }}
//         />
//       )}
//     </>
//   );
// };

// export default ImageCropper;
