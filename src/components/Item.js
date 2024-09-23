import React from "react";

export const Item = ({ item, index, sonFather }) => {
  // 处理点击子项目后删除该子项目
  const handleDele = () => {
    sonFather(index);
  };
  return <li onClick={handleDele}>{item}</li>;
};
// 获取子项目的索引号
// 监听子项目的点击
// 如果子项目被点击，然后删除对应索引号的数据
