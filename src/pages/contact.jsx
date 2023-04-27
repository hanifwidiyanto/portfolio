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
      className="mt-48 mb-24 px-48 h-[360px] items-center flex justify-between"
    >
      <div className="flex flex-col justify-between h-full w-5/12 py-8">
        <h1 className="text-4xl text-gelap font-rubik-bold ">Just say hi.</h1>
        <p className="text-gelap text-2xl">
          I am always open to discuss your project and talk about new things.
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
      <div className="bg-gelap p-12 h-full w-6/12 text-terang rounded-md">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, getFieldProps }) => (
            <Form>
              <div className="mb-4 relative">
                <Field
                  className={`appearance-none border-b-2 border-white w-full py-2 text-slate-50 font-rubik leading-tight focus:outline-none focus:border-gray-500 bg-transparent peer ${
                    errors.name && touched.name ? "border-red-500" : ""
                  }`}
                  type="text"
                  name="name"
                  id="name"
                />
                <label htmlFor="name" className={`absolute top-2 left-1 peer-focus:-top-4 peer-focus:left-0 font-rubik text-slate-500  peer-focus:text-slate-700 peer-focus:text-sm duration-300 peer-focus ${getFieldProps('name').value ? '-top-4 left-0 text-sm text-slate-700' : ''}`}>
                  Your Name
                </label>
                <ErrorMessage
                  className="text-red-500 absolute right-0"
                  name="name"
                  component="p"
                />
              </div>

              <div className="mt-8 mb-4 relative">
                <Field
                  className={`appearance-none border-b-2 border-white w-full py-2 text-slate-50 font-rubik leading-tight focus:outline-none focus:border-gray-500 bg-transparent peer ${
                    errors.email && touched.email ? "border-red-500" : ""
                  }`}
                  type="email"
                  name="email"
                  id="email"
                />
                 <label htmlFor="email" className={`absolute top-2 left-1 peer-focus:-top-4 peer-focus:left-0 font-rubik text-slate-500  peer-focus:text-slate-700 peer-focus:text-sm duration-300 peer-focus ${getFieldProps('email').value ? '-top-4 left-0 text-sm text-slate-700' : ''}`}>
                  Your Email
                </label>
                <ErrorMessage
                  className="text-red-500 absolute right-0"
                  name="email"
                  component="p"
                />
              </div>
              <div className="mt-8 mb-4 relative">
                <Field
                  className={`appearance-none border-b-2 border-white w-full py-2 peer text-slate-50 font-rubik leading-tight focus:outline-none focus:border-gray-500 bg-transparent ${
                    errors.budget && touched.budget ? "border-red-500" : ""
                  }`}
                  type="text"
                  name="budget"
                  id="budget"
                />
                 <label htmlFor="budget" className={`absolute top-2 left-1 peer-focus:-top-4 peer-focus:left-0 font-rubik text-slate-500  peer-focus:text-slate-700 peer-focus:text-sm duration-300 peer-focus ${getFieldProps('budget').value ? '-top-4 left-0 text-sm text-slate-700' : ''}`}>
                  Your Budget (optional)
                </label>
                <ErrorMessage
                  className="text-red-500 absolute right-0"
                  name="budget"
                  component="p"
                />
              </div>
              <div className="mt-8 mb-4 relative">
                <Field
                  as="textarea"
                  className={`appearance-none border-b-2 border-white w-full py-2 peer text-slate-50 font-rubik leading-tight focus:outline-none focus:border-gray-500 bg-transparent ${
                    errors.description && touched.description
                      ? "border-red-500"
                      : ""
                  }`}
                  type="text"
                  name="description"
                  id="description"
                />
                 <label htmlFor="description" className={`absolute top-2 left-1 peer-focus:-top-4 peer-focus:left-0 font-rubik text-slate-500  peer-focus:text-slate-700 peer-focus:text-sm duration-300 peer-focus ${getFieldProps('description').value ? '-top-4 left-0 text-sm text-slate-700' : ''}`}>
                  Your Project Description
                </label>
               <ErrorMessage
                  className="text-red-500 absolute right-0"
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
