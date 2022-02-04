import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddItem.css";

const AddItem = (props) => {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  const itemNameRef = useRef("");
  const itemCatRef = useRef("");
  const itemDescriptionRef = useRef("");

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const itemName = itemNameRef.current.value;
    const itemCategory = itemCatRef.current.value;
    const itemDescription = itemDescriptionRef.current.value;

    const formData = new FormData();
    files.map((file) => formData.append("itemImages", file));
    formData.append("itemName", itemName);
    formData.append("itemCategory", itemCategory);
    formData.append("itemDescription", itemDescription);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    try {
      const res = await axios.post(
        `http://localhost:4000/addItem`,
        formData,
        config
      );
      if (res.status === 201) {
        navigate("/dashboard");
      }
    } catch (error) {}
  };
  const fileSelectedHandler = (event) => {
    const newFiles = [...files, event.target.files[0]];
    setFiles(newFiles);
  };

  return (
    <div>
      <h1>Add Item</h1>
      <div className="container">
        <form onSubmit={formSubmitHandler}>
          <div className="row mb-3">
            <label className="col-sm-2 form-label">Item name</label>
            <div className="col-sm-6">
              <input
                type="text"
                id="itemName"
                className="form-control"
                placeholder="Item name"
                ref={itemNameRef}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 form-label">Item category</label>
            <div className="col-sm-6">
              <select className="form-control" ref={itemCatRef}>
                <option value="">Select category</option>
                <option value="Design">Design</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 form-label">Item description</label>
            <div className="col-sm-6">
              <textarea
                className="form-control"
                ref={itemDescriptionRef}
              ></textarea>
            </div>
          </div>
          <div className="row mb-3">
            <p>Item images</p>
            <div className="row ">
              {files.map((file, idx) => {
                return (
                  <div className="col-3 ">
                    <img key={idx} src={URL.createObjectURL(file)} alt="item" />
                  </div>
                );
              })}
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <input
                  type="file"
                  name="file"
                  className="form-control"
                  onChange={fileSelectedHandler}
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-12">
              <button className="btn btn-primary" type="submit">
                Add Item
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
