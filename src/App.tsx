import axios from "axios";
import { UserCard } from "./components/UserCard";
import { User } from "./types/api/user";
import { useState } from "react";
import { UserProfile } from "./types/userProfile";

export default function App() {
const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

  const onClickFetchUser = () => {
    setLoading(true);
    setError(false);
    axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      const data = res.data.map((user) => ({
        id: user.id,
        name: `${user.name}(${user.username})`,
        email: user.email,
        //addres: `${user.address.city}${user.address.suite}${user.address.street}`,
        address: user.address.street + user.address.suite + user.address.city, // 文字列結合
      }));
      setUserProfiles(data);
    })
    .catch(() =>{
      setError(true);
    })
    .finally(() =>{
      setLoading(false);
    });
};

  return(
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ?(
        <p style={{color: "red"}}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ): (
        <>
        {userProfiles.map((user) =>(
      <UserCard key={user.id} user={user} />
      ))}
        </>
      )}
    </div>
  );
};