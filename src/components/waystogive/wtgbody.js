import React, { useState } from "react";
import "./wtgbody.css";
// import First from "../../../public/wtg/B3058396-1EC0-4915-A8EE-48A563579A49-1.png";
function WtgBody() {
  const [selectedFund, setSelectedFund] = useState("general");

  const handleFundButtonClick = (fund) => {
    setSelectedFund(fund);
  };

  return (
    <section>
      <div className="container">
        <h1>Ways To Give</h1>
        <h4>GIVING GENEROUSLY AS TOGETHER WE ENGAGE IN MISSION</h4>
        <p>
          Set up your one-time or recurring gifts quickly and easily by 1)
          choosing the site you call home and 2) choosing the Fund you want to
          direct your gift to.
        </p>
      </div>

      <div className=" container d-grid gap-4 d-md-flex justify-content-md-evenly my-3 ">
        <a class="btn btn-warning readmore btn-lg" href="#" role="button">
          TITHE/OFFERING
        </a>
        <a class="btn btn-warning readmore btn-lg" href="#" role="button">
         WELFARE
        </a>
        <a class="btn btn-warning readmore btn-lg" href="#" role="button">
          CHURCH PROJECTS
        </a>
        <a class="btn btn-warning readmore btn-lg" href="#" role="button">
          TRANSPORTATION
        </a>
      </div>
      <div class="container text-center justify-content-md-center">
        <div class="row">
          <div class="col-sm-4">
            <img
              src="/wtg/cash.png"
              alt=""
              style={{ height: "254.398px", width: "247.844px" }}
            />
            <h3>CASH / CHEQUE</h3>
            <p className="text-center">Give In Service</p>
          </div>
          <div class="col-sm-4">
            <img
              src="/wtg/interac.png"
              alt=""
              style={{ height: "254.398px", width: "247.844px" }}
            />
            <h3>INTERAC</h3>
            <p className="text-center">Give at Giving Station in Lobby</p>
          </div>
          <div class="col-sm-4">
            <img
              src="/wtg/online.png"
              alt=""
              style={{ height: "254.398px", width: "247.844px" }}
            />
            <h3>ONLINE</h3>
            <p className="text-center">
              Using the above buttons, choose the site you call home
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <img
              src="/wtg/texttogive.png"
              alt=""
              style={{ height: "254.398px", width: "247.844px" }}
            />
            <h3>TEXT-TO-GIVE</h3>
            <p className="text-center">Text "THE-FATHERS-CHURCH" To 77977</p>
          </div>
          <div class="col-sm">
            <img
              src="/wtg/app.png"
              alt=""
              style={{ height: "254.398px", width: "247.844px" }}
            />
            <h3>APP</h3>
            <p className="text-center">Tap "Give Online"</p>
          </div>
          <div class="col-sm">
            <img
              src="/wtg/etransfer.png"
              alt=""
              style={{ height: "254.398px", width: "247.844px" }}
            />
            <h3>E-TRANSFER</h3>
            <p className="text-center">
              Email offering@TheFathersChurch.com; be sure to specify your full
              name and email address in the comment field.
            </p>
          </div>
        </div>

        <div className=" justify-content-md-center my-3 ">
          <p className="text-center">
            Your Pushpay account helps you to view, track, and manage your
            giving. Donations of $20 or more annually will receive an emailed
            tax receipt at tax time.
          </p>
          <br />
          <a class="btn btn-lg btn-warning readmore" href="#" role="button">
            READ MORE ON TITHING
          </a>
        </div>
        <div className="switch">
          <h2>Funds</h2>
          <div class="d-grid gap-2 d-md-flex justify-content-md-center ">
            {/* <button class="btn btn-primary col-6" type="button">
              GENERAL FUND
            </button>
            <button class="btn btn-primary col-6" type="button">
              VISION FUND
            </button> */}
            <button
              className={`btn btn-warning readmore btn-lg col-6 ${
                selectedFund === "general" ? "active" : ""
              }`}
              type="button"
              onClick={() => handleFundButtonClick("general")}
            >
              GENERAL FUND
            </button>
            <button
              className={`btn btn-warning readmore btn-lg col-6 ${
                selectedFund === "vision" ? "active" : ""
              }`}
              type="button"
              onClick={() => handleFundButtonClick("vision")}
            >
              VISION FUND
            </button>
          </div>
          {/* <p>
            Gifts to the General Fund go directly to meet the organizational and
            congregational needs. It includes things like congregational care,
            utilities, salaries, and commitments to our Local/Global Partners.
            If giving is higher than our budgeted giving, we are able to do more
            care, ministry, and bless our Local and Global Partners. It accepts
            one time gifts and recurring gifts.
          </p>
          <p>
            Gifts to the Vision Fund carry major projects necessary to help
            reach Sanctus’ vision to be a regional church of 10,000 meeting the
            physical, emotional, and spiritual needs of people in Jesus’ name.
            Projects will be added to the Vision Fund as Sanctus Church’s needs
            evolve and change. The Vision Fund can accept one time gifts,
            recurring gifts, and pledges.
          </p> */}
            <div >
              {selectedFund === "general" && (
                <p>
                  <p>
                    Gifts to the General Fund go directly to meet the
                    organizational and congregational needs. It includes things
                    like congregational care, utilities, salaries, and
                    commitments to our Local/Global Partners.
                  </p>
                  <p>
                    If giving is higher than our budgeted giving, we are able to
                    do more care, ministry, and bless our Local and Global
                    Partners. It accepts one-time gifts and recurring gifts.
                  </p>
                </p>
              )}
              {selectedFund === "vision" && (
                <p>
                <p>
                  Gifts to the Vision Fund carry major projects necessary to
                  help reach The Father Church's vision to be a regional church of 10,000
                  meeting the physical, emotional, and spiritual needs of people
                  in Jesus’ name.
                  </p>
                  <p>
                   Projects will be added to the Vision Fund as
                  The Father Church needs evolve and change. The Vision Fund can
                  accept one-time gifts, recurring gifts, and pledges.
                </p>
                </p>
              )}
            </div>
        </div>
      </div>
    </section>
  );
}

export default WtgBody;
