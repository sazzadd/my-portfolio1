import { IoHomeOutline } from "react-icons/io5";

const NavBar1 = () => {
  return (
    <div className="fixed max-w-[220px] z-50 top-[20px] left-1/2 translate-x-[-50%] flex justify-between items-center gap-2 py-3 px-5 bg-[#112836] rounded-full border border-[#38bdf8] ">
      <ul className="flex gap-5 text-white">
        <li>
          <a href="" className="hover:border hover:bg-[#38bdf8] rounded-full px-2 py-1 flex items-center">
            <span className="mr-1"><IoHomeOutline /></span> <span className="hidden md:block">Home</span>
          </a>
        </li>
        <li>
          <a href="" className="hover:border hover:bg-[#38bdf8] rounded-full px-0 md:px-2  py-1 flex items-center">
            <span className="mr-1"><IoHomeOutline /></span> <span className="hidden md:block">Home</span>
          </a>
        </li>
        <li>
          <a href="" className="hover:border hover:bg-[#38bdf8] rounded-full px-0 md:px-2 py-1 flex items-center">
            <span className="mr-1"><IoHomeOutline /></span> <span className="hidden md:block">Home</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar1;
<ul>
  <li>
    <a href=""></a>
  </li>
</ul>;
