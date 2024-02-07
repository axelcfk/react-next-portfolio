import Card from "./Card";

export default function Section2() {
  const leftSided = "flex justify-start w-full -mt-60";
  const rightSided = "flex  justify-end w-full -mt-20";

  return (
    <div id="card-container" className="flex flex-col  justify-center  ">
      <Card
        positioning={rightSided}
        imgUrl={"/images/App Pictures Sarah Dorweiler.jpg"}
      />
      <Card positioning={leftSided} imgUrl={"/images/Piqo Design App.jpg"} />
      <Card positioning={rightSided} imgUrl={"/images/Daniel Korpai App.jpg"} />
      <Card
        positioning={leftSided}
        imgUrl={"/images/App Pictures Sarah Dorweiler.jpg"}
      />
      <Card positioning={rightSided} imgUrl={"/images/Piqo Design App.jpg"} />
      <Card positioning={leftSided} imgUrl={"/images/Daniel Korpai App.jpg"} />
    </div>
  );
}
