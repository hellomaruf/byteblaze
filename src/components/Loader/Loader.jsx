import { BounceLoader } from "react-spinners"

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-120px)]">
      <BounceLoader size={60} color="#d636bc" />
    </div>
  )
}

export default Loader
