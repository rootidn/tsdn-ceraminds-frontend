// https://www.codemzy.com/blog/react-drag-drop-file-upload
import React, { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
// import { useNavigate } from "react-router-dom";
// import ConfirmationWindow from "../components/ConfirmationWindow";

export default function DataChecker() {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);

  // data
  const [fileData, setFileData] = useState();

  // page active section
  const [isForm, setIsForm] = useState(true);
  const [isResult, setIsResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmation, setIsConfirmation] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // const navigate = useNavigate();

  // ref
  const inputRef = React.useRef(null);

  const dummyJSON = {
    data: {
      keterangan: {
        hasil_ocr: {
          found: true,
          text_smilar_data_pribadi: [],
        },
      },
      lokasi: "vite.svg",
      nama_file: "vite.svg",
    },
    message: "gambar berhasil diupload",
    status: "ok",
  };

  // upload image ke serve
  const uploadImage = function (e) {
    setIsForm(false);
    setIsLoading(true);

    // TODO: upload image
    // upload/post image ke server (image ada di variable 'fileData')
    // return : mengembalikan data json berisi path image di server, bool ada tidaknya data pribadi, dll
    return new Promise(
      // dummy data: return true/false
      (resolve) => {
        setTimeout(() => {
          console.log(e);
          setFileData(URL.createObjectURL(e[0]));
          setIsLoading(false);
          resolve(dummyJSON);
        }, 3000);
      }
    );
  };

  const handleData = async function (e) {
    uploadImage(e)
      .then((response) => {
        console.log(response);
        if (response.data.keterangan.hasil_ocr.found) {
          // tampilkan confirmation window
          setIsConfirmation(true);
        } else {
          // tampilkan gambar (gambar pke yg disimpen di client aja)
          setIsForm(false);
          setIsResult(true);
        }
      })
      .catch(() => {
        setErrorMessage("Unable to fetch data");
        setIsLoading(false);
        console.log(errorMessage);
      });
  };

  // user gak jadi upload: langsung apus aja datanya di server
  const cancelUpload = () => {
    // TODO: hapus data diserver berdasarkan variable 'fileData'
    // here...
    
    setFileData(null)
    setIsConfirmation(false);
    setIsForm(true)
  }

  // user mau menutupi data pribadinya pada gambar yang telah diupload
  const getCoverUpData = () => {
    // TODO: 
    // ambil data gambar yang telah ditutupi
    // simpan gambar ke variable 'fileData'
    
    // tampilkan data
    setIsConfirmation(false);
    setIsResult(true)
  }
  
  // reset ui
  const handleReset = () => {
    setIsResult(false);
    setIsForm(true);
    setFileData(null);
  };


  // Drag N Drop
  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleData(e.dataTransfer.files);
    }
  };
  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleData(e.target.files);
    }
  };
  // triggers the input when the button is clicked
  const onButtonClick = (e) => {
    inputRef.current.click();
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleData(e.target.files);
    }
  };

  return (
    <>
      <form
        // id="form-file-upload"
        className={`h-[70vh] w-[80%] text-center relative mx-auto mt-10 ${
          isForm ? "visible" : "hidden"
        }`}
        onDragEnter={handleDrag}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          id="input-file-upload"
          className="hidden"
          multiple={true}
          onChange={handleChange}
        />
        <label
          // id="label-file-upload"
          htmlFor="input-file-upload"
          className={`h-[100%] flex items-center justify-center border-2 rounded-sm border-dashed border-[#cbd5e1] bg-[#f8fafc] ${
            dragActive ? "drag-active" : ""
          }`}
          // className={dragActive ? "drag-active" : ""}
        >
          <div>
            <p>Drag and drop your file here or</p>
            <button
              // className="upload-button"
              className="cursor-pointer p-1 text-base bg-transparent underline hover:text-primary-color"
              onClick={onButtonClick}
              disabled={isLoading}
            >
              Upload a file
            </button>
          </div>
        </label>
        {dragActive && (
          <div
            // id="drag-file-element"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className="absolute top-0 right-0 bottom-0 left-0 flex w-full h-full bg-primary-color rounded-md text-white items-center justify-center opacity-90"
          >
            <p>Drop your file here!</p>
          </div>
        )}
      </form>
      {/* loading spinner */}
      <LoadingSpinner isShow={isLoading} />

      {/* confirmation page */}
      <div
        className={`flex flex-col h-[100vh] m-auto justify-center items-center bg-[#b3b3b380] absolute top-0 left-0 right-0 z-10 ${
          isConfirmation ? "visible" : "hidden"
        }`}
      >
        <div className="w-[80vh] bg-white rounded-xl p-6 relative">
          <h2 className="mb-2 font-bold text-lg">Confirmation</h2>
          <p className="text-sm mb-4">
            This image may contain confidential data, do you want to continue?
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row flex-1 gap-3">
              <button className="flex-1 p-5 bg-red-300 rounded-lg" onClick={() => setIsResult(true)}>
                Continue
              </button>
              <button
                className="flex-1 p-5 bg-neutral-300 rounded-lg"
                onClick={() => {
                  cancelUpload()
                }}
              >
                Cancel
              </button>
            </div>
            <button className="flex-1 p-5 bg-primary-color rounded-lg text-white" onClick={() => getCoverUpData()}>
              Cover up the data
            </button>
          </div>
          <div className="absolute top-0 right-0 p-2 text-sm rounded-bl-lg rounded-tr-xl bg-primary-color text-white opacity-80">
            <p>Ceraform</p>
          </div>
        </div>
      </div>

      {/* results */}
      <div
        className={`flex flex-col h-[100vh] m-auto justify-center items-center bg-white absolute top-0 left-0 right-0 z-10 ${
          isResult ? "visible" : "hidden"
        }`}
      >
        <div className="h-[70vh] w-[80%] flex flex-col text-center relative mx-auto justify-center border-2 rounded-sm border-dashed border-[#cbd5e1] bg-[#f8fafc20]">
          <img
            src={fileData}
            className="h-[80%] rounded-sm mx-auto object-contain"
          />
          <div className="">
            <button
              className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
              onClick={handleReset}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
