import React from "react";
import "./policy.scss";

const PrivacyPolicy = () => {
  return (
    <div className="policyContainer">
      <div className="policy">
        <h1>Privacy Policy</h1>
        <p>Last updated: 20 Aug 2023</p>
        <p>
          <strong>1. Introduction</strong>
          <br />
          Welcome to MarathiSarvaPooja.com! This Privacy Policy outlines how we
          handle and protect your personal information when you use our website.
          This policy is in accordance with the relevant laws and regulations,
          including the Information Technology Act, 2000, and its amendments. It
          applies solely to MarathiSarvaPooja.com and is subject to applicable
          laws. By using our website, you consent to the terms described in this
          Privacy Policy.
        </p>
        <p>
          <strong>2. Information We Collect</strong>
          <br />
          We may collect certain information from you to provide our services
          effectively. This includes:
          <ul>
            <li>
              Contact Information: Your name, email address, phone number, and
              mailing address.
            </li>
            <li>
              Account Details: User ID, password, and security question for your
              registered account.
            </li>
            <li>
              Demographic Information: Postcode, preferences, and interests.
            </li>
            <li>
              Birthdate and Astrological Information: For personalized services.
            </li>
            <li>
              Other Information: Any additional details you provide related to
              the services.
            </li>
          </ul>
        </p>
        <p>
          <strong>3. How We Use Collected Information</strong>
          <br />
          We use the collected information for the following purposes:
          <ul>
            <li>
              Customization: Personalizing your experience and communications.
            </li>
            <li>
              Communication: Sending booking confirmations, payment details, and
              service feedback.
            </li>
            <li>
              Contact: Using your phone number as an alternative method to reach
              you.
            </li>
            <li>
              Address: Providing the service provider with relevant delivery or
              service details.
            </li>
            <li>
              Payment Information: Securely processing payments for services
              availed.
            </li>
            <li>
              Service Improvement: Requesting feedback to enhance our offerings.
            </li>
            <li>
              Promotions: Sending promotional information related to our
              services.
            </li>
          </ul>
        </p>
        <p>
          <strong>4. Information Disclosure</strong>
          <br />
          We may share your information in these cases:
          <ul>
            <li>
              Technical Support: Sharing with third parties to diagnose
              technical issues and improve services.
            </li>
            <li>
              Legal Compliance: If required by law, court order, or legal
              process.
            </li>
            <li>
              Cookies: Our website uses cookies for technical administration and
              service enhancement.
            </li>
            <li>
              Third-Party Links: We provide external links for user convenience;
              review their privacy policies.
            </li>
          </ul>
        </p>
        <p>
          <strong>5. Security Measures</strong>
          <br />
          We implement industry-standard security measures to safeguard your
          information from unauthorized access, disclosure, or loss, as mandated
          by Section 8 of the Information Technology Act.
        </p>
        {/* ... Continue adding the remaining sections ... */}
        <div>
          <p>
            <strong>10. Contact Us</strong>
            <br />
            For any inquiries or clarifications regarding this Privacy Policy,
            please reach out to us at marathisarvapooja@gmail.com.
          </p>
        </div>
        <p>
          <em>
            Please note that this Privacy Policy may be subject to updates. We
            encourage you to review it periodically to stay informed about how
            we protect your information.
          </em>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
