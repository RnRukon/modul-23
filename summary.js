console.log("Im from the summary file.js");

const blogs = document.getElementsByTagName('p');
// console.log(blogs); //tag Name দেখার জন্য
for (const blog of blogs) {
    // console.log(blog); //
    blog.style.backgroundColor = "steelblue";
}

/*************** Add the html and change the text ****************/

const rukon = document.getElementById("rukon");
// rukon.innerText = "Rukon Uddin Sikdar"; //কোনো একটা চাইল্ড এর টেক্স চেঞ্জ করার জন্য;
rukon.innerHTML = //কোনো একটা প্যারেন্ট এর বার চাইল্ড এর ভিতরে html add করার জন্য ;
`   
<h3>Rukon uddin sikdar <h3/>
<ul>
<li>ami pari javaScrip diye html likhte<li/>
<li>ami pari onek kicho<li/>
<li> kije moja hihihi huhuhu hahaha<li/>
<ul/>
`;

/*************** Check Element ****************/

const friends = document.getElementById("friends");
// console.log(friends.childNode);  //প্যারেন্ট এর সব কইটা চাইল্ড নোট আছে-ট্যাগ এবং টেক্স ------কি কি আছে দেখার জন্য ব্যবহার করা হয়য়।
// console.log(friends.children); //প্যারেন্ট এর সব কইটা চাইল্ডে কে পাওয়ার জন্য ব্যবহার করা হয়য়;

/*************** Remove Element ****************/

const fifth = friends.children[4];
console.log(fifth);
friends.removeChild(fifth); //কোনো প্যারেন্ট এর কোনো একটা চাইল কে রিমুভ করার করার জন্য ব্যবহার করা হয়য়;

/*************** Create Element ****************/


const friend = document.createElement("li");
friend.innerText = "friend-11";
friends.appendChild(friend); //কোনো একটা প্যারেন্ট এর ভিতরে কোনো একটা চাইল্ড এড করার জন্য ব্যবহার করা হয়য়;