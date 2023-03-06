import React, { use, useEffect, useState } from "react";
import styles from "../styles/appointments.module.css";
import { IoIosArrowBack, IoMdAdd } from "react-icons/io";
import { BsChevronRight } from "react-icons/bs";
import { RiSubtractFill } from "react-icons/ri";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Img from "@/Components/Image/Image";
import { red } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
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
  const router = useRouter();
  const appointmentdoc = () => {
      router.push("/appointment-doc")
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
          <div className="row">
              <div className="col-md-6">
              <p className={styles.app_text}>Choose the Address</p>
              </div>
              <div className="col-md-6 text-end">
                <div className="row">
                  <div className="col-md-6"></div>
                  <div className="col-md-4 col-6 px-md-0">
                    <input className="form-control form-control-sm rounded-pill" placeholder="Search" type="text" />
                  </div>
                  <div className="col-md-2 col-6">
                    <button className="btn w-100 btn-danger btn-sm rounded-pill"><span className={styles.icons_add}> <img className="img-fluid" src="../assets/appointment/+.svg" /> Add</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 px-3">
            <div className="row">
              <div className="col-md-8">
                <p className={styles.app_text_paragrapg}>
                  Dear customer please choose your desired address from where you want to get nearest clinic addresses
                </p>
              </div>
              <div className="col-md-4 text-end">
                
              </div>
            </div>
          </div>
          <div className="col-md-12 px-3 ">
            <hr />
          </div>
          <div className="col-md-12 px-3">
            <div className="row">
              <div className="col-md-8">
              <p className={styles.app_text}>MR THOMAS CLARK</p>
              <p className={styles.app_text_paragrapg}>
                Office 1897, 4th floor F-5 Islamabad, Pakistan (44000) 
                </p>
                <p className={styles.app_text_paragrapg11}>
                <i className="fa fa-exclamation-circle" aria-hidden="true"></i> Dont worry, your information is private and we will not share this info with anyone outside expert
                </p>
              </div>
              <div className="col-md-4 text-end">
              <Checkbox
                {...label}
                defaultChecked
                sx={{
                  color: red[800],
                  '&.Mui-checked': {
                    color: red[600],
                  },
                  '& .MuiSvgIcon-root': { fontSize: 22 }
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
              <div className="col-md-8">
              <p className={styles.app_text}>Office</p>
              <p className={styles.app_text_paragrapg}>
                Office 1897, 4th floor F-5 Islamabad, Pakistan (44000) 
                </p>
                <p className={styles.app_text_paragrapg11}>
                <i className="fa fa-exclamation-circle" aria-hidden="true"></i> Dont worry, your information is private and we will not share this info with anyone outside expert
                </p>
              </div>
              <div className="col-md-4 text-end">
              <Checkbox
                {...label}
                defaultChecked
                sx={{
                  color: red[800],
                  '&.Mui-checked': {
                    color: red[600],
                  },
                  '& .MuiSvgIcon-root': { fontSize: 22 }
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
              <div className="col-md-8">
              <p className={styles.app_text}>Home</p>
              <p className={styles.app_text_paragrapg}>
                Office 1897, 4th floor F-5 Islamabad, Pakistan (44000) 
                </p>
                <p className={styles.app_text_paragrapg11}>
                <i className="fa fa-exclamation-circle" aria-hidden="true"></i> Dont worry, your information is private and we will not share this info with anyone outside expert
                </p>
              </div>
              <div className="col-md-4 text-end">
                <Checkbox
                {...label}
                defaultChecked
                sx={{
                  color: red[800],
                  '&.Mui-checked': {
                    color: red[600],
                  },
                  '& .MuiSvgIcon-root': { fontSize: 22 }
                }}
              />
              </div>
            </div>
          </div>
          <div className="col-md-12 text-end px-3">
            <button onClick={()=>appointmentdoc()} className={styles.background_color_red}>
              Save & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default appointments;
