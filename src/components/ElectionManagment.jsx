import React from "react";
import electionManagementImage from "../assets/electionManagement.png"; // Replace with your left-side image path

const ElectionManagment = () => {
  return (
    <div className="flex justify-center w-full items-center bg-[#ef444400]">
      <div className="flex flex-col w-full items-center">
        <div className="w-full flex justify-center items-center p-4">
          <img
            src={electionManagementImage}
            alt="Election Management"
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-full flex flex-col shadow-lg rounded-lg overflow-hidden p-20">
          <p>
            By the dedicated use of Information and Communications Technology,
            ECI has ushered in the era of greater participation and involvement
            of citizens in the election process. General Election 2019 is
            witnessing the inclusion of mobile technologies in overall voter
            engagement and internal planning in a big way. One of the core
            activities of the ECI is to bring confidence to voters about
            Electronic Voting Machines. In that view, the Election Commission Of
            India Launched EMS (EVM Management System) Application. The EVM
            Management System offers transparency and ensures that there is no
            manual intervention at any level from the manufacturer to the
            polling stations.
          </p>
          <br />
          <p>
            EVM Management System is designed to manage the inventory of EVM
            units. Tracking of units from manufacturer to state, state to state,
            district to district. ECI always ensures a highly secure,
            non-interrupted, and non-manipulated distribution of machines from
            one place to another place and EMS fulfills the purpose of ECI. EMS
            is designed in a way where all the records are kept from the
            production of machines, order generation by ECI / CEO, sent from the
            location of the sender, and received at the location of the
            receiver.
          </p>
          <br />
          <p>
            EMS handles the initial process of testing of machines for the
            election called First Level Check (FLC) of machines and keeps track
            of which machines are ready for conducting polls. District-wise
            information of First Level Check like FLC start date, end date, how
            many engineers were deployed for FLC, who was the supervisor of FLC
            from the manufacturer and from districts are captured in EMS along
            with the status of the machine as FLC ok or defective. EMS handles
            the whole election process like marking FLC (First Level Check) Ok
            and Not OK, Marking machines for awareness, Randomization (First and
            Second), Defective Marking, Marking & Unmarking EP, and receiving
            back units in the system after counting. The EMS Application had
            successfully been used for handling the complete end-to-end
            movement.
          </p>
          <br />
          <p className="font-bold">
            Here are some of the benefits of using the EMS portal of the
            Election Commission of India:
          </p>
          <li>
            It helps to track the movement and placement of EVMs, which helps to
            ensure that they are not tampered with.
          </li>
          <li>
            It helps to generate reports on the status of EVMs, which helps to
            identify any problems that may need to be addressed.
          </li>
          <li>
            It helps to manage the randomization of EVMs, which helps to ensure
            that they are used in a fair and impartial manner.
          </li>
          <li>
            Physical verification of EVMs to verify the complete inventory of
            every warehouse.
          </li>
          <br/>
          <p>The EVM Management System is a valuable tool for the Election Commission of India in ensuring the smooth and efficient conduct of elections in India. The system has helped to improve the transparency and accountability of the electoral process, and it has also helped to protect the integrity of elections.</p>
        </div>
      </div>
    </div>
  );
};

export default ElectionManagment;
