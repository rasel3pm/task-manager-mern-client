import { useEffect } from "react";
import { SummaryRequest } from "../../ApiRequest/ApiRequest";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Dashboard = () => {
  useEffect(() => {
    SummaryRequest();
  }, []);

  const SummaryList = useSelector((state) => state.summary.value);
  return (
    <>
      <div className="container">
        <div className="row">
          {SummaryList.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              key={i}
              className="col-12 col-lg-3 col-sm-6 col-md-3  p-2"
            >
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="animated fadeInUp">Total {item._id}</h5>
                  <h6 className="text-secondary animated fadeInUp">
                    {item.sum}
                  </h6>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
