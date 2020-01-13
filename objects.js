const s1 = {
    fullName: 'mehul chopra',
    gender: 'm',
    roll: 10,
    marks: 90.55
};

/* s1 = {
    fullName: 'jane',
    gender: 'f',
    roll: 10,
    marks: 90.55
}; */ // this will not work

// this is very much valid considering s1 is a const
s1.roll = 11;
s1.marks = 100;