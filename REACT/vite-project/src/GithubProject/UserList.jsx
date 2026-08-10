function UserList(props) {
  const { people } = props;

  return (
    <div style={{ padding: "0 20px" }}>
      {people.map((person) => (
        <div
          key={person.id}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px",
            borderBottom: "1px solid #333",
          }}
        >
          <img
            src={person.avatar_url}
            style={{ width: "50px", borderRadius: "50%" }}
          />
          <div style={{ marginLeft: "16px", flex: 1 }}>
            <div style={{ fontWeight: "bold" }}>{person.login}</div>
            
             <a
              href={person.html_url}
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "14px" }}
            >
              View profile
            </a>
          </div>
          <button>Follow</button>
        </div>
      ))}
    </div>
  );
}

export default UserList;