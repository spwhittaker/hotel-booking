{id: Number //room number,
    shower: Boolean,
    beds: Object /* e.g. {
        single: 2,
        double: 1,
        cot: 1
    } */,
   
    /* price: Number, derive this somewhere else*/
    hotel: ObjectID,
    inhabitable: Boolean,
    niceView: Boolean,
}