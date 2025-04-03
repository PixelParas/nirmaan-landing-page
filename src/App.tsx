import { Button } from "@/components/ui/button"
import Header from "./components/app-header"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/home-page"

function App() {
  return (
    <div className="w-full h-screen flex flex-col overflow-y-auto"> {/* Added overflow-y-auto */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}
 
export default App