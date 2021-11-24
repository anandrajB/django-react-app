import axios from 'axios';


export const chart_example = async () => {
  if (localStorage.getItem("token")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${localStorage.getItem("token")}`,
        Accept: "application/json",
      },
    };

    const {data} = await axios.get(`http://127.0.0.1:8000/accounts/count/`,config)
    console.log(data.data.employees)
}
}