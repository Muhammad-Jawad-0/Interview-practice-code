// // function abid() {
// //     var name = "jawad" // var variable function ke ilawa sb jaga access huta ha magr function ma deaclear hugya tu wo functional scope hujata ha function ke bahir access nh huta...
// //     return name
// // }
// // // console.log(name) // ye access nh ha isko return krne ke bad save krwa ke show krna huta ha...
// // var res = abid()

// // console.log(res)

// // // --------------------------

// // if(true){
// //     var num = 317;
// // }

// // console.log(num) //  ye acces ha

// // ------------------------------------------------

// // see more & less krne ka tarika

// // let lessText = ""
// // function fun() {
// //     let text = document.getElementById("text");
// //     let btn = document.getElementById("btn");

// //     let fullText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nam eaque quia accusantium delectus ipsa minima consequatur sit aut, officiis eum consequuntur veniam porro, sint amet ab voluptatem similique. Temporibus?`
// //     if (lessText) {
// //         text.innerHTML = lessText
// //         btn.innerHTML = "see more"
// //         lessText = ""
// //     } else {
// //         lessText = text.innerHTML;
// //         text.innerHTML = fullText;
// //         btn.innerHTML = "less"
// //     }
// // }

// // ------------------------------------------------

// // hover krne par image zoom in or zoom out krne ka tarika?

// // function makeBig() {
// //     let car = document.getElementById("car");
// //     car.className = "bigCar"
// // }

// // function zoomIn(){
// //     let car = document.getElementById("car");
// //     car.className += " zoomCar"
// // }

// // function zoomOut(){
// //     let car = document.getElementById("car");
// //     car.className = "car"
// // }

// // ======================================== ye 2sra tarika ha

// // let zoom = false
// // function zoomIn(){
// //     let car = document.getElementById("car");
// //     // car.className += " zoomCar"
// //     if(zoom){
// //         car.className = "car"
// //         zoom = false
// //     }else{
// //         car.className += " zoomCar"
// //         zoom = true
// //     }

// // }

// // ---------------------------------------------// create todo app with pure javascript

// function addTodo() {
//   let input = document.getElementById("input");
//   let ul = document.getElementById("ul");
//   let date = new Date()

//   ul.innerHTML = `
//     <li>
//     <input class="edit-input" type="text" value="${input.value}" disabled/>
//     ${date.toLocaleString()}
//     <button onclick="deleteTodo()">Delete</button>
//     <button onclick="editTodo(this)">Edit</button>
//     </li>
//     `;

// -------------------------------------------------

// let li = document.createElement("li");
// let liText = document.createTextNode(input.value);
// li.appendChild(liText);

// // Create Edit button
// let liEditBtn = document.createElement("button");
// let liEditBtnText = document.createTextNode("Edit");
// liEditBtn.appendChild(liEditBtnText);
// liEditBtn.setAttribute("onclick", "editTodo(this)");

// // Create Delete button
// let liDeleteBtn = document.createElement("button");
// let liDeleteBtnText = document.createTextNode("Delete");
// liDeleteBtn.appendChild(liDeleteBtnText);
// liDeleteBtn.setAttribute("onclick", "deleteTodo()");

// li.appendChild(liEditBtn);
// li.appendChild(liDeleteBtn);

// ul.prepend(li);

//   input.value = "";
// }

// function deleteTodo() {
//   event.target.parentNode.remove();
// }

// function editTodo(editBtn) {
//     let li = editBtn.parentNode;
//     let currentText = li.firstChild.nodeValue;

//     let inputField = document.createElement("input");
//     inputField.type = "text";
//     inputField.value = currentText;
//     inputField.setAttribute("onblur", "saveEdit(this)");

//     li.insertBefore(inputField, editBtn);
//     li.removeChild(li.firstChild);

//     inputField.focus();
// }

// function saveEdit(inputField) {
//     let li = inputField.parentNode;
//     let newText = inputField.value;

//     let newTextNode = document.createTextNode(newText);

//     li.insertBefore(newTextNode, inputField.nextSibling);
//     li.removeChild(inputField);
// }

// let edit = false;
// function editTodo(e) {
//   if (edit) {
//     e.parentNode.childNodes[1].disabled = true;
//     e.parentNode.childNodes[1].blur();
//     e.parentNode.childNodes[5].innerHTML = "Edit";
//     edit = false
//     console.log(e.parentNode.childNodes[5]);
//   } else {
//     e.parentNode.childNodes[1].disabled = false;
//     e.parentNode.childNodes[1].focus();
//     e.parentNode.childNodes[5].innerHTML = "Update";
//     console.log(e.parentNode.childNodes[5]);
//     edit = true
//   }
// }

