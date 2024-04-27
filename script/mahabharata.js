function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let quan = [
    {
        "ques": "Events Related to Mahabharata happened in which Yuga?",
        "sol": { "a": "Sat Yuga", "b": "Treta Yuga", "c": "Dwapar Yuga", "d": "Kali Yuga" },
        "correct": "3"
    },
    {
        "ques": "Who wrote Mahabharata?",
        "sol": { "a": "Shri Ganesh ji", "b": "Maharishi Ved Vyas ji", "c": "Maharishi Valmiki ji", "d": "Tulsi Das ji" },
        "correct": "1"
    },
    {
        "ques": "Who didctated epic Mahabharata to Ganesh ji?",
        "sol": { "a": "Matang Rishi ji", "b": "Maharishi Ved Vyas ji", "c": "Maharishi Valmiki ji", "d": "Lord Krishna" },
        "correct": "2"
    },
    {
        "ques": "Who was the wife of Maharaja Shantanu?",
        "sol": { "a": "Mandvi ji", "b": "Yagyasaini ji", "c": "Mandodri ji", "d": "Shakuntala ji" },
        "correct": "4"
    },
    {
        "ques": "How many son did Maharaja Bharat had?",
        "sol": { "a": "8", "b": "9", "c": "10", "d": "11" },
        "correct": "2"
    },
    {
        "ques": "How many days did Mahabharat was fought?",
        "sol": { "a": "15", "b": "16", "c": "17", "d": "18" },
        "correct": "4"
    },
    {
        "ques": "How many child did Mata Ganga left in the Ganga River and left them dying",
        "sol": { "a": "8", "b": "9", "c": "10", "d": "11" },
        "correct": "1"
    },
    {
        "ques": "Who was second wife of Maharaj Bharat?",
        "sol": { "a": "Ganga Maiya", "b": "Mata Yagyasaini", "c": "Mata Satyavati", "d": "None" },
        "correct": "3"
    },
    {
        "ques": "From whom did Pitamah Bheeshma took his knowledge?",
        "sol": { "a": "Guru Brahspati", "b": "Guru Parshuram ji", "c": "Guru Shukracharya", "d": "All of these" },
        "correct": "4"
    },
    //sgsdgdfsghdsfsdfhdsf
    // sdfghsdfgsdf
    // asgasgs
    // asgasgas 
    {
        "ques": "To whom did Guru Dron Acharya was married?",
        "sol": { "a": "Krip", "b": "Angira", "c": "Kalpana", "d": "Myanka" },
        "correct": "1"
    },
    {
        "ques": "What was the relation between Kul Guru Kripacharya and Gur Dron Acharya?",
        "sol": { "a": "Guru Dron was brother in law", "b": "Kul Guru was brother in law", "c": "brother", "d": "none of these" },
        "correct": "1"
    },
    {
        "ques": "Who was Vichitraveer in relation to Pitahmah Bheeshma?",
        "sol": { "a": "Son", "b": "Uncle", "c": "Friend", "d": "Brother" },
        "correct": "4 "
    },
    {
        "ques": "Who were the wife of Maharaja Vichitraveer?",
        "sol": { "a": "Both", "b": "Ambika", "c": "Ambalika", "d": "All of these" },
        "correct": "1"
    },
    {
        "ques": "Who became the reason for the death of Pitahmah Bheeshma?",
        "sol": { "Amba": "12", "b": "Ambika", "c": "Ambalika", "d": "All of these" },
        "correct": "1"
    },
    {
        "ques": "By which name Bhagwan krishna was referred",
        "sol": { "a": "Vasudev", "b": "Yashoda-nandna", "c": "Devki-nandan", "d": "All of these" },
        "correct": "4"
    },
    {
        "ques": "Where were Lord Krishna Borned",
        "sol": { "a": "Gokul", "b": "Dwarka", "c": "Mathura", "d": "Vrindavan" },
        "correct": "3"
    },
    {
        "ques": "While Vasudev ji crossed Yamuna who helped the cross the Yamuna river",
        "sol": { "a": "Bhagwan Shankar", "b": "Bhagwan Sheshnag", "c": "Bhagwan Brahma", "d": "all of these" },
        "correct": "2"
    },
    {
        "ques": "Who was the wife of Maharaj Dhritrashtra?",
        "sol": { "a": "Mata Gandhari", "b": "Mata Kunti", "c": "Mata Shakuntala", "d": "Mata Satyavati" },
        "correct": "1"
    },
    {
        "ques": "Who was the wife of Maharaj Pandu?",
        "sol": { "a": "Mata Madri", "b": "Mata Kunti", "c": "Both", "d": "None" },
        "correct": "3"
    },
    {
        "ques": "How many son did Maharaja Dhritrashtra had?",
        "sol": { "a": "104", "b": "100", "c": "102", "d": "101" },
        "correct": "3"
    },
    {
        "ques": "How many son did Maharaja Pandu had?",
        "sol": { "a": "3", "b": "4", "c": "5", "d": "6" },
        "correct": "3"
    },
    {
        "ques": "How many son did Mata Kunti had?",
        "sol": { "a": "3", "b": "4", "c": "5", "d": "6" },
        "correct": "2"
    },
    {
        "ques": "WMata Shabri told Lord Ram to meet whom?",
        "sol": { "a": "3", "b": "4", "c": "1", "d": "2" },
        "correct": "4 "
    },
    {
        "ques": "Who was the elder in the given names?",
        "sol": { "a": "Bheem", "b": "Duryodhan", "c": "Yudhister", "d": "Arjun" },
        "correct": "3"
    },
    {
        "ques": "Who was the elder in the given names?",
        "sol": { "a": "Bheem", "b": "Duryodhan", "c": "Dushasan", "d": "Arjun" },
        "correct": "1"
    },
    {
        "ques": "Who was the elder in the given names?",
        "sol": { "a": "Nakul", "b": "Duryodhan", "c": "Yudhister", "d": "Arjun" },
        "correct": "2"
    },
    {
        "ques": "From which Element did Mata Dropadi borned?",
        "sol": { "a": "Vayu", "b": "Jal", "c": "Agni", "d": "Yagya" },
        "correct": "4"
    },
    {
        "ques": "Yudhister ji was the son of which Dev?",
        "sol": { "a": "Dharma Dev", "b": "Vayu Dev", "c": "Indra Dev", "d": "Varun Dev" },
        "correct": "1"
    },
    {
        "ques": "Bheem ji was the son of which Dev?",
        "sol": { "a": "Dharma Dev", "b": "Vayu Dev", "c": "Indra Dev", "d": "Varun Dev" },
        "correct": "2"
    },
    {
        "ques": "Arjun ji was the son of which Dev?",
        "sol": { "a": "Dharma Dev", "b": "Vayu Dev", "c": "Indra Dev", "d": "Varun Dev" },
        "correct": "3"
    },
    {
        "ques": "For which astra and shastra Yudister ji was famous?",
        "sol": { "a": "Bhala", "b": "Gada", "c": "Dhanush-baan", "d": "none" },
        "correct": "1"
    },
    {
        "ques": "For which astra and shastra Bheem ji was famous?",
        "sol": { "a": "Bhala", "b": "Gada", "c": "Dhanush-baan", "d": "none" },
        "correct": "2"
    },
    {
        "ques": "For which astra and shastra Arjun ji was famous?",
        "sol": { "a": "Bhala", "b": "Gada", "c": "Dhanush-baan", "d": "none" },
        "correct": "3"
    },
    {
        "ques": "waht was the relation of Duryodhan and Karn?",
        "sol": { "a": "Shishya", "b": "Guru", "c": "Brother", "d": "Friend" },
        "correct": "4"
    },
    {
        "ques": "What was common in Angraj Karna and Ganga putra Bheeshma?",
        "sol": { "a": "Same Guru", "b": "Same Kul", "c": "Same age", "d": "Same skills"},
        "correct": "1"
    },
    {
        "ques": "Ghatothkach was son of whom?",
        "sol": { "a": "Bheem", "b": "Duryodhan", "c": "Yudhister", "d": "Arjun" },
        "correct": "1"
    },

    {
        "ques": "Abhimanyu was son of whom?",
        "sol": { "a": "Bheem", "b": "Duryodhan", "c": "Yudhister", "d": "Arjun" },
        "correct": "4"
    },

    {
        "ques": "Where did Pandavas hide themselves during their Agyat varsh?",
        "sol": { "a": "Virat", "b": "Ang", "c": "Dwarka", "d": "Indraprastha" },
        "correct": "1"
    },

    {
        "ques": "By whom Devantak was killed?",
        "sol": { "a": "Lord Hanuman ji", "b": "Maharaja Sugreev", "c": "Senapati Neel", "d": "Senapati Nal" },
        "correct": "1"
    },

    {
        "ques": "Who killed Guru Dron Acharya",
        "sol": { "a": "Maharaja Dropad", "b": "Bheem", "c": "Drishtadyumna", "d": "Arjun" },
        "correct": "3"
    },

    {
        "ques": "With whom Was Krishna playing the role of sarthi?",
        "sol": { "a": "Arjun", "b": "Bheem", "c": "Yudhiter", "d": "None" },
        "correct": "1"
    },

    {
        "ques": "How many horses were there in the chariot of Arjun and Bhagwan Krishna?",
        "sol": { "a": "2", "b": "1", "c": "4", "d": "None of these" },
        "correct": "3"
    },

    {
        "ques": "After seeing whom Pitahmaah Bheesham did not attack?",
        "sol": { "a": "Arjun", "b": "lord Laksmana", "c": "Yudhister", "d": "Shikhandi" },
        "correct": "4"
    },

    {
        "ques": "Who are the chiranjeevi since the Dwapar yuga?",
        "sol": { "a": "Ved Vyas ji", "b": "Ashwatthama", "c": "both", "d": "None" },
        "correct": "3"
    },

    {
        "ques": "Who are the chiranjeevi since the Dwapar yuga?",
        "sol": { "a": "Ved Vyas ji", "b": "Ashwatthama", "c": "both", "d": "None" },
        "correct": "3"
    }
]

