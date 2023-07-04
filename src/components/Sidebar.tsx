import { sideBar } from "../data";
import CircleBtn from "./CircleBtn";

const Sidebar = ({ currentIndex }: { currentIndex: number }) => {
  return (
    <div className="grid min-w-fit">
      <div className="col-span-full w-full sm:hidden">
        <img
          src="./images/bg-sidebar-mobile.svg"
          alt="bg-sidebar-image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="hidden sm:block col-span-full">
        <img
          src="./images/bg-sidebar-desktop.svg"
          alt="bg-sidebar-image"
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
      <div className="col-span-full absolute flex sm:flex-col gap-4 sm:gap-8 justify-self-center sm:justify-self-start py-8 sm:py-10">
        {sideBar.map((item, idx) => (
          <div className="flex gap-4 sm:ml-8 items-center" key={idx}>
            <CircleBtn currentIndex={currentIndex} idx={idx} />
            <div>
              <p className="hidden sm:block uppercase text-text-number text-xs">
                Step {idx + 1}
              </p>
              <p className="hidden sm:block uppercase text-base font-bold text-white">
                {item}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
