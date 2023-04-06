import { GetServerSideProps } from "next";
import React from "react";
import axios from 'axios';

import { GetStaticPaths, GetStaticProps } from 'next';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Props {
  post: Post;
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   try {
//     const response = await fetch('http://172.187.153.193:8090/industry_svc/pv/Industry/GetIndustries');
//     const posts = Object.values(await response.json());
    
//     console.log("----------- res --------------");
//     console.log(paths);
//     console.log("----------- res --------------");

//     return {
//       paths,
//       fallback: false,
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       paths: [],
//       fallback: false,
//     };
//   }
// };

export const getServerSideProps: GetServerSideProps<any> = async ({ params }) => {
  try {
    const id = params?.id;
    if (!id) {
      throw new Error('id parameter is undefined');
    }
    const response:any = await axios.get(`http://172.187.153.193:8090/industry_svc/pv/Industry/GetIndustriesById?id=${id}`);
    console.log("------- response ---------");
    console.log(response.data.result);
    console.log("------- response ---------");
    // const post = response.data.result.industries;

    return {
      props: {
        industry:response.data.result.industry[0],
      },
      // revalidate: 3600, // re-generate the page after 1 hour (in seconds)
    };
  } catch (error) {
    console.log("------ error ------");
    console.error(error);
    console.log("------ error ------");
    return {
      props: {
        post: null, // return null if there's an error fetching data
      },
      revalidate: 60, // re-generate the page after 1 minute (in seconds)
    };
  }
};


function services(props: any) {
  return (
    <div className="col-md-12 p-4">
      <div className="col-md-12 px-1">
        <div className="row">
          <div className="col-md-6">
          <h4><b>Browse by category </b></h4>
          <p>{JSON.stringify(props)}</p>
          {/* <p>{post}</p> */}
          </div>
          <div className="col-md-6 text-end m-auto">
          <h6>Show all nested </h6>
          </div>
        </div>

        {
         props && props.industry && <p>{props.industry.industryName}</p>
        }
        {
          props.industry.childIndustries && props.industry.childIndustries.length > 0 && props.industry.childIndustries.map((itm:any, index:any) => (<p>{itm.industryName}</p>))
        }
        
      </div>
     <div className="display_flexx "> 
     <div className="box_width">
      <img className="img-fluid img_width_ind" src="../assets/Images/ind.png" />
     </div>
     <div className="box_width">
      <img className="img-fluid img_width_ind" src="../assets/Images/ind.png" />
     </div>
     <div className="box_width">
      <img className="img-fluid img_width_ind" src="../assets/Images/ind.png" />
     </div>
     <div className="box_width">
      <img className="img-fluid img_width_ind" src="../assets/Images/ind.png" />
     </div>
     <div className="box_width">
      <img className="img-fluid img_width_ind" src="../assets/Images/ind.png" />
     </div>
     <div className="box_width">
      <img className="img-fluid img_width_ind" src="../assets/Images/ind.png" />
     </div>
     <div className="box_width">
      <img className="img-fluid img_width_ind" src="../assets/Images/ind.png" />
     </div>
     <div className="box_width">
      <img className="img-fluid img_width_ind" src="../assets/Images/ind.png" />
     </div>
     <div className="box_width">
      <img className="img-fluid img_width_ind" src="../assets/Images/ind.png" />
     </div>
     <div className="box_width">
      <img className="img-fluid img_width_ind" src="../assets/Images/ind.png" />
     </div>
     </div>
    </div>
  );
}

export default services;

// export const getServerSideProps: GetServerSideProps<any> = async (
//   context:any
// ) => {

//   let d;
//   let token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJJU1NVRVJfRVhQRVJUIiwiYXVkaWVuY2UiOiJFWFBFUlQiLCJleHBpcmVzIjoiMjAyMy0wNC0wM1QxMDo1NjozOC40ODJaIiwiY2xhaW1zIjoiZXlKbWIyOGlPaUp6YjIxbExXWnZieTEwWlhOMGFXNW5MV05zWVdsdElpd2libUZ0WlNJNkluTm9ZV2dnYTJoaGJHbGtJaXdpWlcxaGFXd2lPaUp6YUdGb2FXUWdZV1p5YVdScGN5SjkiLCJpc3MiOiJJU1NVRVJfRVhQRVJUIiwiYXVkIjoiRVhQRVJUIiwic3ViIjoiRVhQRVJUIiwiaWF0IjoxNjgwNTE5MzM4LCJleHAiOjE2ODA2MDU3Mzh9.OtpgWlku6sGo8BLHlQToIrAWqdzj_DH8GmUKH4vx0_6iFiqPl17q8mcgi3MxFNp1oXw2GkPKL4y5spbbbjdOaBP-H7QmvPKKCkZtgJR1uP6vUCOzd7IM3HiPkp92T7lHgdorCY54r1U-CjeiZ0VDAfpgZnTdc0DnvjPBDvRYP4qykcR_aus258JdgGJaGCU1F4Yl-j1Xe6oaMVETpr-20rk5m8Wb5F4GspXIPkFQCIKoiT-z3GS_u7vFBhVbGBRQGs_wFjooraT56B4JHvICpCnZOQ4qRT_VNIHAvBaeocukI433VVgfCGMhyAcbJW4gOkYPJADkFYksO01-mW8esg";

//   var myHeaders = new Headers(); 
// myHeaders.append("Authorization", "Bearer "+token);

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
// let res = await fetch(`https://expertindustryapi-preprod.findanexpert.net/industry_svc/pv/Industry/GetIndustriesById?id=${context.params.id}`, {
//     headers: {
//       method:"GET",
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "Application/json"
//     }
//   })
// let json = await res.json();
// console.log("-------- response json -----------");
// console.log(json);
// console.log("-------- response json -----------");
// fetch("http://expertindustryapi-preprod.findanexpert.net/industry_svc/pv/Industry/GetIndustriesById?id=1009", requestOptions)
//   .then(response => {console.log("response::::", response); return response.text()})
//   .then(result => {
//     console.log("---------- response ------");
//     console.log(result)
//     console.log("---------- response ------");
//   })
//   .catch(error => console.log('error', error));

  // fetch(`https://expertindustryapi-preprod.findanexpert.net/industry_svc/pv/Industry/GetIndustriesById?id=${context.params.id}`, {
  //   headers: {
  //     Authorization: `Bearer ${token}`
  //   }
  // })
  // .then(res => {
  //   console.log("--------------response--------------");
  //   console.log(res);
  //   console.log("------------- response ---------------");
  //    return res.json();
  //   })
  // .then(json => {
  //   console.log("---------- data ---------------");
  //   console.log(json);
  //   console.log("---------- data ---------------");
  //   d = json;
  // })
  // .catch(err => {
  //   console.log("------------ error -------------");
  //   console.log(err);
  //   console.log("------------ error -------------");
  // })
  
//   return {
//     props: {data: { name: "shah khalid", id: context.params.id, data: json }},
//   };
// };
