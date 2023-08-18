import Discounts from "@/components/discounts";

export default async function DiscountsPage() {
  const res = await fetch(
    "https://www.azki.com/api/product/third/third-discounts"
  );
  const data: Discount[] = await res.json();
  return <Discounts data={data} />;
}
