import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { AiOutlineCalendar, AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { useSelector } from "react-redux";
import { deleteTaskById, taskListByStatus } from "../../ApiRequest/ApiRequest";
import { updateStatusTask } from "../../helper/EditAlart";
import { motion } from "framer-motion";
import SearchBar from "../masterLayOut/SearchBar";
const Complete = () => {
  useEffect(() => {
    taskListByStatus("Completed");
  });
  let completedTask = useSelector((state) => state.task.completed);
  const deleteHandle = (_id) => {
    deleteTaskById(_id).then((result) => {
      if (result === true) {
        taskListByStatus("Completed");
      }
    });
  };
  const updateStatus = (id, status) => {
    updateStatusTask(id, status).then((result) => {
      if (result === true) {
        taskListByStatus("Completed");
      }
    });
  };
  return (
    <Container className="content-body">
      <SearchBar />
      <motion.div className="row p-0 m-0">
        {completedTask.map((item) => {
          return (
            <div
              key={item["_id"]}
              className="col-12 col-lg-4 col-sm-6 col-md-4  p-2"
            >
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="animated fadeInUp">{item["title"]}</h6>
                  <p className="animated fadeInUp">{item["description"]}</p>
                  <p className="m-0 animated fadeInUp p-0">
                    <AiOutlineCalendar /> {item["createdDate"]}
                    <a
                      onClick={() => updateStatus(item._id, item.status)}
                      className="icon-nav text-primary mx-1"
                    >
                      <AiOutlineEdit />
                    </a>
                    <a
                      onClick={() => deleteHandle(item._id)}
                      className="icon-nav text-danger mx-1"
                    >
                      <AiOutlineDelete />
                    </a>
                    <a className="badge float-end bg-success">
                      {item["status"]}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </Container>
  );
};

export default Complete;
