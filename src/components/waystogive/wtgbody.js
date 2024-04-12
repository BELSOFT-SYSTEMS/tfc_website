import React, { useState } from "react";
import "./wtgbody.css";
import { Button } from "react-bootstrap";
// import First from "../../../public/wtg/B3058396-1EC0-4915-A8EE-48A563579A49-1.png";
function WtgBody() {
  const [selectedFundSwitch, setSelectedFundSwitch] = useState("tithe-offering");
  const [selectedFundSwitch1, setSelectedFundSwitch1] = useState("general");

  const handleFundButtonClickSwitch = (fund) => {
    setSelectedFundSwitch(fund);
  };

  const handleFundButtonClickSwitch1 = (fund) => {
    setSelectedFundSwitch1(fund);
  };

  return (
    <section>
      <div className="container">
        <h1>Ways To Give</h1>
        <h4>GIVING GENEROUSLY AS TOGETHER WE ENGAGE IN MISSION</h4>
        <p>
          Set up your one-time or recurring gifts quickly and easily by
          <ul>
            <li>Choosing the site you call home</li>
            <li>Choosing the fund you want to direct your gift to.</li>
          </ul> 
        </p>
      </div>

      <div class="container text-center justify-content-md-center">
        <div className="switch">
          <div class="d-grid gap-2 d-md-flex justify-content-md-evenly ">
          <button
              className={`btn btn-warning readmore btn-lg col-6 ${
                selectedFundSwitch === "tithe-offering" ? "active" : ""
              }`}
              type="button"
              onClick={() => handleFundButtonClickSwitch("tithe-offering")}
            >
              TITHE/OFFERING
          </button>

          <button
              className={`btn btn-warning readmore btn-lg col-6 ${
                selectedFundSwitch === "welfare" ? "active" : ""
              }`}
              type="button"
              onClick={() => handleFundButtonClickSwitch("welfare")}
            >
              WELFARE
          </button>

          <button
              className={`btn btn-warning readmore btn-lg col-6 ${
                selectedFundSwitch === "church-projects" ? "active" : ""
              }`}
              type="button"
              onClick={() => handleFundButtonClickSwitch("church-projects")}
            >
              CHURCH PROJECTS
          </button>

          <button
              className={`btn btn-warning readmore btn-lg col-6 ${
                selectedFundSwitch === "transportation" ? "active" : ""
              }`}
              type="button"
              onClick={() => handleFundButtonClickSwitch("transportation")}
            >
              TRANSPORTATION
          </button>
          </div>

          <div >
              {selectedFundSwitch === "tithe-offering" && (
                <p>
                  <p>
                    Tithe & Offerings : Gifts to the General Fund go directly to meet the
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
              {selectedFundSwitch === "welfare" && (
                <p>
                <p>
                  Welfare : Gifts to the Vision Fund carry major projects necessary to
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
              {selectedFundSwitch === "church-projects" && (
                <p>
                  <p>
                    Church Projects : Gifts to the General Fund go directly to meet the
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
              {selectedFundSwitch === "transportation" && (
                <p>
                <p>
                  Transportation : Gifts to the Vision Fund carry major projects necessary to
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

      <div class="container text-center justify-content-md-center">

        {/* <div class="row">
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
        </div> */}
        {/* <div className=" justify-content-md-center my-3 ">
          <p className="text-center">
            Your Pushpay account helps you to view, track, and manage your
            giving. Donations of $20 or more annually will receive an emailed
            tax receipt at tax time.
          </p>
          <br />
          <a class="btn btn-lg btn-warning readmore" href="#" role="button">
            READ MORE ON TITHING
          </a>
        </div> */}
        
        <div className="switch1">
          <h2>Funds</h2>
          <div class="d-grid gap-2 d-md-flex justify-content-md-evenly ">
            
            <button
              className={`btn btn-warning readmore btn-lg col-6 ${
                selectedFundSwitch1 === "general" ? "active" : ""
              }`}
              type="button"
              onClick={() => handleFundButtonClickSwitch1("general")}
            >
              GENERAL FUND
            </button>
            <button
              className={`btn btn-warning readmore btn-lg col-6 ${
                selectedFundSwitch1 === "vision" ? "active" : ""
              }`}
              type="button"
              onClick={() => handleFundButtonClickSwitch1("vision")}
            >
              VISION FUND
            </button>
          </div>

            <div >
              {selectedFundSwitch1 === "general" && (
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
              {selectedFundSwitch1 === "vision" && (
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
