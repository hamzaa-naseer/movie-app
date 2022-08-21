import React from "react";
import AddNew from "../components/Modal/AddNew";
import Genres from "../components/Genres/Genres";
import Movies from "../components/Movies/Movies";

function Dashboard() {
  //////////// Add New Modal ////////////
  const [addNewModal, setAddNewModal] = React.useState({ isVisible: false });

  const handleShowAddNewModal = () => {
    setAddNewModal({ isVisible: true });
  };

  const handleCloseModal = () => {
    setAddNewModal({ isVisible: false });
  };

  ///////////////////////////////////////
  return (
    <div className="Dashboard">
      <div className="container">
        <div className="row">
          <div id="leftColumn" className="col-sm-12 col-md-3">
            <Genres />
            <br></br>
            <AddNew
              modalTitle="Select Option"
              modalBody="Click on the data you want to add"
              showModal={addNewModal}
              onClickBtnAddNew={handleShowAddNewModal}
              handleCloseAddNewModal={handleCloseModal}
            />
          </div>
          <div id="rightColumn" className="col-sm-12 col-md-9">
            <Movies />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
