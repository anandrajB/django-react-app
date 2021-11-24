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

    const {data} = await axios.get(`https://jabtracanand.herokuapp.com/accounts/count/`,config)
    console.log(data.data.employees)
}
}