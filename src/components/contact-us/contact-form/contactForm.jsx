import "./contactForm.scss";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  const handleAnchorClick = () => {
    const form = document.getElementById("enquiry-form");
    form.submit();
  };

  return (
    <div className="login-box">
      <p>Enquiry Form</p>
      <form id="enquiry-form" onSubmit={handleSubmit}>
        <div className="user-box">
          <input required="" name="" type="text" />
          <label>Name</label>
        </div>
        <div className="user-box">
          <input required="" name="" type="password" />
          <label>Phone number</label>
        </div>
        <div className="user-box">
          <input required="" name="" type="text" />
          <label>Query regarding?</label>
        </div>
        <a onClick={handleAnchorClick}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
      <p>
        Don't have an account?{" "}
        <a href="" className="a2">
          Sign up!
        </a>
      </p>
    </div>
  );
};

export default ContactForm;
