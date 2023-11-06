import { useCollection } from "../hooks/useCollection";

// components
import Icon from "./Icon";

// styles
import "./Friends.scss";

export default function OnlineUsers() {
  const { isPending, error, documents } = useCollection("users");

  return (
    <div className="user-list">
      <h3>Friends Online:</h3>
      {isPending && <div>Loading users...</div>}
      {error && <div>{error}</div>}
      {documents &&
        documents.map((user) => (
          <div key={user.id} className="user-list-item">
            {user.online && <span className="friendsOnline"></span>}
            <span>{user.displayName}</span>
            <Icon src={user.photoURL} />
          </div>
        ))}
    </div>
  );
}
