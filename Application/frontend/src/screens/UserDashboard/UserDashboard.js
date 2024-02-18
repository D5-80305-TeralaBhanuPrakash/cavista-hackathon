import React, { useEffect, useState } from "react";
import "./UserDashboard.css";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../../actions/userAuthAction";
import { toast } from "react-toastify";

const UserDashboard = () => {

  const [reward, setReward] = useState();

  const data = useSelector((state) => state.userSignin);
  let token = data.response.jwt;

  const taskData = useSelector((state) => state.tasks);
  let tasks = taskData.response;

  console.log(tasks);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTasks(token));
  }, []);

  const submitData = (id) => {
    const userId = data.response.custDto.customerId;
    const taskId = id;

    console.log(userId);

    fetch(`http://172.18.4.119:8080/completed-tasks/${userId}/${taskId}`, {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + token,
    }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.customer.rewards);
      setReward(data.customer?.rewards)
      toast.success(`Total ${data.customer?.rewards} points earned`);
    })
    .catch((error) => {
      toast.error("Error");
    });
  }
  return (
    <>
      <UserNavbar />

      <div class="container my-5">
        <div className="row">
          {tasks &&
            tasks.map((t, i) => (
              <div className="col-md-4 my-3">
                <div class="cardcontainer">
                  <div class="photo">
                    <img
                      src="https://img.freepik.com/free-vector/healthy-lifestyle-habits-cartoon-composition-with-nonsmoking-woman-practice-stress-relieving-yoga-8h-sleep-diet_1284-59040.jpg?w=740&t=st=1708084752~exp=1708085352~hmac=3f852c073d442e79e38d42f5e681ca32836ba11b1e56001c4880ac5e1aa01727"
                      alt=""
                    />
                    <div class="task">Task {i+1}</div>
                  </div>
                  <div class="content text-center">
                    <p class="txt4 fw-bold mt-2">{t.title}</p>
                    <p class="txt3 text-muted" style={{marginTop: "-30px"}}>{t.description}</p>

                    <button className="btn btn-primary" onClick={() => submitData(t.taskId)}>
                      <i class="fa-solid fa-thumbs-up mx-2"></i>
                      Completed
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
