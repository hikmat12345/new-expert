import React, {  useEffect, useState } from "react";
import styles from "../styles/appointments.module.css";
import { IoIosArrowBack, IoMdAdd } from "react-icons/io";
import { BsChevronRight } from "react-icons/bs";
import { RiSubtractFill } from "react-icons/ri";
import Img from "@/Components/Image/Image";
import { useRouter } from "next/router";

function appointments() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  
  const router = useRouter();
  const appointmentsession = () => {
      router.push("/appointment-sessions")
  }

  ///// Loading
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
                <p className={styles.sunspots}>
                  <b>Sunspots Freckle Removal</b>
                </p>
                <p className={styles.sunspots}>
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
                  <BsChevronRight />
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-12 px-3 ">
            <hr />
          </div>
          <div className="col-md-12 px-3">
            <p className={styles.app_text}>Choose the Sessions</p>
          </div>
          <div className="col-md-12 px-3">
            <div className="row">
              <div className="col-md-6">
                <p className={styles.app_text_paragrapg}>
                  Dear customer please choose the sessions to continue the
                  booking process
                </p>
              </div>
              <div className="col-md-6 text-end">
                <div className="col-md-12">
                  <div className={styles.main_flex}>
                    <button
                      onClick={() => decrement()}
                      className={styles.button_counter}
                    >
                      <RiSubtractFill />
                    </button>
                    <p className={styles.counter_value}>{counter}</p>
                    <button
                      onClick={() => increment()}
                      className={styles.button_counter}
                    >
                      <IoMdAdd />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 text-end px-3">
            <button onClick={()=>appointmentsession()} className={styles.background_color_red}>
              Save & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default appointments;