console.log(quan.length)

let index = randomNumber(0, 3)
let q1 = document.getElementById("question1")
q1.innerHTML = q1.innerHTML + quan[index].ques
let s1a = document.getElementById("sol1optiona")
s1a.innerHTML = s1a.innerHTML + quan[index].sol.a
let s1b = document.getElementById("sol1optionb")
s1b.innerHTML = s1b.innerHTML + quan[index].sol.b
let s1c = document.getElementById("sol1optionc")
s1c.innerHTML = s1c.innerHTML + quan[index].sol.c
let s1d = document.getElementById("sol1optiond")
s1d.innerHTML = s1d.innerHTML + quan[index].sol.d

let index1 = randomNumber(4,8)
let q2 = document.getElementById("question2")
q2.innerHTML = q2.innerHTML + quan[index1].ques
let s2a = document.getElementById("sol2optiona")
s2a.innerHTML = s2a.innerHTML + quan[index1].sol.a
let s2b = document.getElementById("sol2optionb")
s2b.innerHTML = s2b.innerHTML + quan[index1].sol.b
let s2c = document.getElementById("sol2optionc")
s2c.innerHTML = s2c.innerHTML + quan[index1].sol.c
let s2d = document.getElementById("sol2optiond")
s2d.innerHTML = s2d.innerHTML + quan[index1].sol.d

