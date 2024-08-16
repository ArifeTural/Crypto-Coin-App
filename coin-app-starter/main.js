import "./scss/style.scss";

const form = document.querySelector("header form");
// console.log(form)

form.addEventListener("submit",(e)=>{
  e.preventDefault(); //! form elementinin default davranışlarını iptal et.
  // console.log("Form submit oldu!")
  getInputVal()
})

const getInputVal = () => {
  // const input = document.querySelector("header form input");
  // console.log(input)
  const inputVal = document.querySelector("header form input").value;
  console.log(inputVal);
}
