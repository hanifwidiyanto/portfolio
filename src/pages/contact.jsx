import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillTwitterSquare,
} from "react-icons/ai";

export default function Contact() {
  const initialValues = {
    name: "",
    email: "",
    budget: "",
    description: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    budget: Yup.number().typeError("Must be a number"),
    description: Yup.string().required("Required"),
  });

  const onSubmit = (values, { resetForm }) => {
    // submit form data to backend or perform other actions here
    console.log(values);
    resetForm();
  };
  return (
    <section
      id="contact"
      className="mt-48 mb-24 px-48 h-[420px] items-center flex justify-between"
    >
      <div className="flex flex-col justify-between h-full w-5/12 py-8">
        <h1 className="text-4xl text-gelap font-rubik-bold ">Just say hi.</h1>
        <p className="text-gelap text-2xl">
          I'm always open to discuss your project and talk about new things.
        </p>
        <div className="flex w-full justify-between items-end">
          <div className="flex gap-1">
            <ul className="flex gap-4 text-xl">
              <li className="cursor-pointer">
                <AiFillLinkedin />
              </li>
              <li className="cursor-pointer">
                <AiFillGithub />
              </li>
              <li className="cursor-pointer">
                <AiFillInstagram />
              </li>
              <li className="cursor-pointer">
                <AiFillTwitterSquare />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h6 className="text-gelap text-sm">Mail me at</h6>
            <h4 className="text-md">halo@hanifwidiyanto.com</h4>
          </div>
        </div>
      </div>
      <div className="bg-gelap px-12 py-8 h-full w-6/12 text-terang rounded-md">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, getFieldProps }) => (
            <Form>
              <div className="mb-4 group">
          
                <Field
                  className={`appearance-none border-b-2 border-white w-full py-2 px-2 text-slate-50 font-rubik leading-tight focus:outline-none focus:border-gray-500 bg-transparent peer ${
                    errors.name && touched.name ? "border-red-500" : ""
                  }`}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  style={{ position: "relative" }} // tambahkan properti position: relative
                />
                <ErrorMessage
                  className="text-red-500"
                  name="name"
                  component="p"
                />
              </div>

              <div className="mb-4">
                <Field
                  className={`appearance-none border-b-2 border-white w-full py-2 px-3 text-slate-50 font-rubik leading-tight focus:outline-none focus:border-gray-500 bg-transparent ${
                    errors.email && touched.email ? "border-red-500" : ""
                  }`}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
                <ErrorMessage
                  className="text-red-500"
                  name="email"
                  component="p"
                />
              </div>
              <div className="mb-4">
                <Field
                  className={`appearance-none border-b-2 border-white w-full py-2 px-3 text-slate-50 font-rubik leading-tight focus:outline-none focus:border-gray-500 bg-transparent ${
                    errors.budget && touched.budget ? "border-red-500" : ""
                  }`}
                  type="text"
                  name="budget"
                  id="budget"
                  placeholder="Your Budget (optional)"
                />
                <ErrorMessage
                  className="text-red-500"
                  name="budget"
                  component="p"
                />
              </div>
              <div className="mb-4">
                <Field
                  as="textarea"
                  className={`appearance-none border-b-2 border-white w-full py-2 px-3 text-slate-50 font-rubik leading-tight focus:outline-none focus:border-gray-500 bg-transparent ${
                    errors.description && touched.description
                      ? "border-red-500"
                      : ""
                  }`}
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Your Project Description"
                />
                <ErrorMessage
                  className="text-red-500"
                  name="description"
                  component="p"
                />
              </div>
              <div className="text-center">
                <button
                  className="bg-transparent hover:bg-gray-500 text-slate-50 font-rubik hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded w-full mt-4"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
