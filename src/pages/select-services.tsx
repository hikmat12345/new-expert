import React, { use, useEffect, useState } from "react";
import styles from "../styles/appointments.module.css";
import { IoIosArrowBack, IoMdAdd } from "react-icons/io";
import { BsChevronRight } from "react-icons/bs";
import { RiSubtractFill } from "react-icons/ri";
import Img from "@/Components/Image/Image";
import { useRouter } from "next/router";

function Selectservices() {
  const [counter, setCounter] = useState(0);
  const [button, setButton ] = useState(true);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const router = useRouter();
  const appointmentdoc = () => {
      router.push("/date-time")
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
          <div className="col-md-12 px-3 ">
          <div className={styles.padding_left_new} >
            <span className="badge bg-warning text-white ">50% Off</span>
            </div>
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
                  <b>Micro Areas</b>
                </p>
                <p className={styles.sunspots2}>
                  <b><img src="../assets/appointment/clock.png" className={styles.clock_icon} /> 20 Minutes</b>
                </p>
                <p className={styles.sunspots1}>
                  <b className={styles.text_decoration_overline}>£72</b>  <b className={styles.text_new_price}>£20</b>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 px-3 pt-2">
            <hr />
          </div>
          <div className="col-md-12 px-3">
            <p className={styles.app_text}>Services</p>
          </div>
          <div className="col-md-12 px-3">
            <div className="row">
              <div className="col-md-6 col-10">
                <p className={styles.app_text_paragrapg}>
                  Upper Lips, Navel, Eyebrows, Nostril, Nipples
                </p>
              </div>
              <div className="col-md-6 col-2 text-end">
                <span className={styles.icon_right}>
                  {" "}
                  <BsChevronRight />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.borders_div}>
            <div className="col-md-12 px-3 " >
            <div className="row">
            <div className="col-md-6 m-auto">
            <p className={styles.app_text}>Select Services</p>
            </div>
            <div className="col-md-6 text-end">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-3"></div>
                    <div className="col-md-5">
             <input className="form-control form-control-sm rounded-pill" type="text" placeholder="Search" />
             </div>
                </div>
            </div>
            </div>
            <div className="col-md-12 mt-2 mb-3">
                <div className="row ">
                    { button ?(
                          <div className="col-md-2 col-6" onClick={()=>setButton(!button)}>
                          <div className={styles.text_right_div}>
                              <img className={styles.img_fluid_cross} src="../assets/appointment/cross.png" />
                          </div>
                      <button className={styles.button_background_selected}>
                              Upper Lip 
                          </button>
                          </div>
                    ):(
                        <div className="col-md-2 col-6" onClick={()=>setButton(!button)}>
                        <button className={styles.button_disabled}>
                        Upper Lip 
                        </button>
                        </div>
                        )
                
                    }

                    <div className="col-md-2 col-6">
                    <button className={styles.button_disabled}>
                        Eyebrows
                    </button>
                    </div>
                    <div className="col-md-2 col-6">
                    <button className={styles.button_disabled}>
                        Navel
                    </button>
                    </div>
                    <div className="col-md-2 col-6">
                    <button className={styles.button_disabled}>
                        Nostril
                    </button>
                    </div>
                </div>
            </div>
            <div onClick={()=>appointmentdoc()} className="col-md-12 text-end">
                <button className="btn btn-danger btn-sm bg-red"> Save & Continue </button>
            </div>
            </div>
           
        </div>
      </div>
    </div>
  );
}

export default Selectservices;