// function deleteAll() {
//   let ul = document.getElementById("ul");
//   ul.innerHTML = ""; // This removes all child elements (i.e., all <li> items)
// }

// ---------------------Constructor Function -------------------------

// function Studend(firstName, LastName) {
//   this.firstName = firstName;
//   this.LastName = LastName;
//   this.getFullName = function () {
//     return `${this.firstName} ${this.LastName}`
//   }
// }

// var student = new Studend("Muhammad", "Jawad");
// var student1 = new Studend("Iqra", "Noor");

// console.log(student.getFullName())
// console.log(student)
// console.log(student1.getFullName())
// console.log(student1)

// -------- method & function ko prototype ma rakhne ka tarika issy performance achi huti ha -----------

// function Studend(firstName, LastName) {
//   this.firstName = firstName;
//   this.LastName = LastName;
// }

// Studend.prototype.getFullName = function () {
//   return `${this.firstName} ${this.LastName}`
// }

// var student = new Studend("Muhammad", "Jawad");
// // console.log(Object.entries(student))

// // console.log(student.getFullName())

// for(let keys in student){
//   console.log(student[keys])
// }

// ------------------------ file inputs create url practice ----------------

// function fileSubmit() {
//   let image = document.getElementById("image")
//   let file = document.getElementById("file")
//   let createUrl = URL.createObjectURL(file.files[0])

//   image.src = createUrl
//   console.log()
// }

// -------- radio or checkbox 2no ma same tarike se value get krte ha -------------

// function submit() {
//     let gender = document.getElementsByName("gender");
//     for (let i = 0; i < gender.length; i++) {
//         if (gender[i].checked) {
//             console.log(gender[i].value)
//         }
//     }
// }

// -------------------- localStorage ma object set or get krne ka tarika

// let obj = {
//     name: "Muhammad Jawad",
//     roll: 126981
// }

// localStorage.setItem("information", JSON.stringify(obj))

// let objGetFromLocalStorage = JSON.parse(localStorage.getItem("information"))

// console.log(objGetFromLocalStorage)

// let obj = {
//   name: "Muhammad Jawad",
//   age: 20,
// };

// let student = {
//   email: "jawad@gmail.com",
//   password: {
//     pass: 25055909,
//     cPass: 25055909,
//   },
// };

// student.password.cPass = 250055999

// let murge = { ...obj, ...student };

// console.log(student)
// console.log(murge);


// ------------------ function ma obj ki practice ---------------

// object or array ki value save nh huti balke reference save huta ha... agr update krna huta ha tu reference alag banate ha {}, [] se warna ik ki value update krege sbka hujaega is leye reference alag krna lazmi huta ha

// function updatedArray(arr) {
//     arr[1].name = "jawad";
//     return arr
// }

// let obj = {
//     name:"ghous"
// }

// let result = updatedArray([obj,obj,obj])

// console.log("obj >>>", obj)

// console.log("result >>" , result)

// ------------------------------------------------

// let obj = {
//     name:"muhammad jawad",
//     email:"jawad@gmail.com"
// }

// let obj1 = {...obj};

// obj1.name = "asad raza"
// obj1.email = "asad@gmail.com"

// console.log("obj >>", obj)
// console.log(">>>>",obj1)


// ------------------------------=----------------
// ==========>>>> nested obj ke leye bhi alag reference banta ha warna value alag chnge nh krega

// let obj = {
//     name: "muhammad jawad",
//     detail: {
//         email: "jawad@gmail.com"
//     }
// }

// let obj1 = { ...obj, detail: {...obj.detail} };

// obj.name = "asad raza"
// obj.detail.email = "asad@gmail.com"

// console.log("obj >>", obj)
// console.log(">>>>", obj1)

// -------------------- class constructor ----------------

class StudendList {
    constructor(firstName, lastName, fatherName, roll) {
        this.firstName = firstName;
        this.lastNameName = lastName;
        this.fatherNameName = fatherName;
        this.roll = roll;
    }
}

let jawadDetail = new StudendList("Muhammad", "Jawad", "Nooruddin", 126981)
let asadDetail = new StudendList("Muhammad", "asad", "zainul abdien", 126982)
let aliDetail = new StudendList("Muhammad", "ali", "jamshad", 126983)
let hammadDetail = new StudendList("Muhammad", "hammad", "shanwari", 126984)

console.log(jawadDetail)
console.log(asadDetail)
console.log(aliDetail)
console.log(hammadDetail)
