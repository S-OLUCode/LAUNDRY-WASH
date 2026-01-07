import { Link, useNavigate } from "react-router";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Link to="/">
        <img src="/LogoOne.svg" className=""  onClick={() => navigate("/")}/>
        </Link>
      </div>
    </>
  );
}
