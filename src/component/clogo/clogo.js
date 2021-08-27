import "../../containers/header.css"; 
export function MyLogo() {
  return (
    <>
      <img
        className="myImage"
        src={process.env.PUBLIC_URL + "/copmpany_logo.png"}
        alt="hhh"
      />
    </>
  );
}
