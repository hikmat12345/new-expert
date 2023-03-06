import React, { use, useEffect, useState } from "react";
import styles from "../styles/appointments.module.css";
import { IoIosArrowBack, IoMdAdd } from "react-icons/io";
import { BsChevronRight } from "react-icons/bs";
import { RiSubtractFill } from "react-icons/ri";
import Img from "@/Components/Image/Image";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

function Datetime() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  
  const defaultValue = {
    year: 2019,
    month: 10,
    day: 5,
  };
  

  const [selectedDay, setSelectedDay] = useState(defaultValue);
  console.log(selectedDay)
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
                    <b>Spots Freckle Removal</b>
                  </p>
                  <p className={styles.sunspots2}>
                    <b><img src="../assets/appointment/clock.png" className={styles.clock_icon} /> 40 Minutes</b>
                  </p>
                  <p className={styles.sunspots1}>
                    <b className={styles.text_new_price}>£72</b>
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
                    {/* 26th December 2023 at 11:23 AM */}
                    {selectedDay.day}/{selectedDay.month}/{selectedDay.year}
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
            <div>
            </div>
            <div className="col-md-12 px-3 pt-3 pb-2">
            <div className="row">
            <div className="col-md-4">
            <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            colorPrimary="#EC1E27" // added this
            colorPrimaryLight="##EC1E27"
            calendarClassName={styles.responsive_calendar}
            shouldHighlightWeekends
            />
            </div>
            <div className="col-md-6">
                <div className="col-md-12">
                    <div className={styles.margin_top_calender_dates}>
                    <span><button className={styles.button_background_light}> 07:00 Am </button></span>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Datetime;
