import Company from "@/components/company";

export default async function SelectCompany() {
  const res = await fetch("https://www.azki.com/api/product/third/companies");
  const data: Insurance[] = await res.json();
  return <Company data={data} />;
}
