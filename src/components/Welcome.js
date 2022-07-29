// write code or Welcome component here

export default function welcome(props){
  let name=props.name;
  return <>
  <h1>Hey!{name}</h1>
  <h2>Welcome to Newton School.</h2>
  </>
}
