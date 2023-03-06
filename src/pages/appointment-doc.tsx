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

function appointments() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
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
  const appointmentdoc = () => {
      router.push("/select-services")
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
                <input className="form-control" placeholder="Type Answer Here..." type="text" />
              </div>
          </div>
          <div className="col-md-12 text-end px-3 pt-2">
            <div className="row">
                <div className="col-md-6 text-start">
                    <span>
                    <button className={styles.background_color_red1}>
                    <img src="../assets/appointment/video.png" className={styles.video_icon} />  Upload Videos
            </button>
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <span>
                    <button className={styles.background_color_red1}>
                    <img src="../assets/appointment/picture.png" className={styles.video_icon} />  Upload Images
            </button>
                    </span>
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
