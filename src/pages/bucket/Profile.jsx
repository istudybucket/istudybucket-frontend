import React from "react";
import ModalBase from "../../modals";
import Button from "../../__sub__/Button";
import Card from "../../__sub__/Card";

const Profile = ({ name, img, description, ...props }) => {
    const [showModal, setShowModal] = React.useState(true)
  return showModal && (
      <div className={showModal && "fixed top-5 left-0 w-full h-screen flex justify-center items-center backdrop-filter backdrop-blur backdrop-brightness-50 z-40" || ""}
      >
          <div
				id="overlay"
				onClick={()=>setShowModal(false)}
				className="absolute h-screen w-full -z-10"
			/>
          <Card
          className="border text-center mt-3 w-1/2 rounded-md pb-4 bg-white z-50"
          {...props}
        >
          <div className="w-full h-10 bg-green-400 rounded-t-md"></div>
          <div className="flex my-3 flex-row justify-center">
            <img className="rounded-full h-40 w-40" src={img} alt={img.slice(14)} />
          </div>
          <h1 className="font-bold self-center ml-3">{name}</h1>
          <Button name="Request to join" type="button" />
          <p className="text-gray-500 select-all">{description}</p>
        </Card>
  
      </div>

  );
};

export default Profile;
