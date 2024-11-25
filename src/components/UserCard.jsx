/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, about, gender, skills } = user;
  console.log(user, "photoUrl", firstName);
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-xl">
        <figure>
          <img src={photoUrl} alt="user" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <p>{age + ", " + gender}</p>}
          <p>{about}</p>
          <div className="card-actions justify-center my-4">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
