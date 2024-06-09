import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faHandsClapping } from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <div id="contact" className="bg-[#E0D9D9] w-full p-8 dark:bg-[#000]">
      <hr className="bg-yellow-300 p-1 mt-2 w-3/4 rounded-full" />
      <h3 className="text-[#000] text-md lg:text-xl mb-36 lg:mb-5  ml-6 lg:ml-12 mt-10 dark:text-[#fff]">
        Get In Touch
      </h3>
      {/* <!-- Text and Input div --> */}
      <div className="lg:flex mt-28 lg:gap-6 w-3/4 mx-auto h-72">
        {/* <!-- Text div --> */}
        <div className="relative top-80 md:left-4">
          <p className="font-SFproLight w-64 text-lg lg:text-xl dark:text-[#fff]">
            Let's talk about everything!
          </p>
          <p className="font-SFproLight text-lg lg:text-xl dark:text-[#fff]">
            Don't like forms? Send me an{" "}
            <a
              className="hover:border-b-4 hover:border-yellow-300"
              href="mailto: ayomide_akinlabi@yahoo.com?subject=Feedback&body=Message"
            >
              email
            </a>
            <span className="text-2xl text-yellow-300">
              <FontAwesomeIcon icon={faHandsClapping} />
            </span>
          </p>
        </div>
        {/* <!-- Input div --> */}
        <div className="w-5/6 lg:w-1/2  mx-auto relative bottom-56 lg:bottom-28 lg:right-96 ">
          <div className="lg:flex lg:gap-3 my-3 w-full lg:w-[28rem] ">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-xl my-3 w-full lg:w-60 "
            />
            <input
              type="text"
              placeholder="Your Email"
              className=" p-4 rounded-xl w-full lg:w-60 my-3"
            />
          </div>
          <input
            type="text"
            placeholder="Your Subject"
            className="lg:w-[28rem] my-3 p-4 rounded-xl w-full"
          />
          <textarea
            type="text"
            placeholder="Your message"
            className="w-3/4 h-20 my-3 p-2 rounded-xl w-full lg:w-[28rem]"
          />
          <a
            href="mailto: mosimi_akinlabi@gmail.com?subject=Feedback&body=Message"
            className="block text-5xl w-fit mx-auto xl:mx-48"
          >
            <FontAwesomeIcon
              icon={faSquareCheck}
              className="dark:text-[#fff]"
            />
          </a>
        </div>
      </div>
      <div className="w-80 mx-16 lg:mx-auto mt-64 dark:text-[#fff]">
        Copyright &#9400;mosimi2024
      </div>
    </div>
  );
}

export default Contact;
