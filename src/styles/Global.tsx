import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }: { theme: any }) => "#fff"};
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
  input{
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal; 
    color: #4a4a4a;
  }
  .react-tel-input .country-list .country{
    text-align:left;
  }
  img {
    max-width: 100%;
  }
  .react-tel-input .flag-dropdown { 
    background-color: #f1f6fa;
    border: 0px solid #cacaca;
    border-radius: 3px 0 0 3px;
  }
  .react-tel-input .form-control {
    
    background: #f1f6fa;
    border: 0px solid #CACACA;
    border-radius: 5px;
    line-height: 25px;
    height: 35px;
    width: 300px;
    outline: none;
  }
  .react-tel-input .selected-flag:hover, .react-tel-input .selected-flag:focus {
    background-color: #f1f6fa;
   }
  .react-tel-input .flag-dropdown.open .selected-flag {
    background: #f1f6fa;
    border-radius: 3px 0 0 0;
}
.Calendar__day.-selected
{
  border-radius: 5px !important
}
.Calendar__day.-selected:hover
{
  border-radius: 5px !important
}
.Calendar__day.-ltr
{
  min-height: 0em;
}
input[type="file"] {
  display: none;
}
.display_file_upload
{
  // margin-top:10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 2px;
  padding-top: 2px;
  background: rgb(251, 228, 228); 
  border-radius: 5px;
  color: red;
  font-size: 80%;
  
}
.display_file_upload1
{
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 2px;
  padding-top: 25px;
  padding-bottom: 45px;
  display: table;
  border-radius: 10px;
  color: red;
  font-size: 80%;
  width: 100%;
  height: 100%;
  border: 1px solid lightgray;
  
}

.justify_con
{
  display: flex;
    flex-direction: row;
    justify-content: end;
}

.audio_setting
{
  width: 100%;
  border-radius: 0 !important;
 
}

.img_width_bannerg
{
  width: 30%;
}

.btn_style_light
{
  background-color: white;
  border: 1px solid lightgray;
}

.img_fix_banner
{
  height: 60vh;
  border-radius: 10px;
}

.img_width_setting
{
  height: 25vh;
  width: 30vw;
  border-radius: 10px;
}

.icon_red_upload_cloud
{
  font-size: 260%;
  color: #ccd2d8;
}

  }

  input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
     -webkit-appearance: none;
    margin: 0;  
}

input[type=number] {
    -moz-appearance:textfield;  
}
video {
  width: 100% !important;
  height: 100%;
  object-fit: fill;
  z-index: 0;
  border-radius: 10px;
}

.video-container
{
  height: 80vh;
    width: 100%;
    object-fit: fill;
}

.right_margin
{
  left: auto;
}
.display_flexx
{
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;

}

.catagories_width
{
  width: 10%;
}

.border_container
{
  border: 1px solid lightgray;
  border-radius: 10px;
}

.heading_color
{
  color: #444;
}

.img_width_packages
{
  width: 70%;
}
.font_size_2
{
  font-size: 12px;
  color: #ccd2d8;
}

.font_size_4
{
  font-size: 14px;
}

.poly_width
{
  width: 30%;
}

.position_top
{
  margin-top: -28px;
  font-size: 12px;
  color: white;
}
.save_text
{
  font-size: 6px;
}

.border_right
{
  border-right: 1px solid lightgray
}

.text_300
{
  font-size: 8px;
}

.bcakground_color_card
{
  border-radius: 8px;
  background-color: #f5f5f5;
}

.save_text1
{
  color: #292929;
  font-size: 13px;
  font-weight: 600;
}

.get_now_text1
{
  font-size: 12px;
}

.main_heading_service
{
  font-size: 16px;
  font-weight: 600;
  color: #444;
}

.sub_heading_service
{
  font-size: 14px;
  color: #6c6c6c;
}

ul {
  padding-left: 1rem;
}

.font_ul
{
  font-size: 14px;
  color: #4a4a4a;
}

.font_size_3
{
  font-size: 16px;
  color: #444;
}

.display_flexx_services
{
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
}

.img_width_ind
{
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
}

.box_width
{
  width: 10%;
}

.border_card_ind
{
  border: 1px solid lightgray;
  border-radius: 5px;
  cursor: pointer;
}

.cursor_back
{
  cursor: pointer;
}

@media(max-width:380px){
  .react-tel-input .form-control { 
     width: 228px !important; 
  }
  .react-tel-input {
      width: 100% !important;  
      padding: 10.9px 21px 13px 15px !important;  
  }
}
`;

export default GlobalStyles;