let index3 = randomNumber(9,13)
let q3 = document.getElementById("question3")
q3.innerHTML = q3.innerHTML + quan[index3].ques
let s3a = document.getElementById("sol3optiona")
s3a.innerHTML = s3a.innerHTML + quan[index3].sol.a
let s3b = document.getElementById("sol3optionb")
s3b.innerHTML = s3b.innerHTML + quan[index3].sol.b
let s3c = document.getElementById("sol3optionc")
s3c.innerHTML = s3c.innerHTML + quan[index3].sol.c
let s3d = document.getElementById("sol3optiond")
s3d.innerHTML = s3d.innerHTML + quan[index3].sol.d

let index4 = randomNumber(14,18)
let q4 = document.getElementById("question4")
q4.innerHTML = q4.innerHTML + quan[index4].ques
let s4a = document.getElementById("sol4optiona")
s4a.innerHTML = s4a.innerHTML + quan[index4].sol.a
let s4b = document.getElementById("sol4optionb")
s4b.innerHTML = s4b.innerHTML + quan[index4].sol.b
let s4c = document.getElementById("sol4optionc")
s4c.innerHTML = s4c.innerHTML + quan[index4].sol.c
let s4d = document.getElementById("sol4optiond")
s4d.innerHTML = s4d.innerHTML + quan[index4].sol.d

let index5 = randomNumber(19,23)
let q5 = document.getElementById("question5")
q5.innerHTML = q5.innerHTML + quan[index5].ques
let s5a = document.getElementById("sol5optiona")
s5a.innerHTML = s5a.innerHTML + quan[index5].sol.a
let s5b = document.getElementById("sol5optionb")
s5b.innerHTML = s5b.innerHTML + quan[index5].sol.b
let s5c = document.getElementById("sol5optionc")
s5c.innerHTML = s5c.innerHTML + quan[index5].sol.c
let s5d = document.getElementById("sol5optiond")
s5d.innerHTML = s5d.innerHTML + quan[index5].sol.d

