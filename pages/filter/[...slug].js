import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarsList from "../../components/templates/CarsList";

function FilteredCars() {
  const router = useRouter();

  const [min, max] = router.query.slug || [];

  const filteredData = carsData.filter((car) => car.price > min && car.price < max);

  if (!filteredData.length) return <h3>No cars found</h3>;

  return <CarsList data={filteredData} />;
}
export default FilteredCars;
