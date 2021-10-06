const notesArr = [
    {
        id: 1,
        subject: "HTML",
        date: "09-29-21",
        feeling: "Excited",
        timeSpent: 120,
    },
    {
        id: 2,
        subject: "Git",
        date: "09-30-21",
        feeling: "Intrigued",
        timeSpent: 240,
    }
]


const noteAboutToday = {
    id: 3,
    subject: "JavaScript",
    date: "10-05-21",
    feeling: "Wary",
    timeSpent: 60,
}

notesArr.push(noteAboutToday)


const currentDay = new Date

//returns day of the month
const date = currentDay.getDate()

//returns year
const year = currentDay.getFullYear()

//returns month number
const month = currentDay.getMonth() + 1

//returns full date
const fullDate = `${month}-${date}-${year}`


// const searchTerm = "Wary"
// console.log(notes)

for (const noteObj of notesArr) {
    // if (noteObj.feeling === "Wary") {
    console.log(`Note ${noteObj.id}
    ${noteObj.date}
    I learned ${noteObj.subject}.
    I spent ${noteObj.timeSpent} minutes working on it.
    I felt ${noteObj.feeling}.`)
    // }
}

const createNote = (note) => {
    const lastIndex = notesArr.length - 1;
    const currentLastNote = notesArr[lastIndex];
    const maxID = currentLastNote.id;
    const idforNewNote = maxID + 1;
    note.id = idforNewNote
    note.date = fullDate
    notesArr.push(note)
}

const moreNewerNote = {
    subject: "CSS",
    feeling: "Frustrated",
    timeSpent: 65,
}


createNote(moreNewerNote)

console.log(notesArr)