import React from "react";
import styles from "./MembersPage.module.css";
import m1 from "../Assets/Members/member-1.jpeg";
import m2 from "../Assets/Members/member-2.jpeg";
import m3 from "../Assets/Members/member-3.jpeg";
import after3 from "../Assets/Members/member-after-3.jpeg";
import m4 from "../Assets/Members/member-4.jpeg";
import m5 from "../Assets/Members/member-5.jpeg";
import after5 from "../Assets/Members/member-after-5.jpeg";
import m6 from "../Assets/Members/member-6.jpeg";
import m7 from "../Assets/Members/member-7.jpeg";
import m8 from "../Assets/Members/member-8.jpeg";
import m9 from "../Assets/Members/member-9.jpeg";
import m10 from "../Assets/Members/member-10.jpeg";
import m11 from "../Assets/Members/member-11.jpg";
import m12 from "../Assets/Members/member-12.jpeg";
import m13 from "../Assets/Members/member-13.jpeg";
import m14 from "../Assets/Members/member-14.jpeg";
import m15 from "../Assets/Members/member-15.jpeg";
import m16 from "../Assets/Members/member-16.jpeg";
import m17 from "../Assets/Members/member-17.jpeg";
import m18 from "../Assets/Members/member-18.jpeg";
import after18 from "../Assets/Members/member-after-18.jpeg";
import before19 from "../Assets/Members/member-before-19.jpeg";
import m19 from "../Assets/Members/member-19.jpeg";
import m20 from "../Assets/Members/member-20.jpeg";
import after20 from "../Assets/Members/member-after-20.jpeg";
import m21 from "../Assets/Members/member-21.jpeg";
import m22 from "../Assets/Members/member-22.jpeg";
import m23 from "../Assets/Members/member-23.jpeg";
import m24 from "../Assets/Members/member-24.jpeg";
import m25 from "../Assets/Members/member-25.jpeg";
import m26 from "../Assets/Members/member-26.jpeg";
import m27 from "../Assets/Members/member-27.jpeg";
import m28 from "../Assets/Members/member-28.jpeg";
import m29 from "../Assets/Members/member-29.jpeg";
import after8 from "../Assets/Members/member-after-8.jpeg";
import m30 from "../Assets/Members/member-30.jpeg";
import Member from "../Components/Members Components/Member";
const MembersPage = () => {
  const imageArray = [
    { img: m1, memberName: "Satishkumar Jha" },
    // { img: m1, memberName: "" },
    // m1,
    { img: m2, memberName: "Shankar Jha" },
    { img: m3, memberName: "Lalan Jha" },
    { img: after3, memberName: "Ajay Jha" },
    { img: m4, memberName: "Manorma Jha", female: true },

    { img: after5, memberName: "Pratibha Mirchandani", female: true },
    { img: m6, memberName: "Sangeeta Jha", female: true },
    { img: m5, memberName: "Ranjit Jha" },
    { img: m7, memberName: "Sarita Mihsra", female: true },
    { img: m8, memberName: "Rajendra Pathak" },
    { img: after8, memberName: "Ramsundar Jha" },
    { img: m9, memberName: "Vipin Jha" },
    { img: m10, memberName: "Anand Mohan Jha" },
    { img: m11, memberName: "Ranjit Jha" },
    { img: m12, memberName: "Diwakar Mishra" },
    { img: m13, memberName: "Vinita Jha", female: true },
    { img: m14, memberName: "Govind Chaudhary" },
    { img: m15, memberName: "Adv Sambhu Jha" },
    { img: m16, memberName: "Shweta Jha", female: true },
    { img: m17, memberName: "Nisha Thakur", female: true },
    { img: m18, memberName: "Anita Rai", female: true },
    { img: after18, memberName: "Deepak Jha" },
    { img: before19, memberName: "Sampati Jha" },
    { img: m19, memberName: "Shweta Varpe", female: true },
    { img: m20, memberName: "Akhlesh Thakur" },
    { img: after20, memberName: "Rohan Jha" },
    { img: m21, memberName: "Dr. Raushan Pathak", female: true },
    { img: m22, memberName: "Aarti Mishra", female: true },
    { img: m23, memberName: "Murari Jha" },
    { img: m24, memberName: "Sunil Keny" },
    { img: m25, memberName: "Akhilesh Thakur" },
    { img: m26, memberName: "Naveen Pathak" },
    { img: m27, memberName: "Pitambar Jha" },
    { img: m28, memberName: "Sarita Mishra", female: true },
    { img: m29, memberName: "Praveen Singh" },
    { img: m30, memberName: "Vikas Tiwari" },
    // { img: m24, memberName: "Sunil Keny" },
  ];
  return (
    <div className={styles.membersContainer}>
      {imageArray.map((img) => {
        return (
          <Member img={img.img} name={img.memberName} female={img?.female} />
        );
      })}
      {/* <Member img={m1} />
      <Member img={m2} />
      <Member img={m3} />
      <Member img={m4} />
      <Member img={m5} />
      <Member img={m6} /> */}
    </div>
  );
};

export default MembersPage;
