const inputData = {
  page1: [
    { label: "Date", type: "date", name: "date", required: true },
    { label: "Time", type: "time", name: "time", required: true },
    {
      label: "Number of Diners",
      type: "number",
      name: "diners",
      required: true,
    },
    {
      label: "Occasion",
      type: "dropdown",
      name: "occasion",
      required: true,
      options: ["Birthday", "Anniversary", "Casual"],
    },
    {
      label: "Seating Options",
      type: "radio",
      name: "seating",
      required: true,
      options: ["Standard", "Outside"],
    },
  ],
  page2: [
    { label: "First Name", type: "text", name: "firstName", required: true },
    { label: "Last Name", type: "text", name: "lastName", required: true },
    { label: "Phone Number", type: "tel", name: "phone", required: true },
    { label: "Email", type: "email", name: "email", required: true },
    { label: "Password", type: "password", name: "password", required: true },
    {
      label: "Special Request",
      type: "text",
      name: "specialRequest",
      required: false,
    },
  ],
};

export default inputData;
