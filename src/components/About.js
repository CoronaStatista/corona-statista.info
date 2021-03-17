import React from "react";
import "./Default.css";

function About() {
  return (
    <div>
      <div id="page-wrapper">
        <div id="featured" className="container">
          <h2>INFORMATION ABOUT CORONA</h2>
          <h3>Overview</h3>
          <br />
          <p class="text-left">
            Coronavirus disease (COVID-19) is an infectious disease caused by a
            newly discovered coronavirus.
          </p>
          <p class="text-left">
            Most people infected with the COVID-19 virus will experience mild to
            moderate respiratory illness and recover without requiring special
            treatment. Older people, and those with underlying medical problems
            like cardiovascular disease, diabetes, chronic respiratory disease,
            and cancer are more likely to develop serious illness.{" "}
          </p>
          <p class="text-left">
            The best way to prevent and slow down transmission is to be well
            informed about the COVID-19 virus, the disease it causes and how it
            spreads. Protect yourself and others from infection by washing your
            hands or using an alcohol based rub frequently and not touching your
            face.
          </p>
          <p class="text-left">
            The COVID-19 virus spreads primarily through droplets of saliva or
            discharge from the nose when an infected person coughs or sneezes,
            so it’s important that you also practice respiratory etiquette (for
            example, by coughing into a flexed elbow).{" "}
          </p>
          <br />
          <h3>Prevention</h3>
          <br />
          <p class="text-left">
            To prevent infection and to slow transmission of COVID-19, do the
            following:
          </p>
          <p class="text-left">
            - Wash your hands regularly with soap and water, or clean them with
            alcohol-based hand rub.
          </p>
          <p class="text-left">
            - Maintain at least 1 metre distance between you and people coughing
            or sneezing.
          </p>
          <p class="text-left">- Avoid touching your face.</p>
          <p class="text-left">
            - Cover your mouth and nose when coughing or sneezing.
          </p>
          <p class="text-left">- Stay home if you feel unwell.</p>
          <p class="text-left">
            - Refrain from smoking and other activities that weaken the lungs.
          </p>
          <p class="text-left">
            - Practice physical distancing by avoiding unnecessary travel and
            staying away from large groups of people.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
