import axios from "axios";
export default async function handler(req, res) {
const reqData = JSON.parse(req.body)
const response = await axios({
      url: `${process.env.myAppsURL}api/createLead`,
      method: "POST",
      data:reqData,
      headers: {
          "Content-Type": "application/json",
          'x-key': `${process.env.myAppsAPI_KEY}`
      },
    })
response.status === 200 ? res.status(200).json(response.data) : res.status(201)
}