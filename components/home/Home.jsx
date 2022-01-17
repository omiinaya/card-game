import CardCreate from '../cardCreate/CardCreate'

export default function Home(props) {
  const { user, origin } = props.data;
  console.log(user);
  return (
    <div className="container">
      <main>
        <h1 className="title">Hello world!</h1>
        <CardCreate />
        {user && (
          <div>
            {"User ID: "}
            {user.id}
          </div>
        )}
      </main>
    </div>
  );
}
