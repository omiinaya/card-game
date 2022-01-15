import UserNav from '../navigation/User';

export default function Home(props) {
  const { user, origin } = props.data;
  console.log(user)
  return (
    <div className="container">
      <main>
        <h1 className="title">
          Title
        </h1>
        <UserNav props={{ user: user }} />
        {user && <div>{'User ID: '}{user.id}</div>}
      </main>
    </div>
  );
}