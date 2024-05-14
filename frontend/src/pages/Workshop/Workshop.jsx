import TopMain from "../../components/TopMain/TopMain";
import Ateliers from "../../components/all_workshop/Ateliers";

export default function Workshop() {
  return (
    <div>
      <TopMain title="Workshop" description="Venez découvrir nos ateliers !" />
      <Ateliers />
    </div>
  );
}
