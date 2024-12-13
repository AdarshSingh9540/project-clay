'use client'

import { useState } from "react";
import GridPattern from "../ui/grid-pattern";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const FormComponent = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = { name: '', email: '', phone: '', message: '' };
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.message) newErrors.message = "Message is required.";

    if (newErrors.name || newErrors.email || newErrors.phone || newErrors.message) {
      setErrors(newErrors);
      return;
    }

    setErrors({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    fetch(process.env.NEXT_PUBLIC_SHEET_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div id="formcomponent" className="relative py-16 flex items-center justify-center px-4 sm:px-8">
      <GridPattern
        width={80}
        height={80}
        x={-1}
        y={-1}
        strokeDasharray={"0 0"}
        className="hidden lg:block absolute inset-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
      />
      <div className="absolute inset-0 overflow-hidden ">
        <svg
          className="w-full h-52 sm:h-80 md:h-full"
          viewBox="0 0 1920 727"
          preserveAspectRatio="none"
        >
          <use href="#svg279102376_25531"></use>
        </svg>
      </div>
      <div className="relative w-full max-w-xl p-6 sm:p-8 ">
        <h2 className="text-center text-xl font-semibold text-green-900 mb-6">
          Fill out the form, we&apos;ll reach out to you,
          <br className="hidden lg:block" />
          understand your requirements and find you a mentor!
        </h2>
        <form onSubmit={submit} className="space-y-4 sm:space-y-6 ">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              className="mt-1 sm:mt-2 block w-full rounded-full border-gray-300 shadow-sm focus:ring-green-600 focus:border-green-600 outline-blue-400 text-sm px-4 py-2 sm:py-3 placeholder-gray-500"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@framer.com"
              className="mt-1 sm:mt-2 block w-full rounded-full outline-blue-400 border-gray-300 shadow-sm focus:ring-green-600 focus:border-green-600 text-sm px-4 py-2 sm:py-3 placeholder-gray-500"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ph no."
              className="mt-1 sm:mt-2 block w-full rounded-full outline-blue-400 border-gray-300 shadow-sm focus:ring-green-600 focus:border-green-600 text-sm px-4 py-2 sm:py-3 placeholder-gray-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              How can we help?
            </label>
            <input
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your query"
              className="mt-1 sm:mt-2 block w-full rounded-full outline-blue-400 border-gray-300 shadow-sm focus:ring-green-600 focus:border-green-600 text-sm px-4 py-2 sm:py-3 placeholder-gray-500"
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 sm:py-3 bg-black text-cream-100 font-medium rounded-full shadow-md bg-gray-900 hover:bg-gray-800 transition"
          >
            Register now
          </button>
        </form>
      </div>
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 text-center shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Success!</h3>
            <p>Your message has been successfully submitted.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormComponent;
