export interface Course {
    id: string; //unique
    coursename: string;//mandatory, varchar(35), value examples (Zumba, Pilates, Step-Aerobic, Powergymnastik & Stretch & Relax, ...)
    //coursedetails: string;//optional, varchar(255)
    room: string;//mandatory, varchar(35), value examples (Große Halle, Kleine Halle, Mehrzweckhalle, Reharaum, Freigelände)
    timefrom: string;//mandatory, varchar(5), value format hh:mm
    timeto: string;//mandatory, varchar(5), value format hh:mm
    dayofweek: string;//mandatory, varchar(10), values (Montag, Dienstag, Mittwoch, ...)
    trainer: string;//optional, varchchar(35), value format first name (name)
    hasMessage: boolean;
}
