var myTxt = new Array(
    "A life? Cool! Where can I download one of those from",
    "I have read and agree to the Terms & Conditions",
    "Buy? Thats not a bug, that's a feature",
    "Old MacDonald had a char*, s-t-d-i-o!",
    ".titanic { float:none; }",
    "I Googled 'how to start a wildifire'. I gpt 48,500 matches",
    "I just got fired from my job at the keyboard factory. They told me I want's putting in enough shifts",
    "My New Years resoluting is 1080p"
);

randnm = Math.round(Math.random() * (myTxt.length - 1));

document.getElementById("out").innerHTML = myTxt[randnm];