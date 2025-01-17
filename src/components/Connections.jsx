/* eslint-disable no-unused-vars */
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connection);
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnection(res.data.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) {
    return;
  }

  if (connections.length === 0) {
    return (
      <h1 className="text-white text-2xl text-bold text-center my-10">
        No connections found! Make connections :)
      </h1>
    );
  }

  return (
    <div className="text-center my-10 pb-40">
      <h1 className="text-white text-2xl text-bold text-center">Connections</h1>
      {connections.map((connection) => {
        const {
          _id,
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,
          skills,
        } = connection;

        return (
          <div
            key={_id}
            className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
          >
            <div>
              <img
                className="w-20 h-20 rounded-full"
                alt="photo"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}{" "}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
              <p>{skills.join(", ")}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
