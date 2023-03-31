import React, { use, useEffect, useState } from "react";
import styles from "../styles/appointments.module.css";
import { IoIosArrowBack, IoMdAdd } from "react-icons/io";
import { BsChevronRight } from "react-icons/bs";
import { RiSubtractFill } from "react-icons/ri";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Img from "@/Components/Image/Image";
import { red } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import { useRouter } from "next/router";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






function notes() {
  const [counter, setCounter] = useState(0);
  const [duration, setDuration] = useState(0);
  const [file, setFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [videoFile, setVideoFile] = useState(null);
  const [audio, setAudio] = useState(null);





  const [note, setnote] = useState<any>({
    "bookingId" :112,
    "userId" :11,
    "notes":"This is testing view ",
    "isEnable":true,
    "noteType" :"customer",
    "img" : [],
    "audio" : [],
    "video" :[]
  })
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
  
    
    if (file) {
      const reader = new FileReader();
      reader.onload = (event:any) => {
        setImageSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

//   if (isSuccess) {
//     Swal.fire({
//       icon: 'success',
//       title: 'Uploaded Successfully',
//       text: 'Press okay to continue!',
//     });
//   }

  // material ui checkboxes 
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const router = useRouter();


// api hit code notes
  const appointmentdoc = () => {
    console.log("testing note data", note);
    fetch("http://172.187.153.193:8094/notes/pb/notes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
    }).then((res: any) => res.json()).then((response: any) => {
      console.log("------------- note saved respnose ---------------");
      console.log(response);
      // toast.success(response.message);
      alert(response.message);
      setTimeout(() => {
        // router.push("/select-services")
      }, 4000);
      console.log("------------- respnose ---------------");
    }).catch(err => console.log(err))
  }


  ///// loading
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // simulate an API call or other time-consuming operation
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
    <div className={styles.loading}>
      <div className={styles.loading2}>
      <img src="../assets/appointment/loaderr.gif" className={styles.loader_width} />
      </div>
      </div>);
  }

  /// video check perform + video upload code -----------------------------------------------------------------------------------------------------------
    const handleDurationChange = (event: any, file: any) => {
    console.log("handle duration event called .........");
    const video = event.target;
    setDuration(video.duration);
    console.log("duration", video.duration);

    if(video.duration >= 30) alert("too long video file ...");
    if(true || video.duration <= 30) {

      
    let fd = new FormData();
    fd.append("videoFile", file);

    fetch("http://172.187.153.193:8094/notes/pb/videos/", {
      method: "POST",
      body: fd
    }).then((res: any) => res.json()).then((response: any) => {
      console.log("------------- video file respnose ---------------");
      console.log(response);
      setnote({...note, img:[response.result]})
    //   setIsSuccess(true);
      console.log("------------- respnose ---------------");
    }).catch(
        
        err => alert(err)
        
    )
    
    }
  }

  const handleFileUpload = (event: any) => {
    console.log("handle file upload called ......");
    const file = event.target.files[0];
    setVideoFile(file)
    const video = document.createElement('video');

    // Set up event listener to get the duration after the video has loaded
    video.addEventListener('loadedmetadata', function(event) {
      handleDurationChange(event, file);
    });

    // Load the video file into the video element
    video.src = URL.createObjectURL(file);
  }




  // image upload code -----------------------------------------------------------------------------------------------------------
  const handleImageFileChange = (event: any) => {
    console.log(event.target.files);
    let image = event.target.files[0];
    setFile(image)
    let fd = new FormData();
    fd.append("imageFile", image);

    fetch("http://172.187.153.193:8094/notes/pb/images/", {
      method: "POST",
      body: fd
    }).then(res => res.json()).then((response: any) => {
      console.log("------------- respnose ---------------");
      setnote({...note, img: [response.result || "thisisjustdmyimageurl"]})
    //   setIsSuccess(true);
      console.log("------------- respnose ---------------");
    }).catch(err => console.log(err))

  }



// audio audio code -----------------------------------------------------------------------------------------------------------
    const handleAudioFileChange = (event: any) => {
      console.log(event.target.files);
      let audio = event.target.files[0];
      setAudio(audio);
      let fd = new FormData();
      fd.append("audioFile", audio);
  
      fetch("http://172.187.153.193:8094/notes/pb/audios/", {
        method: "POST",
        body: fd
      }).then(res => res.json()).then((response: any) => {
        console.log("------------- respnose ---------------");
        setnote({...note, audio: [response.result || "thisisjustdmyimageurl"]})
        // setIsSuccess(true);
        console.log("------------- respnose ---------------");
      }).catch(err => console.log(err))
  
    }
  



  return (
    <div className="col-md-12 ">

      <div className="container px-md-5 pt-2">
        <div className="col-md-12">
          <span className={styles.text_color}>
            <IoIosArrowBack />
            Back
          </span>
        </div>
        {/* main code appointment  */}
        <div className={styles.borders_div}>
          <div className="col-md-12 px-3 pt-2">
            <div className={styles.flex_image}>
              <div className={styles.img_width}>
                <img
                  src="../assets/appointment/woman.png"
                  alt="image_crashed"
                />
              </div>
              &nbsp;&nbsp;
              <div className={styles.margin_autoo}>
                <p className={styles.sunspots1}>
                  <b>Sunspots Freckle Removal</b>
                </p>
                <p className={styles.sunspots2}>
                  <b><img src="../assets/appointment/clock.png" className={styles.clock_icon} /> 3 Sessions</b>
                </p>
                <p className={styles.sunspots1}>
                  <b>£72</b>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 px-3 pt-2">
            <hr />
          </div>
          <div className="col-md-12 px-3">
            <p className={styles.app_text}>Appointment</p>
          </div>
          <div className="col-md-12 px-3">
            <div className="row">
              <div className="col-md-6">
                <p className={styles.app_text_paragrapg}>
                  26th December 2023 at 11:23 AM
                </p>
              </div>
              <div className="col-md-6 text-end">
                <span className={styles.icon_right}>
                  {" "}
                  <img src="../assets/appointment/right.png" className={styles.right_icon} />
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-12 px-3 ">
            <hr />
          </div>
          <div className="col-md-12 px-3">
            <p className={styles.app_text}>Sessions</p>
          </div>
          <div className="col-md-12 px-3">
            <div className="row">
              <div className="col-md-6">
                <p className={styles.app_text_paragrapg}>
                Sessions
                </p>
              </div>
              <div className="col-md-6 text-end">
                <span className={styles.icon_right}>
                  {" "}
                  <img src="../assets/appointment/right.png" className={styles.right_icon} />
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-12 px-3 ">
            <hr />
          </div>
          <div className="col-md-12 px-3">
            <p className={styles.app_text}>Address</p>
          </div>
          <div className="col-md-12 px-3">
            <div className="row">
              <div className="col-md-6">
                <p className={styles.app_text_paragrapg}>
                Home
                </p>
              </div>
              <div className="col-md-6 text-end">
                <span className={styles.icon_right}>
                  {" "}
                  <img src="../assets/appointment/right.png" className={styles.right_icon} />
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-12 px-3 ">
            <hr />
          </div>
          <div className="col-md-12 px-3">
          <div className="row">
              <div className="col-md-12">
              <p className={styles.app_text}>Service Sttributes</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 px-3">
              <div className="col-md-12">
                <p className={styles.app_text_paragrapg}>
                  How long have you had these spots?
                </p>
              </div>
          </div>
          <div className="col-md-12 px-3 ">
            <hr />
          </div>
          <div className="col-md-12 px-3">
            <div className="col-md-12 ">
                <p className={styles.app_text_paragrapg}>
                 <b>Extra Note</b>
                </p>
            </div>
            <div className="col-md-12 pt-2">
                <textarea className="form-control" placeholder="Type Answer Here..."  onChange={(e) => setnote({...note, notes: e.target.value})} ></textarea>
            </div>
             {/* Upload Image code  */}
            <div className="col-md-12 pt-3 ">
                <p className={styles.app_text_paragrapg}>
                 <b>Photo</b>
                </p>
            </div>
            <div className="col-md-12 pt-3">
                <div className="row">
                    <div className="col-md-2 text-center">
                    <label className="display_file_upload1">
                 <span className="icon_red_upload_cloud">  
                  <AiOutlineCloudUpload /></span> <br/>
                      Upload Image
                    <input type="file" className={styles.background_color_red1} placeholder="Upload Image" multiple accept="image/*" onChange={e => handleImageFileChange(e)}  />
            
                    </label>
                    </div>
                    <div className="col-md-2 ">
                     {imageSrc && <img src={imageSrc} className="img-fluid img_width_setting" alt="Uploaded image" />}
                            
                    </div>
                </div>
            </div>
            {/* Upload video code  */}
            <div className="col-md-12 pt-3 ">
                <p className={styles.app_text_paragrapg}>
                 <b>Video</b>
                </p>
            </div>
            <div className="col-md-12 pt-3">
                <div className="row">
                    <div className="col-md-2 text-center">
                    <label className="display_file_upload1">
                 <span className="icon_red_upload_cloud">  
                  <AiOutlineCloudUpload /></span> <br/>
                      Upload Video
                    <input type="file" className={styles.background_color_red1} placeholder="Upload Videos" multiple accept="video/*" onChange={e => handleFileUpload(e)}  />
            
                    </label>
                    </div>
                    <div className="col-md-2 ">
                    {videoFile && (
                            <video width="320" height="240" controls>
                            <source src={URL.createObjectURL(videoFile)} type={videoFile.type} />
                            </video>
                        )}
                            
                    </div>
                </div>
            </div>
            <div className="col-md-12 pt-3">
                <div className="row">
                    <div className="col-md-6">
                    <p className={styles.app_text_paragrapg}>
                 <b>Voice</b>
                </p>
                    </div>
                    <div className="col-md-6 justify_con">
                    <label className="display_file_upload">
                      Upload Audio
                    <input type="file" className={styles.background_color_red1} placeholder="Upload Audio" onChange={e => handleAudioFileChange(e)}  accept="audio/*" />
                    </label>
                    </div>
                </div>
                <div className="col-md-12 pt-3">
                 {audio && (
                    <audio  className="audio_setting" controls>
                    <source src={URL.createObjectURL(audio)} type="audio/mp3" />
                    </audio>
                )}
                </div>
            </div>
            
          </div>
          <div className="col-md-12 text-end px-3 pt-2">
            <div className="row">
                <div className="col-md-6 text-start">
                  {/* <div className={styles.display_vertical}>
                    <label className="display_file_upload">
                      Upload Video
                    <input type="file" className={styles.background_color_red1} placeholder="Upload Videos" accept="video/*" onChange={(e)=>handleFileUpload(e)}  />
            
                    </label>
                    &nbsp;&nbsp;&nbsp;
                    
                    <label className="display_file_upload">
                      Upload Image
                    <input type="file" className={styles.background_color_red1} placeholder="Upload Images" onChange={e => handleImageFileChange(e)}  accept="image/*" />
          
                    </label>
                    &nbsp;&nbsp;&nbsp;
                    <label className="display_file_upload">
                      Upload Audio
                    <input type="file" className={styles.background_color_red1} placeholder="Upload Audio" onChange={e => handleAudioFileChange(e)}  accept="audio/*" />
                    </label>
                    </div> */}
                </div>
                <div className="col-md-6">
                <button onClick={()=>appointmentdoc()} className={styles.background_color_red}>
              Save & Continue
            </button>
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default notes;
