import React from 'react'

export default function About(props) {

    return (
      <div className="Container">
        <h1
          style={{ color: props.mode === "dark" ? "white" : "black" }}
          className="my-3"
        >
          About Me
        </h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
                style={{
                  backgroundColor: props.mode === "dark" ? "#1d1a1a" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                💗About the Creater of this revolutionary website
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
              style={{
                backgroundColor: props.mode === "dark" ? "gray" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <div
                className="accordion-body " style={{
                  backgroundColor: props.mode === "dark" ? "#2d6fd0" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <strong>
                  This website is controlled from outside of this universe.
                </strong>{" "}
                If you are a human being then be careful.This amazing website is
                controlled by aliens 👽.
                <code>...yes! Aliens 🐔</code>, ok. or jyada fekam fek ni.
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={{
              backgroundColor: props.mode === "dark" ? "#2d6fd0" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            <h2 className="accordion-header" id="headingTwo">
              <button
                style={{
                  backgroundColor: props.mode === "dark" ? "#1d1a1a" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Working of this website
              </button>
            </h2>
            <div
              style={{
                backgroundColor: props.mode === "dark" ? "gray" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "dark" ? "#2d6fd0" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <strong>Tm mujhe text do, mai tmhe operation krne dunga</strong>{" "}
                Yes, you see right, enter your text and check the different
                buttons functionality and below informations. It must be helpful
                for you.
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: props.mode === "dark" ? "#2d6fd0" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="accordion-item"
          >
            <h2 className="accordion-header" id="headingThree">
              <button
                style={{
                  backgroundColor: props.mode === "dark" ? "#1d1a1a" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Connect to Aliens
              </button>
            </h2>
            <div
              style={{
                backgroundColor: props.mode === "dark" ? "#2d6fd0" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Na Na Na..</strong> Don't Take risk to contact
                ..ok..tata..bye..bye..khaatm ab..app use kro
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
