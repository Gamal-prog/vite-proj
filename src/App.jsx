import './App.css'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"



function App() {


  return (
    <>
      <Button> Here </Button>
      <Calendar
        mode="single"
        className="rounded-md border"
      />
      <Badge variant="outline">Badge</Badge>
    </>
  )
}

export default App
