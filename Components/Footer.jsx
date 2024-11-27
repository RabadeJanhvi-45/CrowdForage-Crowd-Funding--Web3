import React from "react";

const Footer = () => {
  const productLists = ["Market", "ERC20 Token", "Donation"];
  const contactList = [
    "support@cryptoforge.com",
    "info@example.com",
    "Contact us",
  ];
  const usefulLink = ["Home", "About", "Company Bio"];

  return (
    <footer className="text-center text-black  lg:text-left"
    style={{ backgroundColor: 'rgba(234, 243, 250, 255)' }}>
      {/* <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Crypto Forage
            </h6>
            <p>
              Crypto Forage is a decentralized platform empowering users to explore, trade, and contribute to blockchain technology. Whether you're looking for tokenized assets, secure donations, or innovative blockchain solutions, we make it simple and accessible for everyone.
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            {productLists.map((el, i) => (
              <p className="mb-4" key={i + 1}>
                <a href="#!" className="hover:underline">{el}</a>
              </p>
            ))}
          </div>
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Useful Links
            </h6>
            {usefulLink.map((el, i) => (
              <p className="mb-4" key={i + 1}>
                <a href="#!" className="hover:underline">{el}</a>
              </p>
            ))}
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            {contactList.map((el, i) => (
              <p className="mb-4" key={i + 1}>
                <a href="#!" className="hover:underline">{el}</a>
              </p>
            ))}
          </div>
        </div>
      </div> */}
      <div className="backgroundMain p-6 text-center"
      style={{ backgroundColor: 'rgba(234, 243, 250, 255)' }}>
        
        <span>Designed and Developed by Janhvi Rabade</span>
      </div>
    </footer>
  );
};

export default Footer;
