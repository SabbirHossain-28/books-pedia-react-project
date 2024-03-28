import { useState } from "react";

const UserFeedBack = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = e.target.feedback.value;
    const email = e.target.email.value;
    const name = e.target.name.value;
    setMessage(message);
    setEmail(email);
    setName(name);
    console.log(message);
    console.log("form submited");
  };
  return (
    <div className="max-w-7xl mx-auto mb-8">
      <div className="flex flex-col justify-center items-center text-center mt-8 mb-6 p-4 bg-[#1313130D] rounded-lg">
        <h2 className="text-[#131313] text-3xl font-playfair font-bold mb-3">
          Share Your Thoughts with BooksPedia!
        </h2>
        <p className="font-work text-[#131313CC] ">
          Join the conversation and let your voice be heard! At BooksPedia, we
          value your feedback. Share your opinions, suggestions, and experiences
          with us. Your input helps us improve and better serve our community of
          book lovers. Together, let make BooksPedia the ultimate destination
          for book enthusiasts worldwide.
        </p>
      </div>
      <div className="p-6">
        <form onSubmit={handleSubmit}>
          <label className="form-control mb-2">
            <div className="label">
              <span className="label-text text-[#131313] font-work text-lg ">
                Send your valuable user experience feedback
              </span>
              <span className="label-text-alt text-red-700">
                *Please fill all the input field
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered h-40"
              placeholder="FeedBack Message"
              name="feedback"
            ></textarea>
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              name="email"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Username"
              name="name"
            />
          </label>
          <input
            onClick={() => document.getElementById("my_modal").showModal()}
            type="submit"
            value="Send"
            className="border px-6 py-2 text-lg font-work font-medium bg-[#23BE0A] text-white rounded-lg"
          />
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <dialog
            id="my_modal"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box ">
              <h3 className="font-bold text-2xl font-work">Thank You</h3>
              <p className="py-4 text-xl text-[#59C6D2] font-work">
                Your FeedBack message is submited successfully
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn bg-[#59C6D2]">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </form>
      </div>
      <div>
        <div className="border p-5 font-work rounded-lg text-lg space-y-2">
          <h2>Message: {message}</h2>
          <h2>Email: {email}</h2>
          <h2>Name{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default UserFeedBack;
