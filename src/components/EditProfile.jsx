/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const { firstName, lastName, age, gender, photoUrl, skills, about } = user;
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const [profile, setProfile] = useState({
    firstName: firstName,
    lastName: lastName,
    age: age,
    gender: gender,
    photoUrl: photoUrl,
    skills: skills,
    about: about,
  });

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setProfile({
      ...profile,
      [fieldName]: value,
    });
  };

  const onSaveProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName: profile.firstName,
          lastName: profile.lastName,
          age: profile.age,
          photoUrl: profile.photoUrl,
          gender: profile.gender,
          skills: profile.skills,
          about: profile.about,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res.data.data));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl mx-10">
        <div className="card-body">
          <h2 className="card-title">Edit Profile</h2>
          <div>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">First Name </span>
              </div>
              <input
                type="text"
                name="firstName"
                value={profile.firstName}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => handleChange(e)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Last Name </span>
              </div>
              <input
                type="text"
                name="lastName"
                value={profile.lastName}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => handleChange(e)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Age </span>
              </div>
              <input
                type="text"
                name="age"
                value={profile.age}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => handleChange(e)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Gender </span>
              </div>
              <input
                type="text"
                name="gender"
                value={profile.gender}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => handleChange(e)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">PhotoUrl </span>
              </div>
              <input
                type="text"
                name="photoUrl"
                value={profile.photoUrl}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => handleChange(e)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Skills </span>
              </div>
              <input
                type="text"
                name="skills"
                value={profile.skills}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => handleChange(e)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">About </span>
              </div>
              <input
                type="text"
                name="about"
                value={profile.about}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>

          <div className="card-actions justify-end my-4">
            <button className="btn btn-primary" onClick={onSaveProfile}>
              Save Profile
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="card bg-base-300 w-96 shadow-xl">
          <figure>
            <img
              className="w-full h-60 object-cover"
              src={profile.photoUrl}
              alt="user"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{firstName + " " + lastName}</h2>
            {profile.age && profile.gender && (
              <p>{profile.age + ", " + profile.gender}</p>
            )}
            <p>{profile.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
