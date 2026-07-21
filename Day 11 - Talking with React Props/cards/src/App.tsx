import './App.css'
import Card from './components/card'

function App() {

  const cards = [
    {
      id: 1,
      color: "bg-red-500",
      title: "A red card",
      handleButton: () => {
        alert("Hello thisis the first card")
      }
    },
    {
      id: 2,
      color: "bg-yellow-500",
      title: "A yellow card",
      handleButton: () => {
        alert("lorem")
      }
    },
    {
      id: 3,
      color: "bg-green-500",
      title: "A green card",
      handleButton: () => {
        alert("Anything ")
      }
    },
    {
      id: 4,
      // color: "bg-green-500",
      title: "A unkown card",
      handleButton: () => {
        alert("Anything ")
      }
    },
  ]

  return (
    <div className='flex justify-center gap-2 mt-10'>
      {/* 
      <Card
        title='Hello Abhishek'
        bgcolor="bg-red-500"
      /> */}


      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            title={card.title}
            bgcolor={card.color}
            handleButton={card.handleButton}
          />
        )
      })}
    </div>
  )
}

export default App
