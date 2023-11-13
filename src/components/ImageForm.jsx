// // import React from 'react'
// import PropTypes from "prop-types";

// export default function ImageForm(props) {
//   const handleDrag = props.handleDrag()

//   return (
//     <form
//           // id="form-file-upload"
//           className="h-[70vh] w-[80%] text-center relative mx-auto mt-10"
//           onDragEnter={handleDrag}
//           onSubmit={(e) => e.preventDefault()}
//         >
//           <input
//             ref={inputRef}
//             type="file"
//             // id="input-file-upload"
//             className="hidden"
//             multiple={true}
//             onChange={handleChange}
//           />
//           <label
//             // id="label-file-upload"
//             htmlFor="input-file-upload"
//             className={`h-[100%] flex items-center justify-center border-2 rounded-sm border-dashed border-[#cbd5e1] bg-[#f8fafc] ${
//               dragActive ? "drag-active" : ""
//             }`}
//             // className={dragActive ? "drag-active" : ""}
//           >
//             <div>
//               <p>Drag and drop your file here or</p>
//               <button
//                 // className="upload-button"
//                 className="cursor-pointer p-1 text-base bg-transparent underline hover:text-primary-color"
//                 onClick={onButtonClick}
//                 disabled={isLoading}
//               >
//                 Upload a file
//               </button>
//             </div>
//           </label>
//           {dragActive && (
//             <div
//               // id="drag-file-element"
//               onDragEnter={handleDrag}
//               onDragLeave={handleDrag}
//               onDragOver={handleDrag}
//               onDrop={handleDrop}
//               className="absolute top-0 right-0 bottom-0 left-0 flex w-full h-full bg-primary-color rounded-md text-white items-center justify-center opacity-90"
//             >
//               <p>Drop your file here!</p>
//             </div>
//           )}
//         </form>
//   )
// }


// ImageForm.propTypes = {
//   handleDrag: PropTypes.func,
//   handleDrop: PropTypes.func,
//   onButtonClick: PropTypes.func,
//   handleDrag: PropTypes.func,
// };

