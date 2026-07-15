import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "../../../components/ui/button";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  businessType: string;
  message: string;
}

const businessTypes = [
  "Barbershop",
  "Hair Salon",
  "Nail Salon",
  "Beauty Studio",
  "Spa",
  "Other",
];

const inputStyle =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-bolts-blue";

const ContactForm: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      businessType: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      companyName: Yup.string().required("Business name is required"),
      businessType: Yup.string().required("Business type is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      const subject = encodeURIComponent("New Inquiry from Boltnex Website");
      const body = encodeURIComponent(
        `Hi Boltnex Team,

A new contact form submission came in:

───────────────────────────────
Name: ${values.firstName} ${values.lastName}
Email: ${values.email}
Business: ${values.companyName}
Business type: ${values.businessType}
───────────────────────────────

Message:
${values.message}
`
      );

      window.location.href = `mailto:support@boltnex.com?subject=${subject}&body=${body}`;
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-3xl flex h-full flex-col gap-5 p-6 justify-between w-full"
    >
      {/* First Name & Last Name */}
      <article className="flex items-start gap-x-6 max-sm:flex-col max-sm:gap-y-4">
        <div className="w-full">
          <input
            type="text"
            id="firstName"
            {...formik.getFieldProps("firstName")}
            placeholder="First Name"
            className={inputStyle}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.firstName}</p>
          )}
        </div>

        <div className="w-full">
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            {...formik.getFieldProps("lastName")}
            className={inputStyle}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.lastName}</p>
          )}
        </div>
      </article>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Email Address"
          id="email"
          {...formik.getFieldProps("email")}
          className={inputStyle}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
        )}
      </div>

      {/* Business Name & Type */}
      <article className="w-full flex items-start gap-x-6 max-sm:flex-col max-sm:gap-y-4">
        <div className="w-full">
          <input
            type="text"
            id="companyName"
            placeholder="Business Name"
            {...formik.getFieldProps("companyName")}
            className={inputStyle}
          />
          {formik.touched.companyName && formik.errors.companyName && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.companyName}
            </p>
          )}
        </div>

        <div className="w-full">
          <select
            id="businessType"
            {...formik.getFieldProps("businessType")}
            className={`${inputStyle} ${
              formik.values.businessType ? "text-black" : "text-black/40"
            }`}
          >
            <option value="" disabled>
              Business Type
            </option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {formik.touched.businessType && formik.errors.businessType && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.businessType}
            </p>
          )}
        </div>
      </article>

      {/* Message */}
      <div>
        <textarea
          id="message"
          placeholder="Tell us a bit about your business"
          {...formik.getFieldProps("message")}
          rows={4}
          className={`${inputStyle} resize-none`}
        />
        {formik.touched.message && formik.errors.message && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-fit ml-auto">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
