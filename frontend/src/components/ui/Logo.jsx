import LogoImage from "../../assets/logo/amberfeetzlogo.png";

export function Logo({ className = "", ...props }) {
  return (
    <div className={className} {...props}>
        <img src={LogoImage} alt="amberfeetz logo" className="pb-0 pt-1 h-1/3 w-1/3 text-center justify-center items-center mx-auto" />
    </div>
  );
}
