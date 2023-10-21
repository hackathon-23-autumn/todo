"use client"

const Home = () => {
  return (
    <div>
      <button
        onClick={async () => {
          const res = await fetch("/api/hello")
          const data = await res.json()
          alert(data.message)
        }}>
        Click Me
      </button>
    </div>
  )
}

export default Home
