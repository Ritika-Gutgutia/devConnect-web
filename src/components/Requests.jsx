/* eslint-disable no-unused-vars */
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReqeust, removeRequest } from "../utils/requestSlice";

const Requests = () => {
  const requests = useSelector((store) => store.request);
  const dispatch = useDispatch();

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/request/received", {
        withCredentials: true,
      });
      dispatch(addReqeust(res.data.data));
      console.log(res.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review" + "/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(res.data.data._id));
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) {
    return;
  }

  if (requests.length === 0) {
    return (
      <h1 className="text-bold text-white text-2xl text-center my-10">
        {" "}
        No Connection Requests found!
      </h1>
    );
  }

  return (
    <div className="my-10">
      <h1 className="text-center text-bold text-white text-2xl text-bold">
        {" "}
        Connection Requests
      </h1>
      {requests.map((request) => {
        const requestId = request._id;
        const { firstName, lastName, age, photoUrl, about, gender, skills } =
          request.fromUserId;

        return (
          <div
            key={requestId}
            className="flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-2/3 mx-auto"
          >
            <div className="flex items-center">
              <div>
                <img
                  className="w-20 h-20 rounded-full"
                  alt="photo"
                  src={photoUrl}
                />
              </div>
              <div className="text-left mx-4">
                <h2 className="font-bold text-xl">
                  {firstName + " " + lastName}
                </h2>
                {age && gender && <p>{age + ", " + gender}</p>}
                <p>{about}</p>
                <p>{skills.join(", ")}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                className="btn btn-primary"
                onClick={() => reviewRequest("accepted", requestId)}
              >
                Accept
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => reviewRequest("rejected", requestId)}
              >
                Reject
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
