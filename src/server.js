import { app } from "./app.js"

const PORT = process.env.PORT || 5010

app.listen(PORT, () => {
  console.log(`Server running at ${PORT} 🚀`)
})
