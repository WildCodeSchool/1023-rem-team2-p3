import Ateliers from "../../components/all_workshop/Ateliers";

export default function Workshop() {
  return (
    <div className=" z-10">
      <div className="flex flex-col ">
        <h1 className=" text-3xl md:text-7xl font-secondary-font text-center  bg-gradient-to-t from-gradient-color2  via-gradient-color3 to-gradient-color1 text-transparent bg-clip-text font-bold ">
          Workshop
        </h1>
        <p className="text-base font-secondary-font text-white  pt-5 md:pl-40 md:pr-40 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          repellat, illum temporibus obcaecati aperiam sit officiis in alias,
          aliquam sed voluptas. Minus, ex harum enim voluptate dolore optio amet
          aliquam!
        </p>
      </div>
      <Ateliers />
    </div>
  );
}
