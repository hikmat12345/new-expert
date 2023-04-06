import React from "react";
import { GetStaticProps } from 'next';
import axios from 'axios';

interface Props {
    data: { // define the shape of your data here
      id: number;
      name: string;
      // ...
    }[];
  }
  
  export const getStaticProps: GetStaticProps<Props> = async () => {
    try {
      let token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJJU1NVRVJfRVhQRVJUIiwiYXVkaWVuY2UiOiJFWFBFUlQiLCJleHBpcmVzIjoiMjAyMy0wNC0wM1QxMDo1NjozOC40ODJaIiwiY2xhaW1zIjoiZXlKbWIyOGlPaUp6YjIxbExXWnZieTEwWlhOMGFXNW5MV05zWVdsdElpd2libUZ0WlNJNkluTm9ZV2dnYTJoaGJHbGtJaXdpWlcxaGFXd2lPaUp6YUdGb2FXUWdZV1p5YVdScGN5SjkiLCJpc3MiOiJJU1NVRVJfRVhQRVJUIiwiYXVkIjoiRVhQRVJUIiwic3ViIjoiRVhQRVJUIiwiaWF0IjoxNjgwNTE5MzM4LCJleHAiOjE2ODA2MDU3Mzh9.OtpgWlku6sGo8BLHlQToIrAWqdzj_DH8GmUKH4vx0_6iFiqPl17q8mcgi3MxFNp1oXw2GkPKL4y5spbbbjdOaBP-H7QmvPKKCkZtgJR1uP6vUCOzd7IM3HiPkp92T7lHgdorCY54r1U-CjeiZ0VDAfpgZnTdc0DnvjPBDvRYP4qykcR_aus258JdgGJaGCU1F4Yl-j1Xe6oaMVETpr-20rk5m8Wb5F4GspXIPkFQCIKoiT-z3GS_u7vFBhVbGBRQGs_wFjooraT56B4JHvICpCnZOQ4qRT_VNIHAvBaeocukI433VVgfCGMhyAcbJW4gOkYPJADkFYksO01-mW8esg";
      const response:any = await axios.get('http://172.187.153.193:8090/industry_svc/pv/Industry/GetIndustries');
      const data = response.data.result.industries;
      console.log("---- data ---");
      console.log(JSON.stringify(data))
      console.log("------ data --------");
  
      return {
        props: {
          data,
        },
        revalidate: 3600, // re-generate the page after 1 hour (in seconds)
      };
    } catch (error) {
      console.error(error);
      return {
        props: {
          data: [], // return an empty array if there's an error fetching data
        },
        revalidate: 60, // re-generate the page after 1 minute (in seconds)
      };
    }
  };


const services = ({ data }: Props) => {
  return (
    <div className="col-md-12 p-4">
      <div className="col-md-12 px-1">
        <div className="row">
          <div className="col-md-6">
          <h4><b>Browse by category</b></h4>
          </div>
          <div className="col-md-6 text-end m-auto">
          <h6>Show all </h6>
          </div>
        </div>
        
      </div>
     <div className="display_flexx "> 
     {data?.slice(0,9)?.map((curel: any)=>{
        console.log("hellllooooo", curel)
        return(
            <div className="box_width">
            <a href={`/services/${curel?.parentId}`}>
                <img className="img-fluid img_width_ind" src="../assets/Images/ind.png" />
                <p>{curel?.industryName}</p>
            </a>
         </div>   
         )
     })}
     {/* {data ? (<>
       
     
     <p>data coming</p>
     </>) : (
        <> <p>Data not coming from backend</p> </>
     )} */}
    
     
     </div>
    </div>
  );
}

export default services;
