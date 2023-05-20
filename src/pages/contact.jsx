import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillTwitterSquare,
} from "react-icons/ai";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

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

  const onSubmit = async (values, { resetForm }) => {
    setIsLoading(true)
    const { name, email, budget, description } = values
    const data = {
      Nama: name,
      Email: email,
      Budget: budget,
      ProjectDesription: description,
      TanggalSubmit: Date.now()
    }
    axios.defaults.headers.post["Content-Type"] = "text/plain";
    try {
      const response = await axios.post("https://script.google.com/macros/s/AKfycbz1kpe4N0wlIrtiyEhQznd-E82UqaSR4sGFYp9Am59q6JZyJMjMDBVmwtZJqDVyWz3uYg/exec", data);
      console.log(response);
      setTimeout(() => {
        setIsLoading(false)
        resetForm();
      }, 2400);
      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
      }, 2400);
    } catch (error) {
      console.log(error);
    }
    console.log(data);

  };

  const CheckSubmit = () => {
    if(!isLoading && !isSuccess) return 'Submit'
    if(isLoading && !isSuccess) return 'Wait'
    return 'Sent'
  }
  return (
    <section
      id="contact"
      className=" mt-48 mb-24 lg:px-48 md:px-24 sm:px-12 px-6 md:gap-0 gap-12 md:h-[360px] h-fit md:items-center items-start flex md:flex-row flex-col justify-between"
    >
      <div className="flex flex-col justify-between md:w-5/12 h-full md:gap-0 gap-6 w-full py-8">
        <h1 className="text-4xl text-gelap font-rubik-bold ">Just say hi.</h1>
        <p className="text-gelap text-2xl">
          I am always open to discuss your project and talk about new things.
        </p>
        <div className="flex md:flex-row flex-col-reverse gap-y-4 w-full justify-between items-start">
          <div className="flex gap-1">
            <div className="flex gap-4 text-xl">
              <Link href="https://www.linkedin.com/in/hanif-t-widiyanto-922085189/" target="_blank" className="cursor-pointer">
                <AiFillLinkedin />
              </Link>
              <Link href="https://github.com/hanifwidiyanto" target="_blank" className="cursor-pointer">
                <AiFillGithub />
              </Link>
              <Link href="https://instagram.com/hanifwidiyanto" target="_blank" className="cursor-pointer">
                <AiFillInstagram />
              </Link>
              <Link href="https://twitter.com/depokjkt" target="_blank" className="cursor-pointer">
                <AiFillTwitterSquare />
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:gap-1 gap-[1px]">
            <h6 className="text-gelap text-sm">Mail me at</h6>
            <h4 className="text-md">halo@hanifwidiyanto.com</h4>
          </div>
        </div>
      </div>
      <div className="bg-gelap p-12 md:h-full h-fit md:w-6/12 w-full text-terang rounded-md">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, getFieldProps }) => (
            <Form className="-z-10">
              <div className="mb-4 relative">
                <Field
                  className={`appearance-none border-b-2 border-white w-full py-2 text-slate-50 font-rubik leading-tight focus:outline-none focus:border-gray-500 bg-transparent peer ${errors.name && touched.name ? "border-red-500" : ""
                    }`}
                  type="text"
                  name="name"
                  id="name"
                />
                <label htmlFor="name" className={`absolute top-2 left-1 peer-focus:-top-5 peer-focus:left-0 font-rubik text-slate-500  peer-focus:text-slate-700 peer-focus:text-sm duration-300 peer-focus ${getFieldProps('name').value ? '-top-5 left-0 text-sm text-slate-700' : ''}`}>
                  Your Name
                </label>
                <ErrorMessage
                  className="text-red-500 absolute right-0 text-sm"
                  name="name"
                  component="p"
                />
              </div>

              <div className="mt-8 mb-4 relative">
                <Field
                  className={`appearance-none border-b-2 border-white w-full py-2 text-slate-50 font-rubik leading-tight focus:outline-none focus:border-gray-500 bg-transparent peer ${errors.email && touched.email ? "border-red-500" : ""
                    }`}
                  type="email"
                  name="email"
                  id="email"
                />
                <label htmlFor="email" className={`absolute top-2 left-1 peer-focus:-top-5 peer-focus:left-0 font-rubik text-slate-500  peer-focus:text-slate-700 peer-focus:text-sm duration-300 peer-focus ${getFieldProps('email').value ? '-top-5 left-0 text-sm text-slate-700' : ''}`}>
                  Your Email
                </label>
                <ErrorMessage
                  className="text-red-500 absolute right-0 text-sm"
                  name="email"
                  component="p"
                />
              </div>
              <div className="mt-8 mb-4 relative">
                <Field
                  className={`appearance-none border-b-2 border-white w-full py-2 peer text-slate-50 font-rubik leading-tight focus:outline-none focus:border-gray-500 bg-transparent ${errors.budget && touched.budget ? "border-red-500" : ""
                    }`}
                  type="text"
                  name="budget"
                  id="budget"
                />
                <label htmlFor="budget" className={`absolute top-2 left-1 peer-focus:-top-5 peer-focus:left-0 font-rubik text-slate-500  peer-focus:text-slate-700 peer-focus:text-sm duration-300 peer-focus ${getFieldProps('budget').value ? '-top-5 left-0 text-sm text-slate-700' : ''}`}>
                  Your Budget (optional)
                </label>
                <ErrorMessage
                  className="text-red-500 absolute right-0 text-sm"
                  name="budget"
                  component="p"
                />
              </div>
              <div className="mt-8 mb-4 relative">
                <Field
                  as="textarea"
                  className={`appearance-none border-b-2 border-white w-full py-2 peer text-slate-50 font-rubik leading-tight focus:outline-none focus:border-gray-500 bg-transparent ${errors.description && touched.description
                    ? "border-red-500"
                    : ""
                    }`}
                  type="text"
                  name="description"
                  id="description"
                />
                <label htmlFor="description" className={`absolute top-2 left-1 peer-focus:-top-5 peer-focus:left-0 font-rubik text-slate-500  peer-focus:text-slate-700 peer-focus:text-sm duration-300 peer-focus ${getFieldProps('description').value ? '-top-5 left-0 text-sm text-slate-700' : ''}`}>
                  Your Project Description
                </label>
                <ErrorMessage
                  className="text-red-500 absolute right-0 text-sm"
                  name="description"
                  component="p"
                />
              </div>
              <div className="text-center">
                <button
                  className="bg-transparent hover:bg-gray-500 text-slate-50 font-rubik hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded w-full mt-4"
                  type="submit"
                >
                  <CheckSubmit />
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
