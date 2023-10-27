import axios from "axios";
export default async function handler(req, res) {
const response = await axios({
  url: `${process.env.plansUrl}findOne`,
  method: 'POST',
  data:JSON.stringify(req.body),
 headers: {
  "Content-Type": "application/json",
  "Access-Control-Request-Headers":"*",
  "api-key": `${process.env.MONGO_DB_API_KEY}`
}
})
response.status === 200 ? res.status(200).json(response.data) : res.status(201)
}