let index6 = randomNumber(24,28)
let q6 = document.getElementById("question6")
q6.innerHTML = q6.innerHTML + quan[index6].ques
let s6a = document.getElementById("sol6optiona")
s6a.innerHTML = s6a.innerHTML + quan[index6].sol.a
let s6b = document.getElementById("sol6optionb")
s6b.innerHTML = s6b.innerHTML + quan[index6].sol.b
let s6c = document.getElementById("sol6optionc")
s6c.innerHTML = s6c.innerHTML + quan[index6].sol.c
let s6d = document.getElementById("sol6optiond")
s6d.innerHTML = s6d.innerHTML + quan[index6].sol.d

let index7 = randomNumber(29,33)
let q7 = document.getElementById("question7")
q7.innerHTML = q7.innerHTML + quan[index7].ques
let s7a = document.getElementById("sol7optiona")
s7a.innerHTML = s7a.innerHTML + quan[index7].sol.a
let s7b = document.getElementById("sol7optionb")
s7b.innerHTML = s7b.innerHTML + quan[index7].sol.b
let s7c = document.getElementById("sol7optionc")
s7c.innerHTML = s7c.innerHTML + quan[index7].sol.c
let s7d = document.getElementById("sol7optiond")
s7d.innerHTML = s7d.innerHTML + quan[index7].sol.d

let index8 = randomNumber(34,37)
let q8 = document.getElementById("question8")
q8.innerHTML = q8.innerHTML + quan[index8].ques
let s8a = document.getElementById("sol8optiona")
s8a.innerHTML = s8a.innerHTML + quan[index8].sol.a
let s8b = document.getElementById("sol8optionb")
s8b.innerHTML = s8b.innerHTML + quan[index8].sol.b
let s8c = document.getElementById("sol8optionc")
s8c.innerHTML = s8c.innerHTML + quan[index8].sol.c
let s8d = document.getElementById("sol8optiond")
s8d.innerHTML = s8d.innerHTML + quan[index8].sol.d

let index9 = randomNumber(38,40)
let q9 = document.getElementById("question9")
q9.innerHTML = q9.innerHTML + quan[index9].ques
let s9a = document.getElementById("sol9optiona")
s9a.innerHTML = s9a.innerHTML + quan[index9].sol.a
let s9b = document.getElementById("sol9optionb")
s9b.innerHTML = s9b.innerHTML + quan[index9].sol.b
let s9c = document.getElementById("sol9optionc")
s9c.innerHTML = s9c.innerHTML + quan[index9].sol.c
let s9d = document.getElementById("sol9optiond")
s9d.innerHTML = s9d.innerHTML + quan[index9].sol.d

let index10 = randomNumber(41,44)
let q10 = document.getElementById("question10")
q10.innerHTML = q10.innerHTML + quan[index10].ques
let s10a = document.getElementById("sol10optiona")
s10a.innerHTML = s10a.innerHTML + quan[index10].sol.a
let s10b = document.getElementById("sol10optionb")
s10b.innerHTML = s10b.innerHTML + quan[index10].sol.b
let s10c = document.getElementById("sol10optionc")
s10c.innerHTML = s10c.innerHTML + quan[index10].sol.c
let s10d = document.getElementById("sol10optiond")
s10d.innerHTML = s10d.innerHTML + quan[index10].sol.d

function hidesol1() {

}

function getsol1() {
    let ans11 = document.getElementById("ans1")
    let num = quan[index].correct
    if(num==1){
        ans11.innerHTML=ans11.innerHTML+quan[index].sol.a
    }
    else if(num==2){
        ans11.innerHTML=ans11.innerHTML+quan[index].sol.b
    }
    else if(num==3){
        ans11.innerHTML=ans11.innerHTML+quan[index].sol.c
    }
    else{
        ans11.innerHTML=ans11.innerHTML+quan[index].sol.d
    }
}
function getsol2() {
    let ans22 = document.getElementById("ans2")
    let num = quan[index1].correct
    if(num==1){
        ans22.innerHTML=ans22.innerHTML+quan[index1].sol.a
    }
    else if(num==2){
        ans22.innerHTML=ans22.innerHTML+quan[index1].sol.b
    }
    else if(num==3){
        ans22.innerHTML=ans22.innerHTML+quan[index1].sol.c
    }
    else{
        ans22.innerHTML=ans22.innerHTML+quan[index1].sol.d
    }
}

