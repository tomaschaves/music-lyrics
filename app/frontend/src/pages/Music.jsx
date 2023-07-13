import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

export default function Music() {
  const xablau = useParams().id;
  console.log(xablau);
  return (
    <div>Music</div>
  )
}
