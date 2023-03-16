import React from "react";
import img1 from "../public/assets/images/img7.png";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "../../styles/stylescss/Choose-services.module.css";
const Chooseservices = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-3">
            <div className="card card-border">side bar</div>
          </div>
          <div className="col-md-9">
            {/* ===========create addres ssection============= */}
            <div className="card p-3">
              <div className="row d-flex justify-content-between">
                <div className="col-md-9">
                  <h4 className="create-address">Manage Users</h4>
                  <p className="address-detail">
                    Don't worry, your information is private and we will not
                    share this info with anyone outside Expert!
                  </p>
                  <a href="" className="Learn-more">
                    Add New User
                    <AiOutlineRight />
                  </a>
                </div>
                <div className="col-md-3">
                  <Image
                    src={img1}
                    height={100}
                    width={200}
                    alt="create account"
                    className="rounded-circle mx-auto d-block "
                  />
                </div>
              </div>
            </div>

            {/* =========choose services section end============= */}
            <div className="card p-3 mt-4">
              <div className={styles.choose_section}>
                <div className={styles.left_section}>
                  <p> Choose Services</p>
                  <div className={styles.numbering_div}>
                    <p className="text-white p-1">5</p>
                  </div>
                </div>
                <div className={styles.right_section}>
                  <div className="search-wrapper">
                    <span
                      style={{
                        marginBottom: "3px",
                        marginLeft: "10px",
                        color: "#ccd2d8",
                      }}
                    >
                      <FiSearch />
                    </span>
                    <input type="text" placeholder="Search" />
                  </div>
                  <div className={styles.add_button}>
                    {/* <span style={{ color: "#ffffff" }}>
                      <AiOutlinePlus />
                    </span> */}
                    <p>+ Add</p>
                  </div>
                </div>
              </div>

              {/* ==========row1========= */}
              <div className={styles.button_row}>
                <div className={styles.my_div}>Plumbing</div>
                <div className={styles.my_div}>Electrical</div>
                <div className={styles.my_div}>Barber</div>
                <div className={styles.my_div}>Baby Sitter</div>
                <div className={styles.my_div}>Manicure Pedicure</div>
                <div className={styles.my_div}>Plumbing</div>
              </div>
              {/* ==========row2========= */}
              <div className={styles.button_row}>
                <div className={styles.my_div}>Manicure Pedicure</div>
                <div className={styles.my_div}>Barber</div>
                <div className={styles.my_div}>Baby Sitter</div>
                <div className={styles.my_div}>Baby Sitter</div>
                <div className={styles.my_div}>Plumbing</div>
                <div className={styles.my_div}>Plumbing</div>
              </div>
              {/* ==========row3========= */}
              <div className={styles.button_row}>
                <div className={styles.my_div}>Plumbing</div>
                <div className={styles.my_div}>Electrical</div>
                <div className={styles.my_div}>Barber</div>
                <div className={styles.my_div}>Baby Sitter</div>
                <div className={styles.my_div}>Manicure Pedicure</div>
                <div className={styles.my_div}>Plumbing</div>
              </div>
              {/* ==========row4========= */}
              <div className={styles.button_row}>
                <div className={styles.my_div}>Manicure Pedicure</div>
                <div className={styles.my_div}>Barber</div>

                <div className={styles.my_div}>Baby Sitter</div>
                <div className={styles.my_div}>Baby Sitter</div>
                <div className={styles.my_div}>Plumbing</div>
                <div className={styles.my_div}>Plumbing</div>
              </div>
              {/* ==========row5========= */}
              <div className={styles.button_row}>
                <div className={styles.my_div}>Plumbing</div>
                <div className={styles.my_div}>Electrical</div>
                <div className={styles.my_div}>Barber</div>
                <div className={styles.my_div}>Baby Sitter</div>
                <div className={styles.my_div}>Manicure Pedicure</div>
                <div className={styles.my_div}>Plumbing</div>
              </div>
              {/* ==========row6========= */}
              <div className={styles.button_row}>
                <div className={styles.my_div}>Manicure Pedicure</div>
                <div className={styles.my_div}>Barber</div>

                <div className={styles.my_div}>Baby Sitter</div>
                <div className={styles.my_div}>Baby Sitter</div>
                <div className={styles.my_div}>Plumbing</div>
                <div className={styles.my_div}>Plumbing</div>
              </div>
              {/* ==========row7========= */}
              <div className={styles.button_row}>
                <div className={styles.my_div}>Plumbing</div>
                <div className={styles.my_div}>Electrical</div>
                <div className={styles.my_div}>Barber</div>
                <div className={styles.my_div}>Baby Sitter</div>
                <div className={styles.my_div}>Manicure Pedicure</div>
                <div className={styles.my_div}>Plumbing</div>
              </div>
              {/* ==========row8========= */}
              <div className={styles.button_row}>
                <div className={styles.my_div}>Manicure Pedicure</div>
                <div className={styles.my_div}>Barber</div>

                <div className={styles.my_div}>Baby Sitter</div>
                <div className={styles.my_div}>Baby Sitter</div>
                <div className={styles.my_div}>Plumbing</div>
                <div className={styles.my_div}>Plumbing</div>
              </div>

              <div className={styles.container}>
                <button className={styles.btn}>Save & Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chooseservices;
