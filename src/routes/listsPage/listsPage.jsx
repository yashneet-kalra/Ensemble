import { useParams } from "react-router-dom";
import List from "../../components/lists/lists";

const ListsPage = () => {
  const {buid} = useParams();
  return (
    <>
    <List buid={buid} />
    </>
  );
};

export default ListsPage;
