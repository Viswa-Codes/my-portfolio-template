import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <main className="container mx-auto max-width section">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-dark-heading dark:text-light-heading font-bold mb-4">
        Let's build something together
      </h1>
      <p className="text-center text-content text-lg md:text-xl font-light mb-4">
        For any questions or opportunities, please drop a mail
      </p>
      <h3 className="text-center text-2xl md:text-3xl lg:text-5xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6 break-words">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
    </main>
  );
}

export default Contact;
