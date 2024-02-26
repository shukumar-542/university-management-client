import AdminLayout from "./components/layouts/AdminLayout"
import { ProtectedRoute } from "./components/layouts/ProtectedRoute"

function App() {
  

  return <ProtectedRoute><AdminLayout /></ProtectedRoute>
}

export default App
