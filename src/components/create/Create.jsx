import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { createTask } from "../../ApiRequest/ApiRequest";
import { errorToast, isEmpty } from "../../helper/FormValidation";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const changeHandaler = (property, value) => {
    setFormData({ ...formData, [property]: value });
  };

  const submitData = () => {
    if (isEmpty(formData.title)) {
      errorToast("Task name is requard");
      return false;
    }
    if (isEmpty(formData.description)) {
      errorToast("Description name is requard");
      return false;
    }
    createTask(formData.title, formData.description).then((res) => {
      navigate("/All");
    });
  };
  console.log(formData);
  return (
    <>
      <Container className="content-body">
        <Row className="d-flex justify-content-center">
          <div className="col-12 col-lg-8  col-sm-12 col-md-8  p-2">
            <div className="card">
              <div className="card-body">
                <h4>Create New</h4>
                <br />
                <input
                  onChange={(e) => changeHandaler("title", e.target.value)}
                  placeholder="Task Name"
                  className="form-control animated fadeInUp"
                  type="text"
                />
                <br />
                <textarea
                  onChange={(e) =>
                    changeHandaler("description", e.target.value)
                  }
                  rows={5}
                  placeholder="Task Description"
                  className="form-control animated fadeInUp"
                  type="text"
                />
                <br />
                <button
                  onClick={submitData}
                  className="btn float-end btn-success"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Create;
