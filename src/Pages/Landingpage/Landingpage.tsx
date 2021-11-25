import React from "react";
import Header from "../../Components/Header/Header";
import "./Landingpage.scss";
import AnalyzeImage from "../../images/analyzeimage.jpg";
import ExamImage from "../../images/exams.jpg";
import Button from "@mui/material/Button";
import TeacherImage from "../../images/teacher.svg";
import StudentImage from "../../images/student.jpg";
import Student from "../../images/student.svg";
import EmployerImage from "../../images/employer.svg";
import CreateTest from "../../images/createExam.jpg";
import manageExam from "../../images/manageExam.jpg";
import attemptExam from "../../images/attemptTest.jpg";
const Landingpage = () => {
  return (
    <div className="landingpage">
      <Header />
      <section className="landingpage__firstsection">
        <section className="landingpage__firstsection--text">
          <p className="text-lg">
            We help you create tests for yourself, class, business or
            organization
          </p>
          <p className="text-md">
            create your test, share it, and get results almost instantly. we
            help you grade and analyze the scores.
          </p>
          <a className="btn-primary mt-sm">GET STARTED</a>
        </section>
        <div className="landingpage__firstsection--images">
          <img src={StudentImage} alt="" />
          <img src={ExamImage} alt="" />
          <img src={AnalyzeImage} alt="" />
        </div>
      </section>
      <section className="landingpage__about">
        <h1 className="text-mdlg text-center">About us</h1>
        <p className="text-center text-md">
          MTest is a totally free platform, that makes creating, managing and
          completing tests easy for everyone. See some use cases below
        </p>
        <div className="landingpage__about-use">
          <div className="landingpage__about-use-case">
            <img src={TeacherImage} alt="" />
            <h1 className="text-mdlg">Teachers</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum magni facere ad ipsa? Alias molestiae voluptas rerum
            </p>
          </div>
          <div className="landingpage__about-use-case">
            <img src={Student} alt="" />
            <h1 className="text-mdlg">Students</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum magni facere ad ipsa? Alias molestiae voluptas rerum
            </p>
          </div>
          <div className="landingpage__about-use-case">
            <img src={EmployerImage} alt="" />
            <h1 className="text-mdlg">Employer</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum magni facere ad ipsa? Alias molestiae voluptas rerum
            </p>
          </div>
        </div>
        <a className="btn-primary mt-sm btn-rounded center-item">
          Join us Today
        </a>
      </section>
      <section className="landingpage__features">
        <div className="landingpage__features--each">
          <div className="landingpage__features--each-image">
            <img src={CreateTest} alt="" />
          </div>
          <div className="landingpage__features--each-text">
            <span className="landingpage__features--each-title text-md">
              Create Tests
            </span>
            <h5 className="text-lg">
              Start by setting questions, you will be done in a minute
            </h5>
            <span className="text-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              quisquam cupiditate ab blanditiis pariatur culpa modi, laudantium
              necessitatibus aut voluptates exercitationem tempore
            </span>
            <a href="" className="text-md mt-sm">
              Click here to start
            </a>
          </div>
        </div>
        <div className="landingpage__features--each">
          <div className="landingpage__features--each-text">
            <span className="landingpage__features--each-title text-md  color-green">
              Write Tests
            </span>
            <h5 className="text-lg">
              Take Exams set by your teacher, employer, colleagues or even you
            </h5>
            <span className="text-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              quisquam cupiditate ab blanditiis pariatur culpa modi, laudantium
              necessitatibus aut voluptates exercitationem tempore
            </span>
            <a href="" className="text-md mt-sm">
              Click here to start
            </a>
          </div>
          <div className="landingpage__features--each-image order-2">
            <img src={attemptExam} alt="" />
          </div>
        </div>
        <div className="landingpage__features--each">
          <div className="landingpage__features--each-image">
            <img src={manageExam} alt="" />
          </div>
          <div className="landingpage__features--each-text">
            <span className="landingpage__features--each-title text-md color-purple">
              Manage Tests
            </span>
            <h5 className="text-lg">Keep an eye on every of your tests</h5>
            <span className="text-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              quisquam cupiditate ab blanditiis pariatur culpa modi, laudantium
              necessitatibus aut voluptates exercitationem tempore
            </span>
            <a href="" className="text-md mt-sm">
              Click here to start
            </a>
          </div>
        </div>
      </section>
      <section className="landingpage__pricing">
        <div className="landingpage__pricing--box">
          <h5 className="text-lg">Pricing</h5>
          <p className="text-md mt-sm">
            Our Services come at no cost. it is 100% free. We just need you to
            create an account and start utilizing our awesome features.
          </p>
          <span className="text-md">
              Are you ready? <a href="" className="btn-primary ">Create an Account</a>
          </span>
        </div>
      </section>
      <footer className="landingpage__footer">
        <p className="logo">
          MTest
        </p>
        <p className="text-md">
          &copy;  Oyewo Oluwaseyitan 2021
        </p>
      </footer>
    </div>
  );
};

export default Landingpage;
