// JavaScript Sample
// body の背景色を変える
function MyFunction01() {
    const obj = document.body;
    obj.style.backgroundColor = '#93b69c'; //薄青
  }
  // ID要素 の背景色を変える
function MyFunction02() {
    const obj = document.getElementById('id01');
    obj.style.backgroundColor = '#d4dcd6'; //蕎麦切色
  }
  // CLASS要素 の背景色を変える
function   MyFunction03() {
    const lines = document.getElementsByClassName('class01');
    for( let i=0; i<lines.length; i++){
      lines[i].style.backgroundColor = '#d6e9ca'; //白緑
    }
  }
  // HTML要素 の背景色を変える
function MyFunction04() {
    const obj = document.getElementsByTagName('p');
    for( let i=0; i<obj.length; i++ ) {
      obj[i].style.backgroundColor = '#c5c56a'; //抹茶色
    }
  }
  