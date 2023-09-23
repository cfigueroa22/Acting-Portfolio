import React, { useRef, useState } from "react";
import contactImg from "../assets/image2.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const form = useRef();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [hideEmailButton, setHideEmailButton] = useState(true);

  const initialValues = {
    guest_email: "",
    guest_message: "",
    guest_name: "",
  };

  const handleEmailButtonClick = () => {
    setIsFormVisible(true);
    setHideEmailButton(false);
  };

  const validationSchema = Yup.object().shape({
    guest_email: Yup.string().required("Please enter a valid email!"),
    guest_message: Yup.string().required("Enter your message before you send!"),
    guest_name: Yup.string().required("Let me know who you are!"),
  });

  return (
    <div>
      <div className="px-4 pt-10 pb-6">
        <h1 className="text-2xl font-raleway">CONTACT ME</h1>
        <div className="flex items-center justify-center mt-2">
          <hr className="w-full border-t border-lightGray" />
        </div>
      </div>
      <div className="p-4">
        <img src={contactImg} alt="Natalie Reyes" />
      </div>
      {/* Contact Info */}
      <div className="px-4">
        <p className="pt-4 pb-6 text-xs font-bold text-gray font-noto">
          Contact me for bookings or more information!
        </p>
        <h1 className="pb-4 text-xl font-noto">Natalie Reyes</h1>
        <h2 className="pb-4 text-gray font-noto">Yorktown, VA, USA</h2>
        <p className="pb-6 text-gray font-noto">
          phone: <span className="text-sm text-pink">(757)000-0000</span>
        </p>
      </div>
      {hideEmailButton && (
        <div className="flex items-center justify-center">
          <button
            onClick={handleEmailButtonClick}
            className="px-4 py-2 font-bold border-none bg-pink hover:bg-lightPink font-noto"
          >
            Email: nataliereyes@hotmail.com
          </button>
        </div>
      )}

      {/* Contact Form */}
      {isFormVisible && (
        <div id="contact-form" className="px-4 ">
          <div>
            <p className="font-noto">email: nataliereyes@hotmail.com</p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            <Form
              // onSubmit={sendEmail}
              ref={form}
            >
              <Field
                type="text"
                name="guest_name"
                placeholder="Name"
                autoComplete="off"
                className="w-full p-2 mt-4 text-sm border border-lightGray font-noto"
              />
              <ErrorMessage
                name="guest_name"
                component="span"
                className="w-full text-sm text-red font-noto"
              />
              <Field
                type="email"
                name="guest_email"
                placeholder="Email"
                autoComplete="off"
                className="w-full p-2 mt-4 text-sm border border-lightGray font-noto"
              />
              <ErrorMessage
                name="guest_email"
                component="span"
                className="w-full text-sm text-red font-noto"
              />
              <Field
                as="textarea"
                name="guest_message"
                placeholder="Message"
                className="w-full p-2 mt-4 text-sm border resize-none border-lightGray font-noto"
              />
              <ErrorMessage
                name="guest_message"
                component="span"
                className="w-full text-sm text-red font-noto"
              />
              <br />
              <div className="flex items-center justify-center py-2">
                <button
                  type="submit"
                  value="Send"
                  className="w-64 px-2 py-2 font-bold border-none bg-pink hover:bg-lightPink font-noto"
                >
                  Send
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      )}

      {/* Footer */}
      <div className="px-4 pt-10">
        <div className="flex items-center justify-center mt-2">
          <hr className="w-full border-t border-lightGray" />
        </div>
        <div className="flex items-center justify-center py-8 text-gray">
          <p className="text-xs">
            &copy; Carlos Figueroa - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
