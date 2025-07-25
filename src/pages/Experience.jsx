import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";
import "./Experience.css";
function Experience() {
  return (
    <div id="experience" className="bg-[#E0D9D9]  w-full p-8 dark:bg-[#000]">
      <h3 className="text-[#000] text-xl lg:text-2xl mb-5 ml-6 lg:ml-12 mt-20 dark:text-[#fff]">
        Experience
      </h3>
      {/* <!-- Experiences Tab --> */}
      <div className="lg:flex w-11/12 lg:w-3/4 lg:gap-4 xl:gap-10 mx-auto ">
        {/* <!-- tab --> */}
        <div className=" mb-12 w-full  lg:w-96  ">
          {/* <!-- Icon x text div --> */}
          <div className="flex p-5 gap-3">
            {/* <!-- Icons div --> */}
            <div>
              {/* Logo section */}
              <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border border-gray-300 shadow-md">
                <img
                  src={require("../assets/reborne.png")}
                  alt="Reborne Logo"
                  class="w-8 h-8 object-contain"
                />
              </div>
              <div id="vl"></div>
            </div>
            {/* <!-- Text div --> */}
            <div className="w-4/5 mx-auto">
              <p className="text-[#767676] font-SFproBold">
                Jan 2024 - Present
              </p>
              <h4 className=" font-SFproBold text-sm lg:text-md">
                Frontend Software Engineer
              </h4>
              <span className="font-SFproItalic ">Reborne</span>
              <p className=" font-SFproLight text-md">
                - Built a MVP from scratch, where I was able to contribute to
                the project and understand the business logic behind the
                features built.
              </p>
              <p className=" font-SFproLight text-md">
                - Employed the use of Figma for UI mockups, scrum for sprint
                planning, standups, and retrospectives.
              </p>
              <p className=" font-SFproLight text-md">
                - Employed Jira for issue tracking, Gitlab for code reviews,
                Jest for unit testing and Cypress for end-to-end testing
              </p>
              <p className=" font-SFproLight text-md">
                - Implemented separation of concerns for both logic &
                presentation, with performance optimisation of lazy loading and
                code splitting.
              </p>
            </div>
          </div>
          <div className="flex p-5 gap-3">
            {/* <!-- Icons div --> */}
            <div>
              {/* Logo section */}
              <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border border-gray-300 shadow-md">
                <img
                  src={require("../assets/Mascot.png")}
                  alt="Lulu Logo"
                  class="w-8 h-8 object-contain"
                />
              </div>

              <div id="vl"></div>
            </div>
            {/* <!-- Text div --> */}
            <div className="w-4/5 mx-auto">
              <p className="text-[#767676] font-SFproBold">
                Feb 2023 - April 2023
              </p>
              <h4 className=" font-SFproBold text-sm lg:text-md">
                Frontend Software Engineer-
              </h4>
              <span className="font-SFproItalic ">Lulu Nigeria</span>
              <p className="font-SFproLight text-md">
                - Designed and implemented a highly scalable landing page for a
                product.
              </p>
              <p className=" font-SFproLight text-md">
                - Led a team of 4 in planning the company’s product design while
                taking into consideration performance efficiency, different
                screen sizes and user experience.
              </p>
              <p className=" font-SFproLight text-md">
                - Implemented a secure user login/signup flow, employed NextAuth
                for tokens (JWT) and protected routes and Redux to persist auth
                state.
              </p>
            </div>
          </div>
          <div className="flex p-5 gap-3">
            {/* <!-- Icons div --> */}
            <div>
              {/* Logo section */}
              <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border border-gray-300 shadow-md">
                <img
                  src={require("../assets/icon-white-deskotop.png")}
                  alt="Reborne Logo"
                  class="w-8 h-8 object-contain"
                />
              </div>
              <div id="vl"></div>
            </div>
            {/* <!-- Text div --> */}
            <div className="w-4/5 mx-auto">
              <p className="text-[#767676] font-SFproBold ">
                Aug 2022 - Dec 2022
              </p>
              <h4 className=" font-SFproBold text-sm lg:text-md">
                Frontend Software Engineer-
                <span className="font-SFproItalic">
                  Integrated Software Service Ltd
                </span>
              </h4>
              <p className=" font-SFproLight text-md">
                - Developed and deployed a medium-scale fintech application and
                admin dashboard.
              </p>
              <p className=" font-SFproLight text-md">
                - API integration with frontend using Postman and React Redux to
                maintain the state of the application
              </p>
              <p className=" font-SFproLight text-md">
                - Ensured the code base was readable and understandable and that
                it could be maintained in the long run.
              </p>
              <p className=" font-SFproLight text-md">
                - Maintained and updated existing code base.
              </p>
              <p className=" font-SFproLight text-md">
                - Mobile, Tablet and Desktop responsive
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
