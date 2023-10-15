import React from "react";
import classes from "./SectorPage.module.css";
import villagePhoto from "../Assets/villagewomen.jpg";
import joinUsImage from "../Assets/join us image.jpg";
import joinUsImageResize from "../Assets/join us image resize.jpg";
const SectorsPage = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <img src={villagePhoto} />
        <section>
          <p>Services provided for following sectors</p>
          <div className={classes.education}>
            <h1>
              1) <span>Education</span>
            </h1>
            <p>
              Empower women through Shubhsita Foundation's free education
              programs. We provide accessible learning opportunities, fostering
              skills that lead to personal and professional growth. Our
              dedicated educators create a supportive environment, promoting
              lifelong learning.
            </p>
            <ul>
              <li>
                Inclusive Curriculum: Tailored to address diverse learning
                needs.
              </li>
              <li>
                Trained and Caring Instructors: Dedicated professionals
                fostering a supportive learning environment.
              </li>
              <li>
                Flexible Schedules: Ensuring accessibility for women with
                various commitments.
              </li>
              <li>
                Skill-building Workshops: Supplementary programs enhancing
                practical skills.
              </li>
              <li>
                Networking Opportunities: Connecting women for mutual support
                and empowerment.
              </li>
            </ul>
            {/* <hr /> */}
          </div>
          <div className={classes.education}>
            <h1>
              2) <span>Legal services to women</span>
            </h1>
            <p>
              Championing justice and empowerment, Shubhsita Foundation leads in
              providing free legal services for women. We offer confidential
              consultations, spearhead awareness campaigns on women's rights,
              and conduct workshops fostering legal literacy. Our commitment
              includes ensuring privacy, collaboration with legal experts, and
              empowering women with the knowledge to navigate legal
              complexities.
            </p>
            <ul>
              <li>
                Legal Consultations: Providing confidential and personalized
                legal support for women.
              </li>
              <li>
                Rights Awareness Campaigns: Initiatives educating women about
                their legal rights..
              </li>
              <li>
                Confidentiality Assurance: Ensuring privacy and security for
                women seeking legal help.
              </li>
              <li>
                Workshops on Legal Literacy: Enhancing understanding of legal
                processes and rights.
              </li>
              <li>
                Collaboration with Legal Experts: Access to a network of
                experienced legal professionals.
              </li>
            </ul>
            {/* <hr /> */}
          </div>
          <div className={classes.education}>
            <h1>
              3) <span>Legal services to women</span>
            </h1>
            <p>
              Empowering women economically, Shubhsita Foundation, based in
              India, offers job initiatives bridging the gap between skills and
              employment. Tailored training programs, industry partnerships, and
              career counseling pave the way for women to enter and thrive in
              the workforce. Networking events and mentorship programs further
              support women in building successful and fulfilling careers,
              fostering a sense of community and professional growth
            </p>
            <ul>
              <li>
                Job Training Programs: Equipping women with the skills needed
                for diverse industries.
              </li>
              <li>
                Industry Partnerships: Connecting women with job opportunities
                in various sectors.
              </li>
              <li>
                Career Counseling: Guidance to help women make informed
                decisions about their professional paths.
              </li>
              <li>
                Networking Events: Creating opportunities for women to connect
                with potential employers.
              </li>
              <li>
                Mentorship Programs: Pairing women with experienced mentors for
                ongoing support and guidance.
              </li>
            </ul>
            {/* <hr /> */}
          </div>
        </section>
      </div>
      <div className={classes.joinUsHeader}>
        <img src={joinUsImage} className={classes.fullImage} />
        <img src={joinUsImageResize} className={classes.responsiveImage} />
        <div className={classes.innerJoinUsHeader}>
          <h1>Join Us And Become A Member</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient.
          </p>
        </div>
      </div>
      {/* <h1 className={classes.fillTheForm}></h1> */}
      <div className={classes.memberForm}>
        {/* <div className={classes.left}> */}
        <h1>Fill the form to become a member</h1>
        <div className={classes.formContainer}>
          <form>
            <input
              type="text"
              placeholder="Name"
              style={{ marginTop: "2vw" }}
            />
            <input type="text" placeholder="Phone number" />
            <input type="email" placeholder="Email" />
            <br />
            <label for="aadhar">Upload your Aadhar Card</label>
            <input type="file" id="aadhar" />
          </form>
          <button>Submit</button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default SectorsPage;