function getsol3() {
    let ans33 = document.getElementById("ans3")
    let num = quan[index3].correct
    if(num==1){
        ans33.innerHTML=ans33.innerHTML+quan[index3].sol.a
    }
    else if(num==2){
        ans33.innerHTML=ans33.innerHTML+quan[index3].sol.b
    }
    else if(num==3){
        ans33.innerHTML=ans33.innerHTML+quan[index3].sol.c
    }
    else{
        ans33.innerHTML=ans33.innerHTML+quan[index3].sol.d
    }
}

function getsol4() {
    let ans44 = document.getElementById("ans4")
    let num = quan[index4].correct
    if(num==1){
        ans44.innerHTML=ans44.innerHTML+quan[index4].sol.a
    }
    else if(num==2){
        ans44.innerHTML=ans44.innerHTML+quan[index4].sol.b
    }
    else if(num==3){
        ans44.innerHTML=ans44.innerHTML+quan[index4].sol.c
    }
    else{
        ans44.innerHTML=ans44.innerHTML+quan[index4].sol.d
    }
}

function getsol5() {
    let ans55 = document.getElementById("ans5")
    let num = quan[index5].correct
    if(num==1){
        ans55.innerHTML=ans55.innerHTML+quan[index5].sol.a
    }
    else if(num==2){
        ans55.innerHTML=ans55.innerHTML+quan[index5].sol.b
    }
    else if(num==3){
        ans55.innerHTML=ans55.innerHTML+quan[index5].sol.c
    }
    else{
        ans55.innerHTML=ans55.innerHTML+quan[index5].sol.d
    }
}

function getsol6() {
    let ans66 = document.getElementById("ans6")
    let num = quan[index6].correct
    if(num==1){
        ans66.innerHTML=ans66.innerHTML+quan[index6].sol.a
    }
    else if(num==2){
        ans66.innerHTML=ans66.innerHTML+quan[index6].sol.b
    }
    else if(num==3){
        ans66.innerHTML=ans66.innerHTML+quan[index6].sol.c
    }
    else{
        ans66.innerHTML=ans66.innerHTML+quan[index6].sol.d
    }
}

function getsol7() {
    let ans77 = document.getElementById("ans7")
    let num = quan[index7].correct
    if(num==1){
        ans77.innerHTML=ans77.innerHTML+quan[index7].sol.a
    }
    else if(num==2){
        ans77.innerHTML=ans77.innerHTML+quan[index7].sol.b
    }
    else if(num==3){
        ans77.innerHTML=ans77.innerHTML+quan[index7].sol.c
    }
    else{
        ans77.innerHTML=ans77.innerHTML+quan[index7].sol.d
    }
}

function getsol8() {
    let ans88 = document.getElementById("ans8")
    let num = quan[index8].correct
    if(num==1){
        ans88.innerHTML=ans88.innerHTML+quan[index8].sol.a
    }
    else if(num==2){
        ans88.innerHTML=ans88.innerHTML+quan[index8].sol.b
    }
    else if(num==3){
        ans88.innerHTML=ans88.innerHTML+quan[index7].sol.c
    }
    else{
        ans88.innerHTML=ans88.innerHTML+quan[index6].sol.d
    }
}
function getsol9() {
    let ans99 = document.getElementById("ans9")
    let num = quan[index9].correct
    if(num==1){
        ans99.innerHTML=ans99.innerHTML+quan[index9].sol.a
    }
    else if(num==2){
        ans99.innerHTML=ans99.innerHTML+quan[index9].sol.b
    }
    else if(num==3){
        ans99.innerHTML=ans99.innerHTML+quan[index9].sol.c
    }
    else{
        ans99.innerHTML=ans99.innerHTML+quan[index9].sol.d
    }
}

function getsol10() {
    let ans1010 = document.getElementById("ans10")
    let num = quan[index10].correct
    if(num==1){
        ans1010.innerHTML=ans1010.innerHTML+quan[index10].sol.a
    }
    else if(num==2){
        ans1010.innerHTML=ans1010.innerHTML+quan[index10].sol.b
    }
    else if(num==3){
        ans1010.innerHTML=ans1010.innerHTML+quan[index10].sol.c
    }
    else{
        ans1010.innerHTML=ans1010.innerHTML+quan[index10].sol.d
    }
}





