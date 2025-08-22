import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container border-top pt-5 p-5">
        <div className="row mb-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              className="img-fluid"
              alt=""
              style={{ maxWidth: "125px" }}
            />
            <p className="mt-4 mb-4">
              © 2010 - 2025, Zerodha Broking Ltd. <br /> All rights reserved.
            </p>
            <ul className="d-flex gap-3 p-0">
              <li>
                <i className="fa-brands fa-square-facebook fs-4"></i>
              </li>
              <li>
                <i className="fa-brands fa-whatsapp fs-4"></i>
              </li>
              <li>
                <i className="fa-brands fa-linkedin fs-4"></i>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2 className="fs-5 mb-4">Account</h2>
            <div className="d-flex flex-column gap-2">
              <a href="">Open demat account</a>
              <a href="">Minor demat account</a>
              <a href="">NRI demat account</a>
              <a href="">Commodity</a>
              <a href="">Dematerialisation</a>
              <a href="">Fund transfer</a>
              <a href="">MTF</a>
              <a href="">Referral program</a>
            </div>
          </div>
          <div className="col">
            <h2 className="fs-5 mb-4">Support</h2>
            <div className="d-flex flex-column gap-2">
              <a>Contact us</a>
              <a>Support portal</a>
              <a>How to file a complaint?</a>
              <a>Status of your complaints</a>
              <a>Bulletin</a>
              <a>Circular</a>
              <a>Z-Connect blog</a>
              <a>Downloads</a>
            </div>
          </div>
          <div className="col">
            <h2 className="fs-5 mb-4">Company</h2>
            <div className="d-flex flex-column gap-2">
              <a href="">About</a>
              <a href="">Philosophy</a>
              <a href="">Press & media</a>
              <a href="">Careers</a>
              <a href="">Zerodha Cares (CSR)</a>
              <a href="">Zerodha.tech</a>
              <a href="">Open source</a>
            </div>
          </div>
          <div className="col">
            <h2 className="fs-5 mb-4">Quick links</h2>
            <div className="d-flex flex-column gap-2">
              <a href="">Upcoming IPOs</a>
              <a href="">Brokerage charges</a>
              <a href="">Market holidays</a>
              <a href="">Economic calendar</a>
              <a href="">Calculators</a>
              <a href="">Markets</a>
              <a href="">Sectors</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text-muted" style={{ fontSize: "0.7rem" }}>
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt.
              Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered
              Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars
              Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to
              complaints@zerodha.com, for DP related to dp@zerodha.com. Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>
            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>
            <p>
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </p>

            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>

            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>

            <p>
              India's largest broker based on networth as per NSE. NSE broker
              factsheet
            </p>

            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please create a ticket here
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
