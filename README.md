QN:
6. Answer the following questions clearly:
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
How do you create and insert a new element into the DOM?
What is Event Bubbling and how does it work?
What is Event Delegation in JavaScript? Why is it useful?
What is the difference between preventDefault() and stopPropagation() methods?

ANS:
1.the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById - নিদিষ্ট একটা Element select করে যেটাতে I'd দেওয়া আছে।
getElementsByClassName - class এর নাম দিয়ে element select করে, একই নামে যত গুলো ক্লাস আছে। array এর মতো html collection দেয়।
querySelector - css selector (id,class,tag) শুধু প্রথম element দেওয়ার পর বন্ধ হয়ে যায়।
querySelectorAll - matching (এক নামের) element এক সাথে সব গুলো সিলেক্ট করে।

2.create and insert a new element into the DOM

document.createElement("tagName") দিয়ে element বানিয়ে করে
.innerText,
.innerHTML, 
.setAttribute() দিয়ে অ্যাট্রিবিউট সেট করে  
DOM এ insert appendChild() দিলে পুরনো element এর জায়গায় নতুন বসাবে।

3.What is Event Bubbling and how does it work?
ইভেন্ট target element থেকে উপরের parent এর দিকে বাবল করে চলে।  এক এক করে উপরে উঠে

4.What is Event Delegation in JavaScript? Why is it useful?
parent element এ একটি event listener বসিয়ে child element এর ইভেন্ট handle করা যায়, এতে memory তে কম জায়গা নেয়, এবং নতুন element এর জন্যও কাজ করে। হোস্টিং খরচ ও কম লাগবে...

5.What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() ব্রাউজারের ডিফল্ট কাজ বন্ধ করে যেমন, form ব্যবহার করলে auto reload নেয় সেটা বন্ধ করে, আর stopPropagation() ইভেন্টকে parent element পর্যন্ত যেতে দেয় না।
