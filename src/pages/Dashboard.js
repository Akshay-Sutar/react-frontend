import ItemList from "../components/item/ItemsList";

const Dashboard = (props) => {
  return (
    <section className="Form my-4 mx-5">
      <div className="container">
        <div className="row g-0">
          <ItemList />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
