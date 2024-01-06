import GridLoader
from "react-spinners/GridLoader";
import '../../CSS/App.css'

export default function Loader() {
  return (
    <div className="Loader">
    <GridLoader
        color={'#A0D8B3'}
        loading={true}
        size={20}
    />
    </div>
  )
}
