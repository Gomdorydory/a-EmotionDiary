import { useParams } from "react-router-dom";

const Diary = () => {

  const {id} = useParams(); //usePrams로 App.js의 <Route path="/Diary/:id"... 에서 id를 표현함.
  console.log(id);

  return (
    <div>
      <hi>Diary</hi>
      <p>이곳은 일기 상세 페이지 입니다.</p>
    </div>
  );
};

export default Diary;