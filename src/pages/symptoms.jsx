import React from "react";
import Doctor from "../assets/doctor.svg";

const Symptoms = () => {
  return (
    <div>
      <div className="flex items-start">
        <div className="w-2/3">
          <h1 className="text-3xl font-semibold">Symptoms</h1>
          <h2 className="text-xl font-medium pt-4 pb-2">
            What are the symptoms?
          </h2>
          <p className="text-[15px] text-[#5F6368] leading-[209%]">
            People may be sick with the virus for 1 to 14 days before developing
            symptoms. The most common symptoms of coronavirus disease (COVID-19)
            are fever, tiredness, and dry cough. Less common symptoms are aches
            and pains, sore throat, diarrhoea, conjuctivitis, headache, loss of
            taste or smell, a rash on skin or discolouration of fingers or toes.
            Serious symptoms are difficulty in brething or shortness of breath,
            chest pain or pressure, loss of speech movement. Most people (about
            80%) recover from the disease without needing special treatment.
            More rarely, the disease can be serious and even fatal. Older
            people, and people with other medical conditions (such as asthma,
            diabetes, or heart disease), may be more vulnerable to becoming
            severely ill.
          </p>
          <h2 className="text-xl font-medium pt-6 pb-2">
            How can I protect myself from Covid-19?
          </h2>
          <p className="text-[15px] text-[#5F6368] leading-[209%]">
            Coronavirus disease spreads primarily through contact with an
            infected person when they cough or sneeze. It also spreads when a
            person touches a surface or object that has the virus on it, then
            touches their eyes, nose, or mouth.
          </p>
        </div>
        <div className="w-1/3">
          <img className="w-full h-[457px]" src={Doctor} alt="Doctor" />
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
