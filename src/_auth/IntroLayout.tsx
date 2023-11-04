import { Outlet, Navigate } from "react-router-dom";



export default function IntroLayout() {
  
  return (
    <>
        <>
          <section className="flex flex-1 flex-col py-10 bg-[#ececec]" >
            <Outlet />
          </section>

        </>
    </>
  );
}
