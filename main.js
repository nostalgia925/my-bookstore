function singin() {
    let usernames = ['aa', 'bb', 'cc'];
    let emails = ['aa@gmail.com', 'bb@gmail.com', 'cc@gmail.com'];
    let pswrd = ['aa', 'bb', 'cc'];

    let n = document.getElementById('name');
    let e = document.getElementById('email');
    let p = document.getElementById('password');
    console.log(n.value + e.value + p.value);
    let c = 0;

    while (usernames.length) {
        if (n.value == usernames[c] && e.value == emails[c] && p.value == pswrd[c]) {
            openTabe();
            break;
        } else {
            c += 1;
        }
    }
}

function openTabe() {
    window.open("bb.html");
    window.onbeforeunload = closeTabe();
}

function closeTabe() {
    window.close();
}

function search() {
    let books = ['The Snowman Jo Nesbo', 'If you Tell ', 'Ann Rule', 'If you Tell ', 'Ann Rule',
        'The Snowman Jo Nesbo'
    ];
    let srch = document.getElementById('search');
    let s = 0;

    while (books.length) {
        if (srch.value == books[s]) {
            console.log('Ok Found');
            window.location.href = 'book details.html';
            alert("found " + srch.value);
            break;
        } else {
            s += 1;
        }
    }
}

function books_details() {
    let img = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
    let title = ['The Snowman Jo Nesbo', 'If you Tell ', 'Ann Rule', 'If you Tell ', 'Ann Rule',
        'The Snowman Jo Nesbo'
    ];
    let disciption = [
        "Harry Hole is a mystery novel trope: the hardened, introverted, alcoholic detective who's also incredibly gifted at what he does. The trope doesn't seem tired at all in The Snowman, though. He's funny, very likeable and a genius, but human. He keeps getting close to the killer, but never close enough, until, of course, the end. The story begins with a scene from the serial killer's past, that doesn't make complete sense until near the end when the key details come to light. The point of view from which this exciting story is told shifts often, but isn't hard to follow, even though the plot and the characters' relationships to each other are complicated. The multiple points of view give the reader a front row seat to all the action. Duck, or you'll get sprayed with arterial blood spatter. Yes, there's some pretty graphic violence, sex, philosophy about life, and outrageous action scenes that go on for pages. At one point, I actually said, ",
        "Harry Hole is a mystery novel trope: the hardened, introverted, alcoholic detective who's also incredibly gifted at what he does. The trope doesn't seem tired at all in The Snowman, though. He's funny, very likeable and a genius, but human. He keeps getting close to the killer, but never close enough, until, of course, the end. The story begins with a scene from the serial killer's past, that doesn't make complete sense until near the end when the key details come to light. The point of view from which this exciting story is told shifts often, but isn't hard to follow, even though the plot and the characters' relationships to each other are complicated. The multiple points of view give the reader a front row seat to all the action. Duck, or you'll get sprayed with arterial blood spatter. Yes, there's some pretty graphic violence, sex, philosophy about life, and outrageous action scenes that go on for pages. At one point, I actually said, ",
        "Harry Hole is a mystery novel trope: the hardened, introverted, alcoholic detective who's also incredibly gifted at what he does. The trope doesn't seem tired at all in The Snowman, though. He's funny, very likeable and a genius, but human. He keeps getting close to the killer, but never close enough, until, of course, the end. The story begins with a scene from the serial killer's past, that doesn't make complete sense until near the end when the key details come to light. The point of view from which this exciting story is told shifts often, but isn't hard to follow, even though the plot and the characters' relationships to each other are complicated. The multiple points of view give the reader a front row seat to all the action. Duck, or you'll get sprayed with arterial blood spatter. Yes, there's some pretty graphic violence, sex, philosophy about life, and outrageous action scenes that go on for pages. At one point, I actually said, ",
        "Harry Hole is a mystery novel trope: the hardened, introverted, alcoholic detective who's also incredibly gifted at what he does. The trope doesn't seem tired at all in The Snowman, though. He's funny, very likeable and a genius, but human. He keeps getting close to the killer, but never close enough, until, of course, the end. The story begins with a scene from the serial killer's past, that doesn't make complete sense until near the end when the key details come to light. The point of view from which this exciting story is told shifts often, but isn't hard to follow, even though the plot and the characters' relationships to each other are complicated. The multiple points of view give the reader a front row seat to all the action. Duck, or you'll get sprayed with arterial blood spatter. Yes, there's some pretty graphic violence, sex, philosophy about life, and outrageous action scenes that go on for pages. At one point, I actually said, ",
        "Harry Hole is a mystery novel trope: the hardened, introverted, alcoholic detective who's also incredibly gifted at what he does. The trope doesn't seem tired at all in The Snowman, though. He's funny, very likeable and a genius, but human. He keeps getting close to the killer, but never close enough, until, of course, the end. The story begins with a scene from the serial killer's past, that doesn't make complete sense until near the end when the key details come to light. The point of view from which this exciting story is told shifts often, but isn't hard to follow, even though the plot and the characters' relationships to each other are complicated. The multiple points of view give the reader a front row seat to all the action. Duck, or you'll get sprayed with arterial blood spatter. Yes, there's some pretty graphic violence, sex, philosophy about life, and outrageous action scenes that go on for pages. At one point, I actually said, ",
        "Harry Hole is a mystery novel trope: the hardened, introverted, alcoholic detective who's also incredibly gifted at what he does. The trope doesn't seem tired at all in The Snowman, though. He's funny, very likeable and a genius, but human. He keeps getting close to the killer, but never close enough, until, of course, the end. The story begins with a scene from the serial killer's past, that doesn't make complete sense until near the end when the key details come to light. The point of view from which this exciting story is told shifts often, but isn't hard to follow, even though the plot and the characters' relationships to each other are complicated. The multiple points of view give the reader a front row seat to all the action. Duck, or you'll get sprayed with arterial blood spatter. Yes, there's some pretty graphic violence, sex, philosophy about life, and outrageous action scenes that go on for pages. At one point, I actually said, "
    ];

    document.body.innerHTML = '';
    for (let i = 0; i < img.length; i++) {
        document.body.innerHTML += `
        <div class="item">
            <img src="images/${img[i]}">
            <p style="text-align: justify;">
                <sup>
                <strong>${title[i]}</strong>
                </sup>
                <b>${disciption[i]}</b>
            </p>
        </div>
        `;
    }
}