checkans = () => {
    alert("DO YOU WANT TO FINALLY SUBMIT!")
    var total=0
    let ans1 = quan[index].correct
    var ele1 = document.getElementsByName('age1');
    for (i = 0; i < ele1.length; i++) {
        if (ele1[i].checked)
            var selected1 = ele1[i].value
    }
    console.log(selected1)
    if (ans1 == selected1){
        console.log("correct")
        total=total+1
    }
    else
    console.log("Wrong")

    let ans2 = quan[index1].correct
    var ele2 = document.getElementsByName('age2');
    for (i = 0; i < ele2.length; i++) {
        if (ele2[i].checked)
            var selected2 = ele2[i].value
    }
    console.log(selected2)
    if (ans2 == selected2) {
        console.log("correct")
        total=total+1
    }
    else
    console.log("Wrong")

    let ans3 = quan[index3].correct
    var ele3 = document.getElementsByName('age3');
    for (i = 0; i < ele3.length; i++) {
        if (ele3[i].checked)
            var selected3 = ele3[i].value
    }
    console.log(selected3)
    if (ans3 == selected3) {
        console.log("correct")
        total=total+1
    }
    else
    console.log("Wrong")

    let ans4 = quan[index4].correct
    var ele4 = document.getElementsByName('age4');
    for (i = 0; i < ele4.length; i++) {
        if (ele4[i].checked)
            var selected4 = ele4[i].value
    }
    console.log(selected4)
    if (ans4 == selected4) {
        console.log("correct")
        total=total+1
    }
    else
    console.log("Wrong")

    let ans5 = quan[index5].correct
    var ele5 = document.getElementsByName('age5');
    for (i = 0; i < ele5.length; i++) {
        if (ele5[i].checked)
            var selected5 = ele5[i].value
    }
    console.log(selected5)
    if (ans5 == selected5) {
        console.log("correct")
        total=total+1
    }
    else
    console.log("Wrong")

    let ans6 = quan[index6].correct
    var ele6 = document.getElementsByName('age6');
    for (i = 0; i < ele6.length; i++) {
        if (ele6[i].checked)
            var selected6 = ele6[i].value
    }
    console.log(selected6)
    if (ans6 == selected6) {
        console.log("correct")
        total=total+1
    }
    else
    console.log("Wrong")

    let ans7 = quan[index7].correct
    var ele7 = document.getElementsByName('age7');
    for (i = 0; i < ele7.length; i++) {
        if (ele7[i].checked)
            var selected7 = ele7[i].value
    }
    console.log(selected7)
    if (ans7 == selected7) {
        console.log("correct")
        total=total+1
    }
    else
    console.log("Wrong")

    let ans8 = quan[index8].correct
    var ele8 = document.getElementsByName('age8');
    for (i = 0; i < ele8.length; i++) {
        if (ele8[i].checked)
            var selected8 = ele8[i].value
    }
    console.log(selected8)
    if (ans8 == selected8) {
        console.log("correct")
        total=total+1
    }
    else
    console.log("Wrong")

    let ans9 = quan[index9].correct
    var ele9 = document.getElementsByName('age9');
    for (i = 0; i < ele9.length; i++) {
        if (ele9[i].checked)
            var selected9 = ele9[i].value
    }
    console.log(selected9)
    if (ans9 == selected9) {
        console.log("correct")
        total=total+1
    }
    else
    console.log("Wrong")

    let ans10 = quan[index10].correct
    var ele10 = document.getElementsByName('age10');
    for (i = 0; i < ele10.length; i++) {
        if (ele10[i].checked)
            var selected10 = ele10[i].value
    }
    console.log(selected10)
    if (ans10 == selected10) {
        console.log("correct")
        total=total+1
    }
    else
    console.log("Wrong")

    document.getElementById("correctanswers").style.display="inline"
    document.getElementById("correctanswers").innerHTML=document.getElementById("correctanswers").innerHTML+total;
    document.getElementById("submitbutton").style.display="none"
    document.getElementById("showanswers").style.display="inline"
}

function showans(){
    document.getElementById("checkanshere").style.display="block";
    getsol1()
    getsol2()
    getsol3()
    getsol4()
    getsol5()
    getsol6()
    getsol7()
    getsol8()
    getsol9()
    getsol10()
}