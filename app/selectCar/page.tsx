import CarType from "@/components/carType";

export default async function selectCar() {
  let res: Response = await fetch(
    "https://www.azki.com/api/product/vehicle/types"
  );
  let data: Car[] = await res.json();

  return <CarType data={data} />;
}
