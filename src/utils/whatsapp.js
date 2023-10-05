export const whatsappData = () => {
  var phoneNumber = "7899148582"; // Replace with the phone number

  var whatsappUrl = "https://api.whatsapp.com/send?phone=" + phoneNumber;

  window.location.href = whatsappUrl;
};
