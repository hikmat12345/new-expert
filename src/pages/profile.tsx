import React, { useEffect } from "react";
import style from "../styles/stylescss/Profile.module.css";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { HiBadgeCheck } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Dashboard from "@/Components/Layout/Dashboard";
import { useRouter } from "next/dist/client/router";
const Profile_page = () => {
  const router = useRouter();

  function BasicInfo() {
    router.push("/");
    // window.open('/', '_blank');
  }
  // function ContactInfo() {
  //   router.push('/');
  // }
  function Phone() {
    router.push("/Map-location");
    // window.open('/', '_blank');
  }
  function Password() {
    router.push("/Map-location");
    // window.open('/', '_blank');
  }
  function PersonalDocuments() {
    router.push("/Map-location");
    // window.open('/', '_blank');
  }

  const sideMenu: any = [
    {
      link: "/",
      text: "proifle",
      icon: "/assets/icons/mail-icon.svg",
      active: true,
    },
    {
      link: "/",
      text: "Addresses",
      icon: "/assets/icons/mail-icon.svg",
      active: false,
    },
    {
      link: "/",
      text: "Order",
      icon: "/assets/icons/mail-icon.svg",
      active: false,
    },
    {
      link: "/",
      text: "Setting",
      icon: "/assets/icons/mail-icon.svg",
      active: false,
    },
    {
      link: "/",
      text: "Logout",
      icon: "/assets/icons/mail-icon.svg",
      active: false,
    },
  ];
  return (
    <Dashboard sidebar={sideMenu}>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-12">
            {/* ===========card 1=========== */}
            <div className="card p-4">
              <div className={style.section_content}>
                <div>
                  <Image
                    src={"/assets/images/img11.jpg"}
                    alt="profile image"
                    height={100}
                    width={100}
                    style={{ borderRadius: 50, marginRight: 18 }}
                  />
                </div>
                <div>
                  <h3 className={style.heading}>Hi, Muhammad Zeeshan</h3>
                  <p className={style.details}>Personal Account</p>
                  <Link href="" className={style.redtext}>
                    Switch Account
                  </Link>
                </div>
              </div>
            </div>
            {/* ===========card 2=========== */}
            <div
              className="card p-4 mt-3"
              onClick={BasicInfo}
              style={{ cursor: "pointer" }}
            >
              <h3 className={style.basic_info}>Basic Info</h3>
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>First Name</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>Muhammad</p>
                  <span style={{ marginBottom: "19px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
              <hr className="line-color" />
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>Last Name</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>Zeeshan</p>
                  <span style={{ marginBottom: "19px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
              <hr className="line-color" />
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>Gender</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>Male</p>
                  <span style={{ marginBottom: "19px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
              <hr className="line-color" />
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>Date of Birth</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>March 25, 2000</p>
                  <span style={{ marginBottom: "19px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
              <hr className="line-color" />
            </div>
            {/* ===========card 3=========== */}
            {/* <div className="card p-4 mt-3" onClick={ContactInfo} style={{ cursor: 'pointer' }}> */}

            <div className="card p-4 mt-3">
              <h3 className={style.basic_info}>Contact Info</h3>

              {/* <p className={style.right_email}>junaidahmed999@gmail.com</p> */}
              {/* ======row 1========= */}
              <div className={style.row_two}>
                <div className={style.emails}>.</div>
                <div className={style.right_section}>
                  <div className={style.right_elements}>
                    <p className={style.right_email11}>
                      junaidahmed999@gmail.com
                    </p>

                    <span style={{ marginBottom: "19px", color: "#ccd2d8" }}>
                      .
                    </span>
                  </div>
                </div>
              </div>
              {/* ========row 2========== */}

              <div className={style.row_two}>
                <div className={style.emails}>
                  <p>Emails</p>
                </div>
                <div className={style.right_section}>
                  <div className={style.right_elements}>
                    <p className={style.right_email13}>
                      malik.zeeshan7458@gmail.com
                    </p>

                    <span style={{ marginBottom: "19px", color: "#ccd2d8" }}>
                      <IoIosArrowForward />
                    </span>
                  </div>
                </div>
              </div>
              {/* =========row 3========== */}
              <div className={style.row_two}>
                <div className={style.emails}></div>
                <div className={style.right_section}>
                  <div className={style.right_elements}>
                    <div className={style.badge}>
                      <span
                        style={{
                          fontSize: "16px",
                          color: "#5fdf5a",
                          marginRight: "3px",
                          paddingBottom: "15px",
                        }}
                      >
                        <HiBadgeCheck />
                        verified
                      </span>
                                
                    </div>
                    <p className={style.right_email12}>
                      muhammad.zeeshan123@gmail.com
                    </p>

                    <span
                      style={{ marginBottom: "19px", color: "#ccd2d8" }}
                    ></span>
                  </div>
                </div>
              </div>

              <hr className="line-color" />
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>Phone</p>
                </div>
                <div
                  className={style.style_left_text}
                  onClick={Phone}
                  style={{ cursor: "pointer" }}
                >
                  <p className={style.right_text}>03035579649</p>
                  <span style={{ marginBottom: "19px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
            </div>
            {/* ===========card 4=========== */}
            <div
              className="card p-4 mt-3"
              onClick={Password}
              style={{ cursor: "pointer" }}
            >
              <h3 className={style.basic_info}>Password</h3>

              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>Phone</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>
                    <span style={{ marginRight: "-3px" }}>
                      <GoPrimitiveDot />
                    </span>
                    <span style={{ marginRight: "-3px" }}>
                      <GoPrimitiveDot />
                    </span>
                    <span style={{ marginRight: "-3px" }}>
                      <GoPrimitiveDot />
                    </span>
                    <span style={{ marginRight: "-3px" }}>
                      <GoPrimitiveDot />
                    </span>
                    <span style={{ marginRight: "-3px" }}>
                      <GoPrimitiveDot />
                    </span>
                    <span style={{ marginRight: "-3px" }}>
                      <GoPrimitiveDot />
                    </span>
                    <span style={{ marginRight: "-3px" }}>
                      <GoPrimitiveDot />
                    </span>
                    <span style={{ marginRight: "-3px" }}>
                      <GoPrimitiveDot />
                    </span>
                  </p>
                  <span style={{ marginBottom: "19px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
            </div>
            {/* ===========card 5=========== */}
            <div
              className="card p-4 mt-3"
              onClick={PersonalDocuments}
              style={{ cursor: "pointer" }}
            >
              <h3 className={style.basic_info}>Personal Documents</h3>
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>National Identity Card</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>Muhammad</p>
                  <span style={{ marginBottom: "19px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
              <hr className="line-color" />
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>Educational documents</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>Zeeshan</p>
                  <span style={{ marginBottom: "19px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
              <hr className="line-color" />
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>Medical documents</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>Male</p>
                  <span style={{ marginBottom: "19px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Profile_page;
