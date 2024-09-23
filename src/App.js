import { useState } from "react";
import { Item } from "./components/Item";
import { Input } from "./components/Input";

function App() {
  const [inputData, setInputData] = useState("");
  const [list, setList] = useState([]);
  //处理添加待办事项的事件函数
  const handleAdd = () => {
    list.push(inputData);
    setList([...list]);
    console.log(list);
  };
  //处理输入内容的事件函数
  const handleInput = (e) => {
    setInputData(e.target.value);
  };
  // 处理点击子项目后删除该子项目【让子组件把数据传递给父组件】
  const sonFather = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <div className="App">
      <Input handleInput={handleInput} handleAdd={handleAdd} />
      <ul>
        {list.map((item, index) => {
          return (
            <Item key={index} item={item} index={index} sonFather={sonFather} />
          ); //---------------------------------------组件
        })}
      </ul>
    </div>
  );
}
export default App;
