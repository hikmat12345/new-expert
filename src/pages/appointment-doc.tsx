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
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function appointments() {
  const [counter, setCounter] = useState(0);
  const [duration, setDuration] = useState(0);



  const [note, setnote] = useState<any>({
    "bookingId" :112,
    "userId" :11,
    "notes":"This is testing view ",
    "isEnable":true,
    "noteType" :"customer",
    "img" : ["https://thumbs.dreamstime.com/b/blurry-lights-background-falling-snow-abstract-colorful-winter-bg-blurry-lights-background-falling-snow-abstract-137052111.jpg"],
    "audio" : [],
    "video" :[]
  })
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };


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


// api hit code
  const appointmentdoc = () => {
    console.log("testing note data", note);
    fetch("http://172.187.153.193:8094/api/notes/", {
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

  /// video check perform + video upload code
    const handleDurationChange = (event: any, file: any) => {
    console.log("handle duration event called .........");
    const video = event.target;
    setDuration(video.duration);
    console.log("duration", video.duration);

    if(video.duration >= 30) alert("too long video file ...");
    if(true || video.duration <= 30) {

      
    let fd = new FormData();
    fd.append("videoFile", file);

    fetch("http://172.187.153.193:8094/api/videos/", {
      method: "POST",
      body: fd
    }).then((res: any) => res.json()).then((response: any) => {
      console.log("------------- video file respnose ---------------");
      console.log(response);
      setnote({...note, img:[response.result]})
      console.log("------------- respnose ---------------");
    }).catch(err => console.log(err))
    
    }
  }

  const handleFileUpload = (event: any) => {
    console.log("handle file upload called ......");
    const file = event.target.files[0];
    const video = document.createElement('video');

    // Set up event listener to get the duration after the video has loaded
    video.addEventListener('loadedmetadata', function(event) {
      handleDurationChange(event, file);
    });

    // Load the video file into the video element
    video.src = URL.createObjectURL(file);
  }




  // image upload code 
  const handleImageFileChange = (event: any) => {
    console.log(event.target.files);
    let image = event.target.files[0];

    let fd = new FormData();
    fd.append("imageFile", image);

    fetch("http://172.187.153.193:8094/api/images/", {
      method: "POST",
      body: fd
    }).then(res => res.json()).then((response: any) => {
      console.log("------------- respnose ---------------");
      setnote({...note, img: [response.result || "thisisjustdmyimageurl"]})
      console.log("------------- respnose ---------------");
    }).catch(err => console.log(err))

  }




  return (
    <div className="col-md-12 ">
      {/* <ToastContainer /> */}
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
              <div className="col-md-12 pt-2">
                <input className="form-control" placeholder="Type Answer Here..." type="text" />
              </div>
              <div className="col-md-12 pt-2">
                <p className={styles.app_text_paragrapg}>
                 What part of your body is effected?
                </p>
              </div>
              <div className="col-md-12 pt-2">
                <input className="form-control" placeholder="Type Answer Here..." type="text" />
              </div>
          </div>
          <div className="col-md-12 px-3 ">
            <hr />
          </div>
          <div className="col-md-12 px-3">
           <div className="row">
            <div className="col-md-6">
            <p className={styles.app_text_paragrapg}>
                 Is skin around them dry or flaky?
                </p>
            </div>
            <div className="col-md-6 text-end"> 
            <label className={styles.yes_radio}>Yes</label><Radio
                {...controlProps('e')}
                sx={{
                    color: red[800],
                    '&.Mui-checked': {
                    color: red[600],
                    },
                    '& .MuiSvgIcon-root': {
                        fontSize: 18,
                      },
                }}
                />&nbsp;&nbsp;&nbsp;
                    <label className={styles.yes_radio}>No</label><Radio
                {...controlProps('e')}
                sx={{
                    color: red[800],
                    '&.Mui-checked': {
                    color: red[600],
                    },
                    '& .MuiSvgIcon-root': {
                        fontSize: 18,
                      },
                }}
                />
            </div>
           </div>
          </div>
          <div className="col-md-12 px-3 ">
            <hr />
          </div>
          <div className="col-md-12 px-3">
           <div className="row">
            <div className="col-md-6">
            <p className={styles.app_text_paragrapg}>
                 Does anyone in your family have these kind of spots?
                </p>
            </div>
            <div className="col-md-6 text-end"> 
            <label className={styles.yes_radio}>Yes</label><Radio
                {...controlProps('e')}
                sx={{
                    color: red[800],
                    '&.Mui-checked': {
                    color: red[600],
                    },
                    '& .MuiSvgIcon-root': {
                        fontSize: 18,
                      },
                }}
                />&nbsp;&nbsp;&nbsp;
                    <label className={styles.yes_radio}>No</label><Radio
                {...controlProps('e')}
                sx={{
                    color: red[800],
                    '&.Mui-checked': {
                    color: red[600],
                    },
                    '& .MuiSvgIcon-root': {
                        fontSize: 18,
                      },
                }}
                />
            </div>
           </div>
          </div>
          <div className="col-md-12 px-3 ">
            <hr />
          </div>
          <div className="col-md-12 px-3">
           <div className="row">
            <div className="col-md-6">
            <p className={styles.app_text_paragrapg}>
                 Have they gotten worse overtime?
                </p>
            </div>
            <div className="col-md-6 text-end"> 
            <label className={styles.yes_radio}>Yes</label><Radio
                {...controlProps('e')}
                sx={{
                    color: red[800],
                    '&.Mui-checked': {
                    color: red[600],
                    },
                    '& .MuiSvgIcon-root': {
                        fontSize: 18,
                      },
                }}
                />&nbsp;&nbsp;&nbsp;
                    <label className={styles.yes_radio}>No</label><Radio
                {...controlProps('e')}
                sx={{
                    color: red[800],
                    '&.Mui-checked': {
                    color: red[600],
                    },
                    '& .MuiSvgIcon-root': {
                        fontSize: 18,
                      },
                }}
                />
            </div>
           </div>
          </div>
          <div className="col-md-12 px-3 ">
            <hr />
          </div>
          <div className="col-md-12 px-3">
            <div className="col-md-12 ">
                <p className={styles.app_text_paragrapg}>
                 Extra Note
                </p>
            </div>
            <div className="col-md-12 pt-2">
                <input className="form-control" placeholder="Type Answer Here..." type="text" onChange={(e) => setnote({...note, notes: e.target.value})} />
            </div>
          </div>
          <div className="col-md-12 text-end px-3 pt-2">
            <div className="row">
                <div className="col-md-6 text-start">
                  <div className={styles.display_vertical}>
                    <label className="display_file_upload">
                      Upload Video
                    <input type="file" className={styles.background_color_red1} placeholder="Upload Videos" accept="video/*" onChange={(e)=>handleFileUpload(e)}  />
                    {/* <img src="../assets/appointment/video.png" className={styles.video_icon} />   */}
            
                    </label>
                    &nbsp;&nbsp;&nbsp;
                    
                    <label className="display_file_upload">
                      Upload Image
                    <input type="file" className={styles.background_color_red1} placeholder="Upload Images" onChange={e => handleImageFileChange(e)}  accept="image/*" />
                    {/* <img src="../assets/appointment/picture.png" className={styles.video_icon} />   */}
          
                    </label>
                    </div>
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

export default appointments;
